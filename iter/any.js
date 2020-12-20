// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-iterator-like.js";var e=r;function t(r){var t;if(!e(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");for(;;){if((t=r.next()).value)return!0;if(t.done)break}return!1}var a=t;export default a;
//# sourceMappingURL=any.js.map