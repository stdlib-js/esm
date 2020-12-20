// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../number/float64/base/to-float32.js";import t from"./../../../math/base/special/floor.js";var f=e,o=t,n=128;function a(r,e,t,i){var u,m,l,p,s,v,b,d,c,j,y,h,x;if(r<=0)return 0;if(1===r||0===t)return e[i];if(u=i,r<8){for(y=0,x=0;x<r;x++)y=f(y+e[u]),u+=t;return y}if(r<=n){for(m=e[u],l=e[u+t],p=e[u+2*t],s=e[u+3*t],v=e[u+4*t],b=e[u+5*t],d=e[u+6*t],c=e[u+7*t],u+=8*t,j=r%8,x=8;x<r-j;x+=8)m=f(m+e[u]),l=f(l+e[u+t]),p=f(p+e[u+2*t]),s=f(s+e[u+3*t]),v=f(v+e[u+4*t]),b=f(b+e[u+5*t]),d=f(d+e[u+6*t]),c=f(c+e[u+7*t]),u+=8*t;for(y=f(f(f(m+l)+f(p+s))+f(f(v+b)+f(d+c)));x<r;x++)y=f(y+e[u]),u+=t;return y}return h=o(r/2),f(a(h-=h%8,e,t,u)+a(r-h,e,t,u+h*t))}var i=e,u=a;function m(r,e,t){var f,o,n;if(r<=0)return 0;if(1===r||0===t)return e[0];if(f=t<0?(1-r)*t:0,r<8){for(o=0,n=0;n<r;n++)o=i(o+e[f]),f+=t;return o}return u(r,e,t,f)}var l=r,p=m,s=a;l(p,"ndarray",s);export default p;
//# sourceMappingURL=ssumpw.js.map