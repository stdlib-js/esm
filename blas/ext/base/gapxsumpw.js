// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/special/floor.js";var n=e,f=128;function t(r,e,o,a,i){var u,l,m,p,v,s,d,c,y,b,j,h,x;if(r<=0)return 0;if(1===r||0===a)return e+o[i];if(u=i,r<8){for(j=0,x=0;x<r;x++)j+=e+o[u],u+=a;return j}if(r<=f){for(l=e+o[u],m=e+o[u+a],p=e+o[u+2*a],v=e+o[u+3*a],s=e+o[u+4*a],d=e+o[u+5*a],c=e+o[u+6*a],y=e+o[u+7*a],u+=8*a,b=r%8,x=8;x<r-b;x+=8)l+=e+o[u],m+=e+o[u+a],p+=e+o[u+2*a],v+=e+o[u+3*a],s+=e+o[u+4*a],d+=e+o[u+5*a],c+=e+o[u+6*a],y+=e+o[u+7*a],u+=8*a;for(j=l+m+(p+v)+(s+d+(c+y));x<r;x++)j+=e+o[u],u+=a;return j}return h=n(r/2),t(h-=h%8,e,o,a,u)+t(r-h,e,o,a,u+h*a)}var o=t;function a(r,e,n,f){var t,a,i;if(r<=0)return 0;if(1===r||0===f)return e+n[0];if(t=f<0?(1-r)*f:0,r<8){for(a=0,i=0;i<r;i++)a+=e+n[t],t+=f;return a}return o(r,e,n,f,t)}var i=r,u=a,l=t;i(u,"ndarray",l);var m=u;export default m;
//# sourceMappingURL=gapxsumpw.js.map