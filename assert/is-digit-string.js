// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";var t=r.isPrimitive,i=48,e=57;function n(r){var n,f,o;if(!t(r))return!1;if(0===(n=r.length))return!1;for(o=0;o<n;o++)if((f=r.charCodeAt(o))<i||f>e)return!1;return!0}var f=n;export default f;
//# sourceMappingURL=is-digit-string.js.map