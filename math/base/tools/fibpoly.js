// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import o from"./evalpoly.js";import e from"./../special/pow.js";import n from"./../special/abs.js";import t from"./../special/binomcoef.js";var a={},f=t,i=a;function p(r){var o,e;if(void 0===(o=i[r])){for(o=new Array(r),e=0;e<r;e++)o[e]=0;for(e=r-1;e>=0;e-=2)o[e]=f((r+e-1)/2,e);i[r]=o}return o}var m=o,u=e,c=n,s=p;function l(r,o){var e,n,t;return n=c(r),e=s(n),t=m(e,o),r>=0?t:u(-1,n-1)*t}var v=o.factory,y=e,j=n,d=p;function b(r){var o,e,n,t;return e=j(r),o=d(e),n=v(o),t=y(-1,e-1),r>=0||1===t?n:function(r){return-1*n(r)}}var w=r,x=l,A=b;w(x,"factory",A);export default x;
//# sourceMappingURL=fibpoly.js.map