// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../string/lowercase.js";import i from"./../string/uppercase.js";import t from"./is-string.js";var s=r,o=i,e=t.isPrimitive;function m(r){var i;return!(!e(r)||""===r)&&((i=r[0])===o(i)&&i!==s(i))}var a=m;export default a;
//# sourceMappingURL=is-capitalized.js.map