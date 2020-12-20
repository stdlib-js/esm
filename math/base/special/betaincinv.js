// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import n from"./kernel-betaincinv.js";var t=r,a=n;function e(r,n,e,i){return t(r)||t(n)||t(e)||n<=0||e<=0||r<0||r>1?NaN:i?a(n,e,1-r,r)[0]:a(n,e,r,1-r)[0]}var i=e;export default i;
//# sourceMappingURL=betaincinv.js.map