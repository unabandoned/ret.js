const vows = require('./vows-adapter');
const assert = require('assert');
const ret = require('../dist');


/**
 * @param {string} regexp
 * @returns {!Error}
 */
const topicMacro = regexp => {
  try {
    ret(regexp);
    return null;
  } catch (err) {
    return err;
  }
};


/**
 * @param {string} regexp
 * @param {string} message
 * @returns {Function}
 */
const errMacro = (regexp, message) => {
  message = `Invalid regular expression: /${regexp}/: ${message}`;
  return err => {
    assert.isObject(err);
    assert.include(err, 'message');
    assert.equal(err.message, message);
  };
};


/**
 * @param {string} regexp
 * @param {string} name
 * @param {string} message
 * @returns {Object}
 */
const macro = (regexp, name, message) => {
  let obj = { topic: topicMacro(regexp) };
  obj[name] = errMacro(regexp, message);
  return obj;
};


vows.describe('Regexp Tokenizer Errors')
  .addBatch({
    'Bad repetiion at beginning of': {
      regexp: macro('?what', 'Nothing to repeat',
        'Nothing to repeat at column 0'),

      group: macro('foo(*\\w)', 'Nothing to repeat',
        'Nothing to repeat at column 4'),

      pipe: macro('foo|+bar', 'Nothing to repeat',
        'Nothing to repeat at column 4'),

      'with custom repetitional': macro('ok({3}no)', 'Nothing to repeat',
        'Nothing to repeat at column 3'),
    },

    'Bad grouping': {
      unmatched: macro('hey(yoo))', 'Unmatched )',
        'Unmatched ) at column 8'),
      unclosed: macro('(', 'Unterminated group',
        'Unterminated group'),
    },

    'Wrong group type': macro('abcde(?>hellow)', 'Invalid character',
      'Invalid group, character \'>\' after \'?\' at column 7'),

    'Empty group name': macro('(?<>\\d{4})', 'Invalid capture group name',
      'Invalid capture group name, character \'>\' after \'<\' at column 4'),

    'Bad group name': macro('(?<1year>\\d{4})', 'Invalid capture group name',
      'Invalid capture group name, character \'1\' after \'<\' at column 4'),

    'Unclosed group name': macro('(?<foo\\d{4})', 'Unclosed capture group name',
      'Unclosed capture group name, expected \'>\', found \'\\\' at column 7'),

    'Unclosed group terminal': macro('(?<foo', 'Unclosed capture group name',
      'Unclosed capture group name, expected \'>\', found \'undefined\' at column 7'),

    'Bad custom character set': macro('[abc', 'Unterminated character class',
      'Unterminated character class'),

    'End of pattern': {
      Backslash: macro('abc\\', 'Invalid Regular Expression', '\\ at end of pattern'),
      Groups: macro('(?', 'Invalid Regular Expression', "Invalid group, character 'undefined' after '?' at column 2"),
      Groups2: macro('(?=', 'Invalid Regular Expression', 'Unterminated group'),
    },
  })
  .export(module);


// Ported from upstream b38d6691 (reject escaped characters in group syntax).
const { describe, it } = require('node:test');

describe('Regexp Tokenizer Errors with escaped group syntax', () => {
  const testThrow = (regexp, message) => {
    assert.throws(() => ret(regexp), {
      message: `Invalid regular expression: /${regexp}/: ${message}`,
    });
  };

  it('Escaped group syntax', () => {
    testThrow('(?\\x3Da)', 'Invalid group at column 2');
    testThrow('\\x61(?\\x3Da)', 'Invalid group at column 6');
    testThrow('\\x61(?\\x28a)', 'Invalid group at column 6');
    testThrow('(?\\x21a)', 'Invalid group at column 2');
    testThrow('(?\\x3Aa)', 'Invalid group at column 2');
    testThrow('(?\\x3Cn>a)', 'Invalid group at column 2');
    // \u escapes are allowed in group names, but not straight after (?.
    testThrow('(?\\u003Da)', 'Invalid group at column 2');
    testThrow('\\x61(?b)', "Invalid group, character 'b' after '?' at column 6");
  });

  it('Escaped group name syntax', () => {
    testThrow('(?<\\x61>a)', "Invalid capture group name, character '\\' after '<' at column 4");
    testThrow('(?<a\\x62>c)', "Unclosed capture group name, expected '>', found '\\' at column 5");
    testThrow('(?<n\\x3Ea)', "Unclosed capture group name, expected '>', found '\\' at column 5");
    testThrow('(?<n\\x3E>a)', "Unclosed capture group name, expected '>', found '\\' at column 5");
    testThrow('\\x61(?<1a>b)', "Invalid capture group name, character '1' after '<' at column 8");
  });
});
