// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../number/float64/base/to-float32.js";var n=e;function t(r,e,t){var a,o,f;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(o=t<0?(1-r)*t:0,a=0,f=0;f<r;f++)a+=e[o],o+=t;return n(a/r)}var a=e;function o(r,e,n,t){var o,f,u;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(f=t,o=0,u=0;u<r;u++)o+=e[f],f+=n;return a(o/r)}var f=r,u=t,i=o;f(u,"ndarray",i);export default u;
//# sourceMappingURL=sdsmeanors.js.map