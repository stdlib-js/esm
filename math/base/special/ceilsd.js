// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./../assert/is-infinite.js";import t from"./pow.js";import i from"./log10.js";import m from"./ln.js";import s from"./abs.js";import f from"./floor.js";import e from"./../../../number/float64/base/exponent.js";import n from"./ceil.js";var a=r,p=o,j=t,l=i,u=m,N=s,b=f,v=e,c=n;function g(r,o,t){var i,m,s,f;if(a(r)||a(o)||o<1||p(o))return NaN;if(arguments.length>2){if(a(t)||t<=0||p(t))return NaN;i=t}else i=10;return p(r)||0===r?r:(m=10===i?l(N(r)):2===i?v(N(r)):u(N(r))/u(i),m=b(m-o+1),s=j(i,N(m)),p(s)?r:(f=m<0?c(r*s)/s:c(r/s)*s,p(f)?r:f))}var x=g;export default x;
//# sourceMappingURL=ceilsd.js.map