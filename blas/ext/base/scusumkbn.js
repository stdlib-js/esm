// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import a from"./../../../number/float64/base/to-float32.js";import e from"./../../../math/base/special/abs.js";var o=a,t=e;function n(r,a,e,n,f,i){var u,m,s,l,p,b,v;if(r<=0)return f;for(u=n<0?(1-r)*n:0,m=i<0?(1-r)*i:0,s=a,b=0,v=0;v<r;v++)l=e[u],p=o(s+l),b=t(s)>=t(l)?o(b+o(o(s-p)+l)):o(b+o(o(l-p)+s)),s=p,f[m]=o(s+b),u+=n,m+=i;return f}var f=a,i=e;function u(r,a,e,o,t,n,u,m){var s,l,p,b,v,d,c;if(r<=0)return n;for(s=t,l=m,p=a,d=0,c=0;c<r;c++)b=e[s],v=f(p+b),d=i(p)>=i(b)?f(d+f(f(p-v)+b)):f(d+f(f(b-v)+p)),p=v,n[l]=f(p+d),s+=o,l+=u;return n}var m=r,s=n,l=u;m(s,"ndarray",l);export default s;
//# sourceMappingURL=scusumkbn.js.map