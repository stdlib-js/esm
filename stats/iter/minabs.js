// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-iterator-like.js";import e from"./../../assert/has-own-property.js";import t from"./../incr/minabs.js";var a=r,o=e,i=t;function n(r){var e,t;if(!a(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");for(e=i();"number"==typeof(t=r.next()).value?e(t.value):o(t,"value")&&e(NaN),!t.done;);return e()}var s=n;export default s;
//# sourceMappingURL=minabs.js.map