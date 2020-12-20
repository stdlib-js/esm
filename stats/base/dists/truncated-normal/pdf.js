// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/special/exp.js";import a from"./../../../../math/base/special/pow.js";import o from"./../../../../math/base/special/sqrt.js";import n from"./../../../../math/base/assert/is-nan.js";import s from"./../normal/cdf.js";import e from"./../../../../constants/math/float64-pi.js";import m from"./../../../../utils/constant-function.js";var i=t,f=a,p=o,u=n,c=s,l=e;function j(r,t,a,o,n){var s,e,m,j;return u(r)||u(t)||u(a)||n<=0||t>=a?NaN:r<t||r>a?0:(s=2*f(n,2),e=1/p(s*l),m=-1/s,j=c((a-o)/n)-c((t-o)/n),e*i(m*f(r-o,2))/j)}var N=m,b=t,h=a,v=n,d=o,y=s,x=e;function q(r,t,a,o){var n,s,e,m;return v(r)||v(t)||v(a)||v(o)||o<=0||r>=t?N(NaN):(n=2*h(o,2),s=1/d(n*x),e=-1/n,m=y((t-a)/o)-y((r-a)/o),function(o){if(v(o))return NaN;if(o<r||o>t)return 0;return s*b(e*h(o-a,2))/m})}var w=r,g=j,k=q;w(g,"factory",k);export default g;
//# sourceMappingURL=pdf.js.map