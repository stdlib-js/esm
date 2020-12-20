// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../number/float64/base/get-high-word.js";import t from"./../../../number/float64/base/set-high-word.js";import o from"./../../../number/float64/base/set-low-word.js";import n from"./../assert/is-nan.js";import a from"./../../../constants/math/float64-exponent-bias.js";import e from"./../../../constants/math/float64-ninf.js";function s(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}function f(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}var m=r,i=s,u=f,p=1048575,b=.3333333333333333;function l(r){var t,o,n,a,e,s,f,l,c,h;return n=m(r),a=r-1,(p&2+n)<3?0===a?0:a*a*(b*a-.5):(c=(n&=p)-398458|0,h=440401-n|0,o=(l=(s=(e=a/(2+a))*e)*s)*i(l),f=s*u(l)+o,(c|=h)>0?e*((t=.5*a*a)+f)-t:e*(f-a))}var c=r,h=t,j=o,v=n,d=a,w=e,g=l,x=0x40000000000000,N=.4342944818781689,k=25082946711645275e-27,q=.30102999566361177,y=3694239077158931e-28,z=1048575,A=2146435072,B=1048576,C=1072693248;function D(r){var t,o,n,a,e,s,f;return v(r)||r<0?NaN:0===r?w:(e=0,(o=c(r))<B&&(e-=54,o=c(r*=x)),o>=A?r+r:(e+=(o>>20)-d|0,r=h(r,(o&=z)|(a=o+614244&1048576|0)^C),s=e+=a>>20|0,n=g(r),t=j(r-=1,0),f=s*y+(r+n)*k,(f+=(r-t+n)*N+t*N)+s*q))}var E=D;export default E;
//# sourceMappingURL=log10.js.map