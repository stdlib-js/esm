// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-square-matrix.js";var t=r;function e(r){var e,a,f,i;if(!t(r))return!1;for(e=r.shape[0]-1,f=0;f<e;f++)for(a=e-f,i=0;i<=a;i++)if(r.get(f,i)!==-r.get(e-i,a))return!1;return!0}var a=e;export default a;
//# sourceMappingURL=is-skew-persymmetric-matrix.js.map