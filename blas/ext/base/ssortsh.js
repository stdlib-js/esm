// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-negative-zerof.js";import t from"./../../../math/base/assert/is-nanf.js";var f=[701,301,132,57,23,10,4,1],n=e,o=t,a=f,i=a.length;function s(r,e,t,f){var s,m,u,l,p,v,d,h;if(r<=0||0===e)return t;for(e<0&&(f*=-1),s=f<0?(1-r)*f:0,v=0;v<i;v++)for(d=u=a[v];d<r;d++)if(l=t[s+d*f],!o(l)){for(m=n(l),h=d;h>=u&&(!((p=t[s+(h-u)*f])<=l)||m&&p===l);h-=u)t[s+h*f]=p;t[s+h*f]=l}return t}var m=e,u=t,l=f,p=l.length;function v(r,e,t,f,n){var o,a,i,s,v,d,h;if(r<=0||0===e)return t;for(e<0&&(n-=(r-1)*(f*=-1)),v=0;v<p;v++)for(d=a=l[v];d<r;d++)if(i=t[n+d*f],!u(i)){for(o=m(i),h=d;h>=a&&(!((s=t[n+(h-a)*f])<=i)||o&&s===i);h-=a)t[n+h*f]=s;t[n+h*f]=i}return t}var d=r,h=s,b=v;d(h,"ndarray",b);export default h;
//# sourceMappingURL=ssortsh.js.map