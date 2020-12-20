// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-negative-zerof.js";import t from"./../../../math/base/assert/is-nanf.js";var f=[701,301,132,57,23,10,4,1],n=e,o=t,a=f,i=a.length;function s(r,e,t,f,s,m){var u,l,p,v,d,h,b,g,j,y;if(r<=0||0===e)return t;for(e<0&&(f*=-1,m*=-1),u=f<0?(1-r)*f:0,l=m<0?(1-r)*m:0,g=0;g<i;g++)for(j=v=a[g];j<r;j++)if(d=t[u+j*f],!o(d)){for(h=s[l+j*m],p=n(d),y=j;y>=v&&(!((b=t[u+(y-v)*f])<=d)||p&&b===d);y-=v)t[u+y*f]=b,s[l+y*m]=s[l+(y-v)*m];t[u+y*f]=d,s[l+y*m]=h}return t}var m=e,u=t,l=f,p=l.length;function v(r,e,t,f,n,o,a,i){var s,v,d,h,b,g,j,y;if(r<=0||0===e)return t;for(e<0&&(n-=(r-1)*(f*=-1),i-=(r-1)*(a*=-1)),g=0;g<p;g++)for(j=v=l[g];j<r;j++)if(d=t[n+j*f],!u(d)){for(h=o[i+j*a],s=m(d),y=j;y>=v&&(!((b=t[n+(y-v)*f])<=d)||s&&b===d);y-=v)t[n+y*f]=b,o[i+y*a]=o[i+(y-v)*a];t[n+y*f]=d,o[i+y*a]=h}return t}var d=r,h=s,b=v;d(h,"ndarray",b);export default h;
//# sourceMappingURL=ssort2sh.js.map