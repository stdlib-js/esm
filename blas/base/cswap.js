// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../array/float32.js";var f=e;function t(r,e,t,n,o){var u,a,b,i,l,y,s,m,p;if(r<=0)return n;if(u=new f(e.buffer,e.byteOffset,2*e.length),a=new f(n.buffer,n.byteOffset,2*n.length),1===t&&1===o){for(m=0;m<2*r;m+=2)b=u[m],u[m]=a[m],a[m]=b,b=u[p=m+1],u[p]=a[p],a[p]=b;return n}for(y=t<0?2*(1-r)*t:0,s=o<0?2*(1-r)*o:0,i=2*t,l=2*o,m=0;m<r;m++)b=u[y],u[y]=a[s],a[s]=b,b=u[y+1],u[y+1]=a[s+1],a[s+1]=b,y+=i,s+=l;return n}var n=e;function o(r,e,f,t,o,u,a){var b,i,l,y,s,m,p,v;if(r<=0)return o;for(b=new n(e.buffer,e.byteOffset,2*e.length),i=new n(o.buffer,o.byteOffset,2*o.length),y=2*f,s=2*u,m=2*t,p=2*a,v=0;v<r;v++)l=b[m],b[m]=i[p],i[p]=l,l=b[m+1],b[m+1]=i[p+1],i[p+1]=l,m+=y,p+=s;return o}var u=r,a=t,b=o;u(a,"ndarray",b);export default a;
//# sourceMappingURL=cswap.js.map