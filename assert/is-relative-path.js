// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../utils/define-nonenumerable-read-only-property.js";import r from"./is-windows.js";import o from"./is-string.js";import t from"./is-absolute-path.js";var n=o.isPrimitive,s=t.posix;function e(i){return n(i)&&!s(i)}var m=o.isPrimitive,p=t.win32;function a(i){return m(i)&&!p(i)}var f,u=i,v=r,l=e,d=a;u(f=v?d:e,"posix",e),u(f,"win32",d);var j=f;export default j;
//# sourceMappingURL=is-relative-path.js.map