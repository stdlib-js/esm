// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-uint8array.js";import t from"./is-buffer.js";var f=r,i=t;function o(r){return!(!f(r)&&!i(r))&&(!(r.length<19)&&(31===r[0]&&139===r[1]&&8===r[2]))}var a=o;export default a;
//# sourceMappingURL=is-gzip-buffer.js.map