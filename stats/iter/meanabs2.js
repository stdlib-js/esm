// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-iterator-like.js";import e from"./../../assert/has-own-property.js";import a from"./../incr/meanabs2.js";var t=r,o=e,i=a;function n(r){var e,a;if(!t(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");for(e=i();"number"==typeof(a=r.next()).value?e(a.value):o(a,"value")&&e(NaN),!a.done;);return e()}var s=n;export default s;
//# sourceMappingURL=meanabs2.js.map