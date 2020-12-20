// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import a from"./../../number/float64/base/to-float32.js";import e from"./../../blas/ext/base/ssumpw.js";var t=a,n=e;function o(r,a,e,o){var f,u,i,m,s,l,p;if(l=r-a,r<=0||l<=0)return NaN;if(1===r||0===o)return 0;for(f=n(r,e,o)/r,u=o<0?(1-r)*o:0,i=0,m=0,p=0;p<r;p++)s=t(e[u]-f),i=t(i+t(s*s)),m=t(m+s),u+=o;return t(t(i/l)-t(t(m/r)*t(m/l)))}var f=a,u=e.ndarray;function i(r,a,e,t,n){var o,i,m,s,l,p,b;if(p=r-a,r<=0||p<=0)return NaN;if(1===r||0===t)return 0;for(o=u(r,e,t,n)/r,i=n,m=0,s=0,b=0;b<r;b++)l=f(e[i]-o),m=f(m+f(l*l)),s=f(s+l),i+=t;return f(f(m/p)-f(f(s/r)*f(s/p)))}var m=r,s=o,l=i;m(s,"ndarray",l);export default s;
//# sourceMappingURL=svariancepn.js.map