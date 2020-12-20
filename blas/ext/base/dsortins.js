// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-negative-zero.js";import f from"./../../../math/base/assert/is-nan.js";var o=e,t=f;function n(r,e,f,n){var a,i,s,u,m,l,p,v;if(r<=0||0===e)return f;if(e<0&&(n*=-1),n<0){for(m=0,i=(u=(1-r)*n)+n,v=1;v<r;v++)if(l=f[i],t(l)){for(s=i;s>m;)f[s]=f[s+n],s+=n;f[m]=l}else{for(a=o(l),s=i-n;s<=u&&(!((p=f[s])<=l)||a&&p===l&&!1===o(p));)f[s+n]=p,s-=n;f[s+n]=l,i+=n}return f}for(m=(r-1)*n,i=(u=0)+n,v=1;v<r;v++)if(l=f[i],t(l)){for(s=i;s<m;)f[s]=f[s+n],s+=n;f[m]=l}else{for(a=o(l),s=i-n;s>=u&&(!((p=f[s])<=l)||a&&p===l&&!1===o(p));)f[s+n]=p,s-=n;f[s+n]=l,i+=n}return f}var a=e,i=f;function s(r,e,f,o,t){var n,s,u,m,l,p,v,d;if(r<=0||0===e)return f;if(e<0&&(t-=(r-1)*(o*=-1)),l=(m=t)+(r-1)*o,s=m+o,o<0){for(d=1;d<r;d++)if(p=f[s],i(p)){for(u=s;u>l;)f[u]=f[u+o],u+=o;f[l]=p}else{for(n=a(p),u=s-o;u<=m&&(!((v=f[u])<=p)||n&&v===p&&!1===a(v));)f[u+o]=v,u-=o;f[u+o]=p,s+=o}return f}for(d=1;d<r;d++)if(p=f[s],i(p)){for(u=s;u<l;)f[u]=f[u+o],u+=o;f[l]=p}else{for(n=a(p),u=s-o;u>=m&&(!((v=f[u])<=p)||n&&v===p&&!1===a(v));)f[u+o]=v,u-=o;f[u+o]=p,s+=o}return f}var u=r,m=n,l=s;u(m,"ndarray",l);export default m;
//# sourceMappingURL=dsortins.js.map