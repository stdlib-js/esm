// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-nan.js";import a from"./../../../math/base/special/abs.js";var n=e,t=a;function o(r,e,a){var o,f,i,s,u,m,p,l,v;if(r<=0)return 0;if(1===r||0===a)return n(e[0])?0:e[0];for(i=a<0?(1-r)*a:0,o=0,f=0,s=0,v=0;v<r;v++)m=e[i],!1===n(m)&&(p=o+m,l=t(o)>=t(m)?o-p+m:m-p+o,o=p,p=s+l,u=t(s)>=t(l)?s-p+l:l-p+s,s=p,f+=u),i+=a;return o+s+f}var f=e,i=a;function s(r,e,a,n){var t,o,s,u,m,p,l,v,b;if(r<=0)return 0;if(1===r||0===a)return f(e[n])?0:e[n];for(s=n,t=0,o=0,u=0,b=0;b<r;b++)p=e[s],!1===f(p)&&(l=t+p,v=i(t)>=i(p)?t-l+p:p-l+t,t=l,l=u+v,m=i(u)>=i(v)?u-l+v:v-l+u,u=l,o+=m),s+=a;return t+u+o}var u=r,m=o,p=s;u(m,"ndarray",p);export default m;
//# sourceMappingURL=dnansumkbn2.js.map