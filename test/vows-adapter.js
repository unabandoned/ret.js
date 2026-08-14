// Minimal vows-compatible adapter backed by node:test + node:assert.
//
// ret.js's suite (test/*-test.js) was written for vows:
//
//   vows.describe('name')
//     .addBatch({ 'context': { topic: <value|fn>, 'a vow': t => assert.<x>(t) } })
//     .export(module)
//
// Rather than rewrite every batch, each test file now requires this adapter
// instead of 'vows'. `describe(name)` returns a suite whose `.addBatch(batch)`
// registers node:test describe/test nodes and `.export()` is a no-op kept for
// call-compatibility.
//
// vows structure -> node:test mapping:
//   * a batch is an object of contexts (keys) -> context objects (values).
//   * a context object may hold a `topic` (a value, or a 0-arg function
//     evaluated to produce the value), zero or more *vows* (keys whose value is
//     a function — run as node:test tests, receiving the topic), and nested
//     sub-contexts (keys whose value is an object — recursed). A sub-context
//     with no topic of its own inherits the parent topic (vows semantics).
//
// ret's topics are all synchronous (no `this.callback`), so topics are resolved
// eagerly; a vow that throws (assertion failure) fails exactly that node:test
// test.
//
// vows also augments the `assert` module with helpers (isArray, isObject,
// isString, isNumber, include, ...). node:assert lacks these, so we add them to
// the shared assert singleton on load — `require('assert')` in the test files
// then sees them.

var nodeTest = require('node:test');

augmentAssert(require('assert'));

function augmentAssert (a) {
  if (a.__vowsExtras) return;
  a.__vowsExtras = true;
  a.isArray = function (v, m) { a.ok(Array.isArray(v), m || ('expected array, got ' + typeof v)); };
  a.isObject = function (v, m) { a.ok(v !== null && typeof v === 'object', m || ('expected object, got ' + (v === null ? 'null' : typeof v))); };
  a.isString = function (v, m) { a.ok(typeof v === 'string', m || ('expected string, got ' + typeof v)); };
  a.isNumber = function (v, m) { a.ok(typeof v === 'number', m || ('expected number, got ' + typeof v)); };
  a.isBoolean = function (v, m) { a.ok(typeof v === 'boolean', m || ('expected boolean, got ' + typeof v)); };
  a.isFunction = function (v, m) { a.ok(typeof v === 'function', m || ('expected function, got ' + typeof v)); };
  a.isTrue = function (v, m) { a.strictEqual(v, true, m); };
  a.isFalse = function (v, m) { a.strictEqual(v, false, m); };
  a.isNull = function (v, m) { a.strictEqual(v, null, m); };
  a.isUndefined = function (v, m) { a.strictEqual(v, undefined, m); };
  a.isZero = function (v, m) { a.strictEqual(v, 0, m); };
  // vows' assert.include: string/array membership, otherwise object-has-key.
  a.include = function (coll, needle, m) {
    if (typeof coll === 'string' || Array.isArray(coll)) {
      a.ok(coll.indexOf(needle) !== -1,
        m || ('expected ' + JSON.stringify(coll) + ' to include ' + JSON.stringify(needle)));
    } else {
      a.ok(coll != null && (needle in Object(coll)),
        m || ('expected object to include key ' + needle));
    }
  };
  // equal / deepEqual / strictEqual / deepStrictEqual already exist on node:assert
  // with the loose/strict semantics vows relied on.
}

function runContext (name, ctx, parentTopic) {
  if (ctx === null || typeof ctx !== 'object') return;
  nodeTest.describe(name, function () {
    var topic = parentTopic;
    if (Object.prototype.hasOwnProperty.call(ctx, 'topic')) {
      topic = (typeof ctx.topic === 'function') ? ctx.topic(parentTopic) : ctx.topic;
    }
    Object.keys(ctx).forEach(function (key) {
      if (key === 'topic') return;
      var v = ctx[key];
      if (typeof v === 'function') {
        nodeTest.test(key, function () { v(topic); });
      } else if (v && typeof v === 'object') {
        runContext(key, v, topic);
      }
    });
  });
}

function describe (name) {
  var suite = {
    addBatch: function (batch) {
      nodeTest.describe(name, function () {
        Object.keys(batch).forEach(function (key) {
          runContext(key, batch[key], undefined);
        });
      });
      return suite;
    },
    // vows ran the batches on .export(module); node:test auto-runs the nodes
    // registered above, so this is a no-op kept for call-compatibility.
    export: function () { return suite; },
    run: function () { return suite; }
  };
  return suite;
}

module.exports = { describe: describe };
module.exports.describe = describe;
