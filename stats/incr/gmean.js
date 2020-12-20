// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../math/base/special/ln.js";import t from"./../../math/base/special/exp.js";var e=r,a=t;function n(){var r,t,n;return r=0,t=0,n=1,function(i){if(0===arguments.length)return 0===t?null:n;return t+=1,r+=e(i),n=a(r/t)}}var i=n;export default i;
//# sourceMappingURL=gmean.js.map