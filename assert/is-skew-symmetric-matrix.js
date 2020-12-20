// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-square-matrix.js";var t=r;function e(r){var e,a,f;if(!t(r))return!1;for(e=r.shape[0],a=0;a<e;a++)for(f=0;f<=a;f++)if(r.get(a,f)!==-r.get(f,a))return!1;return!0}var a=e;export default a;
//# sourceMappingURL=is-skew-symmetric-matrix.js.map