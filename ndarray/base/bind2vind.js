// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../math/base/special/trunc.js";import e from"./../../math/base/special/abs.js";var a=r,n=e;function t(r,e,t,i,o,m){var f,s,l,u,c,p;for(f=r.length,s=1,p=0;p<f;p++)s*=r[p];if("clamp"===m)o<0?o=0:o>=s&&(o=s-1);else if("wrap"===m)o<0?(o+=s)<0&&0!==(o%=s)&&(o+=s):o>=s&&(o-=s)>=s&&(o%=s);else if(o<0||o>=s)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+s+". Value: `"+o+"`.");if(0===t)return o;if(l=0,"column-major"===i){for(p=f-1;p>=0;p--)(c=e[p])<0?(o-=(u=a(o/c))*c,u+=r[p]-1):o-=(u=a(o/c))*c,l+=u*n(c);return l}for(p=0;p<f;p++)(c=e[p])<0?(o-=(u=a(o/c))*c,u+=r[p]-1):o-=(u=a(o/c))*c,l+=u*n(c);return l}var i=t;export default i;
//# sourceMappingURL=bind2vind.js.map