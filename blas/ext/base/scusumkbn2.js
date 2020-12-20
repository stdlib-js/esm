// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import a from"./../../../number/float64/base/to-float32.js";import e from"./../../../math/base/special/abs.js";var o=a,t=e;function n(r,a,e,n,f,i){var u,m,s,l,p,b,v,d,c;if(r<=0)return f;for(m=n<0?(1-r)*n:0,s=i<0?(1-r)*i:0,u=0,l=0,c=0;c<r;c++)b=e[m],v=o(a+b),d=t(a)>=t(b)?o(o(a-v)+b):o(o(b-v)+a),a=v,v=o(l+d),p=t(l)>=t(d)?o(o(l-v)+d):o(o(d-v)+l),l=v,u=o(u+p),f[s]=o(a+o(l+u)),m+=n,s+=i;return f}var f=a,i=e;function u(r,a,e,o,t,n,u,m){var s,l,p,b,v,d,c,j,y;if(r<=0)return n;for(l=t,p=m,s=0,b=0,y=0;y<r;y++)d=e[l],c=f(a+d),j=i(a)>=i(d)?f(f(a-c)+d):f(f(d-c)+a),a=c,c=f(b+j),v=i(b)>=i(j)?f(f(b-c)+j):f(f(j-c)+b),b=c,s=f(s+v),n[p]=f(a+f(b+s)),l+=o,p+=u;return n}var m=r,s=n,l=u;m(s,"ndarray",l);export default s;
//# sourceMappingURL=scusumkbn2.js.map