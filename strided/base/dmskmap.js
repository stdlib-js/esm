// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";function n(r,n,e,t,o,f,u,a){var i,d,l,p;if(r<=0)return f;for(i=e<0?(1-r)*e:0,d=o<0?(1-r)*o:0,l=u<0?(1-r)*u:0,p=0;p<r;p++)0===t[d]&&(f[l]=a(n[i])),i+=e,d+=o,l+=u;return f}function e(r,n,e,t,o,f,u,a,i,d,l){var p,m,v,y;if(r<=0)return a;for(p=t,m=u,v=d,y=0;y<r;y++)0===o[m]&&(a[v]=l(n[p])),p+=e,m+=f,v+=i;return a}var t=r,o=n,f=e;t(o,"ndarray",f);export default o;
//# sourceMappingURL=dmskmap.js.map