// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../array/uint32.js";import t from"./../../../array/float64.js";import a from"./../../../assert/is-little-endian.js";var e,o=a,f=e=!0===o?0:1,i=r,n=t,m=f,s=new n(1),u=new i(s.buffer);function l(r,t){return s[0]=r,u[m]=t>>>0,s[0]}var p=l;export default p;
//# sourceMappingURL=set-low-word.js.map