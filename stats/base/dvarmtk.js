// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";function n(r,n,e,t,f){var u,a,o,i,d;if(i=r-e,r<=0||i<=0)return NaN;if(1===r||0===f)return 0;for(u=f<0?(1-r)*f:0,a=0,d=0;d<r;d++)a+=(o=t[u]-n)*o,u+=f;return a/i}function e(r,n,e,t,f,u){var a,o,i,d,l;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===f)return 0;for(a=u,o=0,l=0;l<r;l++)o+=(i=t[a]-n)*i,a+=f;return o/d}var t=r,f=n,u=e;t(f,"ndarray",u);export default f;
//# sourceMappingURL=dvarmtk.js.map