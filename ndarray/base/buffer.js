// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./buffer-ctors.js";import f from"./../../buffer/alloc-unsafe.js";function n(r){var f;for(f=0;f<r.length;f++)r[f]=0;return r}var e=r,o=f,t=n;function u(r,f){var n,u,a;if("generic"===r){for(u=[],a=0;a<f;a++)u.push(0);return u}return"binary"===r?t(o(f)):(n=e(r))?new n(f):null}var a=u;export default a;
//# sourceMappingURL=buffer.js.map