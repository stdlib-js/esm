// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../math/base/special/pow.js";import r from"./../../float64/base/to-uint32.js";var a=t,e=r,o=32;function n(t){var r,n;if(t.length!==o)throw new Error("invalid argument. Input string must have a length equal to "+o+". Value: `"+t+"`.");for(r=0,n=0;n<t.length;n++)"1"===t[n]&&(r+=a(2,o-n-1));return e(r)}var i=n;export default i;
//# sourceMappingURL=from-binary-string.js.map