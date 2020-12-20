// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-nanf.js";import n from"./../../../math/base/special/floor.js";var t=e,f=n,o=128;function a(r,e,n,i){var u,s,m,p,l,v,d,b,c,j,y,h,x;if(r<=0)return 0;if(1===r||0===n)return t(e[i])?0:e[i];if(u=i,r<8){for(y=0,x=0;x<r;x++)!1===t(e[u])&&(y+=e[u]),u+=n;return y}if(r<=o){for(s=t(e[u])?0:e[u],m=t(e[u+=n])?0:e[u],p=t(e[u+=n])?0:e[u],l=t(e[u+=n])?0:e[u],v=t(e[u+=n])?0:e[u],d=t(e[u+=n])?0:e[u],b=t(e[u+=n])?0:e[u],c=t(e[u+=n])?0:e[u],u+=n,j=r%8,x=8;x<r-j;x+=8)s+=t(e[u])?0:e[u],m+=t(e[u+=n])?0:e[u],p+=t(e[u+=n])?0:e[u],l+=t(e[u+=n])?0:e[u],v+=t(e[u+=n])?0:e[u],d+=t(e[u+=n])?0:e[u],b+=t(e[u+=n])?0:e[u],c+=t(e[u+=n])?0:e[u],u+=n;for(y=s+m+(p+l)+(v+d+(b+c));x<r;x++)!1===t(e[u])&&(y+=e[u]),u+=n;return y}return h=f(r/2),a(h-=h%8,e,n,u)+a(r-h,e,n,u+h*n)}var i=e,u=a;function s(r,e,n){var t,f,o;if(r<=0)return 0;if(1===r||0===n)return i(e[0])?0:e[0];if(t=n<0?(1-r)*n:0,r<8){for(f=0,o=0;o<r;o++)!1===i(e[t])&&(f+=e[t]),t+=n;return f}return u(r,e,n,t)}var m=r,p=s,l=a;m(p,"ndarray",l);export default p;
//# sourceMappingURL=dsnansumpw.js.map