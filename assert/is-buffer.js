// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-object-like.js";var t=r;function o(r){return t(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}var f=o;export default f;
//# sourceMappingURL=is-buffer.js.map