// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../number/float64/base/to-float32.js";import a from"./../../../math/base/assert/is-nanf.js";import e from"./../../../math/base/special/abs.js";var n=t,o=a,f=e;function i(r,t,a){var e,i,s,m,u,p;if(r<=0)return 0;if(1===r||0===a)return o(t[0])?0:t[0];for(i=a<0?(1-r)*a:0,e=0,u=0,p=0;p<r;p++)s=t[i],!1===o(s)&&(m=e+s,u=f(e)>=f(s)?n(u+n(n(e-m)+s)):n(u+n(n(s-m)+e)),e=m),i+=a;return n(e+u)}var s=t,m=a,u=e;function p(r,t,a,e){var n,o,f,i,p,l;if(r<=0)return 0;if(1===r||0===a)return m(t[e])?0:t[e];for(o=e,n=0,p=0,l=0;l<r;l++)f=t[o],!1===m(f)&&(i=n+f,p=u(n)>=u(f)?s(p+s(s(n-i)+f)):s(p+s(s(f-i)+n)),n=i),o+=a;return s(n+p)}var l=r,b=i,v=p;l(b,"ndarray",v);export default b;
//# sourceMappingURL=snansumkbn.js.map