// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";var f=8;function n(r,n,e,t,o){var i,u,a,v;if(r<=0)return t;if(1===e&&1===o){if((a=r%f)>0)for(v=0;v<a;v++)t[v]=n[v];if(r<f)return t;for(v=a;v<r;v+=f)t[v]=n[v],t[v+1]=n[v+1],t[v+2]=n[v+2],t[v+3]=n[v+3],t[v+4]=n[v+4],t[v+5]=n[v+5],t[v+6]=n[v+6],t[v+7]=n[v+7];return t}for(i=e<0?(1-r)*e:0,u=o<0?(1-r)*o:0,v=0;v<r;v++)t[u]=n[i],i+=e,u+=o;return t}var e=8;function t(r,f,n,t,o,i,u){var a,v,d,l;if(r<=0)return o;if(a=t,v=u,1===n&&1===i){if((d=r%e)>0)for(l=0;l<d;l++)o[v]=f[a],a+=n,v+=i;if(r<e)return o;for(l=d;l<r;l+=e)o[v]=f[a],o[v+1]=f[a+1],o[v+2]=f[a+2],o[v+3]=f[a+3],o[v+4]=f[a+4],o[v+5]=f[a+5],o[v+6]=f[a+6],o[v+7]=f[a+7],a+=e,v+=e;return o}for(l=0;l<r;l++)o[v]=f[a],a+=n,v+=i;return o}var o=r,i=n,u=t;o(i,"ndarray",u);export default i;
//# sourceMappingURL=scopy.js.map