// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";function n(r,n,o,e){var f,a,i,t,u,d,l,p,m,v,y,c,s,b;if(!((s=n[0])<=0))for(u=(f=o[0])<0?(1-s)*f:0,d=(a=o[1])<0?(1-s)*a:0,l=(i=o[2])<0?(1-s)*i:0,p=(t=o[3])<0?(1-s)*t:0,m=r[0],v=r[1],y=r[2],c=r[3],b=0;b<s;b++)c[p]=e(m[u],v[d],y[l]),u+=f,d+=a,l+=i,p+=t}function o(r,n,o,e,f){var a,i,t,u,d,l,p,m,v,y,c,s,b,j;if(!((b=n[0])<=0))for(d=e[0],l=e[1],p=e[2],m=e[3],a=o[0],i=o[1],t=o[2],u=o[3],v=r[0],y=r[1],c=r[2],s=r[3],j=0;j<b;j++)s[m]=f(v[d],y[l],c[p]),d+=a,l+=i,p+=t,m+=u}var e=r,f=n,a=o;e(f,"ndarray",a);export default f;
//# sourceMappingURL=ternary.js.map