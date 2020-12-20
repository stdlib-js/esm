// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../constants/math/float32-pinf.js";import r from"./../../../constants/math/float32-ninf.js";import a from"./../../../constants/math/float32-exponent-bias.js";import n from"./../../../math/base/special/pow.js";import o from"./../../float64/base/to-float32.js";var s=n;function e(t){var r,a=0;for(r=0;r<t.length;r++)"1"===t[r]&&(a+=s(2,-(r+1)));return a}var f=t,i=r,m=a,l=n,u=o,p=e;function h(t){var r,a,n;if(32!==t.length)throw new Error("invalid argument. Input string must have a length equal to 32. Value: `"+t+"`.");if(r="1"===t[0]?-1:1,n=parseInt(t.substring(1,9),2)-m,a=p(t.substring(9)),n===-m){if(0===a)return 1===r?0:-0;n=-(m-1)}else{if(n===m+1)return 0===a?1===r?f:i:NaN;a+=1}return u(r*a*l(2,n))}var g=h;export default g;
//# sourceMappingURL=from-binary-string.js.map