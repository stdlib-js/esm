// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import a from"./../../blas/ext/base/dssumors.js";var e=a;function n(r,a,n){return r<=0?NaN:1===r||0===n?a[0]:e(r,a,n)/r}var o=a.ndarray;function t(r,a,e,n){return r<=0?NaN:1===r||0===e?a[n]:o(r,a,e,n)/r}var s=r,u=n,d=t;s(u,"ndarray",d);export default u;
//# sourceMappingURL=dsmeanors.js.map