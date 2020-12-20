// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-matrix-like.js";var e=r;function t(r){var t,f,i;if(!e(r))return!1;if((t=r.shape[0])!==r.shape[1])return!0;for(f=0;f<t;f++)for(i=0;i<f;i++)if(r.get(f,i)!==r.get(i,f))return!0;return!1}var f=t;export default f;
//# sourceMappingURL=is-nonsymmetric-matrix.js.map