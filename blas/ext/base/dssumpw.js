// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/special/floor.js";var n=e,f=128;function t(r,e,o,i){var u,a,l,m,p,s,v,d,c,y,b,j,h;if(r<=0)return 0;if(1===r||0===o)return e[i];if(u=i,r<8){for(b=0,h=0;h<r;h++)b+=e[u],u+=o;return b}if(r<=f){for(a=e[u],l=e[u+o],m=e[u+2*o],p=e[u+3*o],s=e[u+4*o],v=e[u+5*o],d=e[u+6*o],c=e[u+7*o],u+=8*o,y=r%8,h=8;h<r-y;h+=8)a+=e[u],l+=e[u+o],m+=e[u+2*o],p+=e[u+3*o],s+=e[u+4*o],v+=e[u+5*o],d+=e[u+6*o],c+=e[u+7*o],u+=8*o;for(b=a+l+(m+p)+(s+v+(d+c));h<r;h++)b+=e[u],u+=o;return b}return j=n(r/2),t(j-=j%8,e,o,u)+t(r-j,e,o,u+j*o)}var o=t;function i(r,e,n){var f,t,i;if(r<=0)return 0;if(1===r||0===n)return e[0];if(f=n<0?(1-r)*n:0,r<8){for(t=0,i=0;i<r;i++)t+=e[f],f+=n;return t}return o(r,e,n,f)}var u=r,a=i,l=t;u(a,"ndarray",l);export default a;
//# sourceMappingURL=dssumpw.js.map