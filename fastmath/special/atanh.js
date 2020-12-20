// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../math/base/assert/is-infinite.js";import r from"./../../math/base/assert/is-nan.js";import s from"./../../math/base/special/ln.js";var t=a,e=r,i=s;function m(a){return 0===a?a:e(a)||t(a)?NaN:.5*i((1+a)/(1-a))}var n=m;export default n;
//# sourceMappingURL=atanh.js.map