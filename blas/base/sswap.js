// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";var f=3;function n(r,n,e,t,o){var i,u,a,v,d,l;if(r<=0)return t;if(1===e&&1===o){if((v=r%f)>0)for(d=0;d<v;d++)i=n[d],n[d]=t[d],t[d]=i;if(r<f)return t;for(d=v;d<r;d+=f)i=n[d],n[d]=t[d],t[d]=i,i=n[l=d+1],n[l]=t[l],t[l]=i,i=n[l+=1],n[l]=t[l],t[l]=i;return t}for(u=e<0?(1-r)*e:0,a=o<0?(1-r)*o:0,d=0;d<r;d++)i=n[u],n[u]=t[a],t[a]=i,u+=e,a+=o;return t}var e=3;function t(r,f,n,t,o,i,u){var a,v,d,l,p;if(r<=0)return o;if(v=t,d=u,1===n&&1===i){if((l=r%e)>0)for(p=0;p<l;p++)a=f[v],f[v]=o[d],o[d]=a,v+=n,d+=i;if(r<e)return o;for(p=l;p<r;p+=e)a=f[v],f[v]=o[d],o[d]=a,a=f[v+1],f[v+1]=o[d+1],o[d+1]=a,a=f[v+2],f[v+2]=o[d+2],o[d+2]=a,v+=e,d+=e;return o}for(p=0;p<r;p++)a=f[v],f[v]=o[d],o[d]=a,v+=n,d+=i;return o}var o=r,i=n,u=t;o(i,"ndarray",u);export default i;
//# sourceMappingURL=sswap.js.map