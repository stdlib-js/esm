// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../special/abs.js";import r from"./../special/max.js";import a from"./../../../constants/math/float64-max.js";import o from"./../../../constants/math/float64-smallest-normal.js";import n from"./../../../constants/math/float64-eps.js";function m(t,r,a,o,n,m){var s;return 0===n?(t+o*(r/a))*m:0===(s=r*n)?t*m+r*m*n:(t+s)*m}var s=m;function f(t,r,a,o,n){var m,f;f=1/(o+n*(m=n/o)),t[0]=s(r,a,o,n,m,f),t[1]=s(a,-r,o,n,m,f)}var i=t,e=r,l=a,c=o,p=n,u=f,v=.5*l,j=c*(2/n),h=2/(n*n);function x(t,r,a,o,n){var m,s,f;return m=e(i(r),i(a)),s=e(i(o),i(n)),f=1,m>=v?(r*=.5,a*=.5,f*=2):m<=j&&(r*=h,a*=h,f/=h),s>=v?(o*=.5,n*=.5,f*=.5):s<=j&&(o*=h,n*=h,f*=h),i(n)<=i(o)?u(t,r,a,o,n):(u(t,a,r,n,o),t[1]*=-1),t[0]*=f,t[1]*=f,t}var b=x;function d(t,r,a,o,n){return 4===arguments.length?b([0,0],t,r,a,o):b(t,r,a,o,n)}var g=d;export default g;
//# sourceMappingURL=divide.js.map