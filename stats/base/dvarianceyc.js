// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";function n(r,n,e,t){var f,u,a,o,i,d,l;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(f=e[u=t<0?(1-r)*t:0],u+=t,a=0,l=2;l<=r;l++)a+=1/(l*(l-1))*(i=l*(o=e[u])-(f+=o))*i,u+=t;return a/d}function e(r,n,e,t,f){var u,a,o,i,d,l,p;if(l=r-n,r<=0||l<=0)return NaN;if(1===r||0===t)return 0;for(u=e[f],a=f+t,o=0,p=2;p<=r;p++)o+=1/(p*(p-1))*(d=p*(i=e[a])-(u+=i))*d,a+=t;return o/l}var t=r,f=n,u=e;t(f,"ndarray",u);export default f;
//# sourceMappingURL=dvarianceyc.js.map