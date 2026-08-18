# Changelog

## [0.5.2](https://github.com/unabandoned/ret.js/compare/ret-v0.5.1...ret-v0.5.2) (2026-08-18)


### Dependencies & maintenance

* add .unabandoned.yml dashboard metadata ([#3](https://github.com/unabandoned/ret.js/issues/3)) ([6d258d9](https://github.com/unabandoned/ret.js/commit/6d258d97c97939d09993c66983dfd3889d89a94b))
* **deps:** update commitlint monorepo to v21.2.2 ([#9](https://github.com/unabandoned/ret.js/issues/9)) ([7a0e33a](https://github.com/unabandoned/ret.js/commit/7a0e33a3f84cc3669c7a1b5d39db3620214428a0))
* **deps:** update unabandoned/.github action to v1.0.1 ([#10](https://github.com/unabandoned/ret.js/issues/10)) ([dcb1232](https://github.com/unabandoned/ret.js/commit/dcb1232bbf8d729190e763ca3eee8219f97d9a58))
* **deps:** update unabandoned/.github digest to 88ce617 ([#5](https://github.com/unabandoned/ret.js/issues/5)) ([4d4f663](https://github.com/unabandoned/ret.js/commit/4d4f66333ad6a69e1b7cd3abba81dd686baa820b))
* pin reusable workflows to the @unabandoned/.github v1.0.0 release ([#8](https://github.com/unabandoned/ret.js/issues/8)) ([3bbafdc](https://github.com/unabandoned/ret.js/commit/3bbafdcf52fa66e4de084cb36849cbc4bfc146d9))

## [0.5.1](https://github.com/unabandoned/ret.js/compare/ret-v0.5.0...ret-v0.5.1) (2026-08-14)


### Features

* add interface for token reconstruction ([#25](https://github.com/unabandoned/ret.js/issues/25)) ([efb9f07](https://github.com/unabandoned/ret.js/commit/efb9f07070402962192277189e99f9b700c85b70))
* add support for named capture groups ([#43](https://github.com/unabandoned/ret.js/issues/43)) ([90a77fc](https://github.com/unabandoned/ret.js/commit/90a77fcb4e3869bc45b61d332b852948b5982637))
* add typings ([#17](https://github.com/unabandoned/ret.js/issues/17)) ([6621c4d](https://github.com/unabandoned/ret.js/commit/6621c4de683274587e61fcf329b15cff62c1ad63))


### Bug Fixes

* fix backreferencing issue for digits greater than 10 ([#39](https://github.com/unabandoned/ret.js/issues/39)) ([21ab655](https://github.com/unabandoned/ret.js/commit/21ab65553767df8c664a9e8acdd98645784d7186))
* fix parsing a backslash (\) at the end of pattern ([0ce932b](https://github.com/unabandoned/ret.js/commit/0ce932b9130df929eacc2fce1a741e72863df552))
* fix parsing a reference at the end of pattern ([eee1f81](https://github.com/unabandoned/ret.js/commit/eee1f812f4c98b8a3e110c0cc8abf981f43a2ebe))
* fix parsing class ranges that contain square brackets and backslashes ([#29](https://github.com/unabandoned/ret.js/issues/29)) ([6f7e030](https://github.com/unabandoned/ret.js/commit/6f7e0300174e0fd766fc16dc0da1a384d10aa517))
* fix parsing octal numbers for non-backreferences ([#40](https://github.com/unabandoned/ret.js/issues/40)) ([326051e](https://github.com/unabandoned/ret.js/commit/326051e5aa145eea85634ac58ea7f2a77011d083))
* Handle whitespaces in characters class correctly ([#11](https://github.com/unabandoned/ret.js/issues/11)) ([2abf6ab](https://github.com/unabandoned/ret.js/commit/2abf6ab572141559c8fba7294eb07e35aebf0765)), closes [#10](https://github.com/unabandoned/ret.js/issues/10)
* **typings:** bundle typings directory ([#19](https://github.com/unabandoned/ret.js/issues/19)) ([eeefabf](https://github.com/unabandoned/ret.js/commit/eeefabfe2b19270bec243fa8f495da4e78ee8725))
* valid capture group name changes ([90a77fc](https://github.com/unabandoned/ret.js/commit/90a77fcb4e3869bc45b61d332b852948b5982637))


### Dependencies & maintenance

* add a couple more tests for untermianted groups ([761965c](https://github.com/unabandoned/ret.js/commit/761965cd7048509ce91528cb680222d431bca3f5))
* add FUNDING.yml ([d817f4a](https://github.com/unabandoned/ret.js/commit/d817f4aab1a11d5a2df28623a9efa1a7a03c6777))
* Add more information and examples in `README` ([#12](https://github.com/unabandoned/ret.js/issues/12)) ([b26fba1](https://github.com/unabandoned/ret.js/commit/b26fba1e8da3b489bac6a836bc96ffa88b6de281))
* add security contact information ([55250cc](https://github.com/unabandoned/ret.js/commit/55250cce944784b407ca97e970dd0125fe17075a))
* **ci:** drop support for node 4, 6, 8 ([04693c1](https://github.com/unabandoned/ret.js/commit/04693c17cb462e4806e6157eee6b32ac9633ec71))
* **ci:** update action versions ([2be877e](https://github.com/unabandoned/ret.js/commit/2be877e998d10bb7708d6d618cdba62d7fe4a891))
* **ci:** use github actions ([2635850](https://github.com/unabandoned/ret.js/commit/26358505b6bb722d8d232a9645d21cb7b53b768f))
* **ci:** use semantic-release for auto publish and release ([6421309](https://github.com/unabandoned/ret.js/commit/642130956245f9628d931611420e96284f73b358))
* clearer logic around group types ([543c609](https://github.com/unabandoned/ret.js/commit/543c609080530277b808c00c1fa07921f0ea7e38))
* **coverage:** remove istanbul, use nyc ([f53a44a](https://github.com/unabandoned/ret.js/commit/f53a44aeca4c487873c6f965571c2772d8a73111))
* extra test to validate pattern termination behavior ([90a77fc](https://github.com/unabandoned/ret.js/commit/90a77fcb4e3869bc45b61d332b852948b5982637))
* **license:** remove license from readme ([905667d](https://github.com/unabandoned/ret.js/commit/905667d37482af26b45081bcdd438e508482f319))
* **lint:** add eslint config, script, and workflow ([92349e8](https://github.com/unabandoned/ret.js/commit/92349e842b9c5fddedf0fc4fc46254b7bdd980ae))
* onboard ret.js into the unabandoned program ([#1](https://github.com/unabandoned/ret.js/issues/1)) ([d23f7a9](https://github.com/unabandoned/ret.js/commit/d23f7a9c39dea930d05c69c6454ddbb86adc3f2c))
* **package:** add author email ([a980451](https://github.com/unabandoned/ret.js/commit/a98045180e7938f1f0c460bcc790b43bd3f77da4))
* **package:** fix pointing to main compiled entry point ([eb1271d](https://github.com/unabandoned/ret.js/commit/eb1271d7eeb716fc4ac9d3aab262b583bf5a5eaf))
* **package:** npm audit fix ([7129228](https://github.com/unabandoned/ret.js/commit/7129228d4a9d86240a2d3fa452c8401d45064241))
* **package:** update vows ([48f0730](https://github.com/unabandoned/ret.js/commit/48f07303e5f2603c37c8083ba7641e9ebc0dbc79))
* **readme:** use shields badge ([47e88c3](https://github.com/unabandoned/ret.js/commit/47e88c3194641c39b5a82c60a7c6e1fa6a813af1))
* **release:** 0.2.2 ([c856e90](https://github.com/unabandoned/ret.js/commit/c856e909be0ea5b4518c722b3481c4c52ce839fe))
* **release:** 0.3.0 ([90f393d](https://github.com/unabandoned/ret.js/commit/90f393d4644f1e83445fe0ecbb31517e5047e104))
* **release:** 0.3.1 ([bc25727](https://github.com/unabandoned/ret.js/commit/bc25727c578e48cb3e36c357bcbe3558b10ebda5))
* remove node 4 support ([d74a30f](https://github.com/unabandoned/ret.js/commit/d74a30f17c3100dfaf00289e076eb7ef3dbaf492))
* typescript conversion ([#24](https://github.com/unabandoned/ret.js/issues/24)) ([6e2b309](https://github.com/unabandoned/ret.js/commit/6e2b30966ef3c38888674a776d66a32d4d44e65d))
* update node versions ([84bf5c5](https://github.com/unabandoned/ret.js/commit/84bf5c5766580403e0a51f4bf3b0bc8610829e32))
* Update to node 10 in .travis.yml ([ca8f0a3](https://github.com/unabandoned/ret.js/commit/ca8f0a3cb66b1e5b29d6f84ae62f2d4f060571aa))
* use arrow functions and `let` ([6c8cffe](https://github.com/unabandoned/ret.js/commit/6c8cffe689fb937a44ed34a40bf6d85f33df7f12))

## ret Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
