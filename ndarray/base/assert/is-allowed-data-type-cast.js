// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./is-safe-data-type-cast.js";import t from"./is-same-kind-data-type-cast.js";var e=a,s=t;function r(a,t,r){return"unsafe"===r||(a===t||"none"!==r&&"equiv"!==r&&("safe"===r?e(a,t):s(a,t)))}var f=r;export default f;
//# sourceMappingURL=is-allowed-data-type-cast.js.map