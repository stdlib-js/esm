// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../math/base/special/abs.js";var t=r;function n(){var r,n,a,e,u,f,i;return r=0,n=0,e=0,function(l){if(0===arguments.length)return a?r+e+n:null;a=!0,f=r+l,i=t(r)>=t(l)?r-f+l:l-f+r;r=f,f=e+i,u=t(e)>=t(i)?e-f+i:i-f+e;return r+(e=f)+(n+=u)}}var a=n;export default a;
//# sourceMappingURL=sum.js.map