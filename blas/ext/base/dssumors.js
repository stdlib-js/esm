// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";var f=6;function n(r,n,e){var t,i,u,o;if(t=0,r<=0)return t;if(1===r||0===e)return n[0];if(1===e){if((u=r%f)>0)for(o=0;o<u;o++)t+=n[o];if(r<f)return t;for(o=u;o<r;o+=f)t+=n[o]+n[o+1]+n[o+2]+n[o+3]+n[o+4]+n[o+5];return t}for(i=e<0?(1-r)*e:0,o=0;o<r;o++)t+=n[i],i+=e;return t}var e=6;function t(r,f,n,t){var i,u,o,a;if(i=0,r<=0)return i;if(1===r||0===n)return f[t];if(u=t,1===n){if((o=r%e)>0)for(a=0;a<o;a++)i+=f[u],u+=n;if(r<e)return i;for(a=o;a<r;a+=e)i+=f[u]+f[u+1]+f[u+2]+f[u+3]+f[u+4]+f[u+5],u+=e;return i}for(a=0;a<r;a++)i+=f[u],u+=n;return i}var i=r,u=n,o=t;i(u,"ndarray",o);export default u;
//# sourceMappingURL=dssumors.js.map