// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import n from"./../../../assert/is-function.js";import r from"./../assert/is-nan.js";import t from"./../../../constants/math/float64-pinf.js";import a from"./../../../constants/math/float64-ninf.js";import i from"./../special/abs.js";var o=i;function e(n,r){return(n=o(n))<(r=o(r))?r:n}function u(n,r){return n<r?r:n}var f=i;function s(n,r){return(n=f(n))>(r=f(r))?r:n}function m(n,r){return n>r?r:n}var c=i;function p(n,r){return(n=c(n))+((r=c(r))-n)/2}function v(n,r){return n+(r-n)/2}function l(n){return n}function d(n,r){return r}var N=e,b=u,j=s,x=m,h=p,g=v,w=l,y=d,z={"max-abs":N,max:b,"min-abs":j,min:x,"mean-abs":h,mean:g,x:w,y:y},E=n,U=r,V=t,k=a,q=i,A=z;function B(n,r,t){var a,i;if(U(n)||U(r))return NaN;if(n===V||n===k||r===V||r===k)return n===r?NaN:V;if(n===r)return 0;if(E(t))a=t;else if(void 0===t&&(t="max-abs"),void 0===(a=A[t]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+t+"`.");return 0===(i=a(n,r))?NaN:q((n-r)/i)}var C=B;export default C;
//# sourceMappingURL=relative-difference.js.map