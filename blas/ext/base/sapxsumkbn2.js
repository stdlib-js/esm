// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../number/float64/base/to-float32.js";import t from"./../../../math/base/special/abs.js";var a=e,n=t;function o(r,e,t,o){var f,i,u,m,s,l,p,b,v;if(r<=0)return 0;if(1===r||0===o)return a(e+t[0]);for(u=o<0?(1-r)*o:0,f=0,i=0,m=0,v=0;v<r;v++)l=a(e+t[u]),p=a(f+l),b=n(f)>=n(l)?a(a(f-p)+l):a(a(l-p)+f),f=p,p=a(m+b),s=n(m)>=n(b)?a(a(m-p)+b):a(a(b-p)+m),m=p,i=a(i+s),u+=o;return a(f+a(m+i))}var f=e,i=t;function u(r,e,t,a,n){var o,u,m,s,l,p,b,v,d;if(r<=0)return 0;if(1===r||0===a)return f(e+t[n]);for(m=n,o=0,u=0,s=0,d=0;d<r;d++)p=f(e+t[m]),b=f(o+p),v=i(o)>=i(p)?f(f(o-b)+p):f(f(p-b)+o),o=b,b=f(s+v),l=i(s)>=i(v)?f(f(s-b)+v):f(f(v-b)+s),s=b,u=f(u+l),m+=a;return f(o+f(s+u))}var m=r,s=o,l=u;m(s,"ndarray",l);export default s;
//# sourceMappingURL=sapxsumkbn2.js.map