// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./log1p.js";import t from"./sqrt.js";import m from"./abs.js";import s from"./exp.js";import a from"./pow.js";import f from"./../../../constants/math/float64-e.js";import p from"./../../../constants/math/float64-eps.js";function n(r){var o,t;return 0===r?1/0:((r<0?-r:r)<=1?(o=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(o=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),o/t)}var e=r,i=o,j=t,u=m,c=s,l=a,v=f,h=p,x=n,N=10.900511;function b(r,o){var t,m,s,a,f,p,n;return e(r)||e(o)||r<0||o<0?NaN:1===o?1/r:1===r?1/o:(n=r+o)<h?(f=n/r,f/=o):n===r&&o<h?1/o:n===o&&r<h?1/r:(r<o&&(p=o,o=r,r=p),m=r+N-.5,s=o+N-.5,a=n+N-.5,f=x(r)*(x(o)/x(n)),u(o*(t=r-.5-o))<100*a&&r>100?f*=c(t*i(-o/a)):f*=l(m/a,t),f*=l(a>1e10?m/a*(s/a):m*s/(a*a),o),f*=j(v/s))}var d=b;export default d;
//# sourceMappingURL=beta.js.map