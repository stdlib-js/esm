// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import n from"./../../math/base/assert/is-nan.js";var e=n;function a(r,n,a,t,f){var o,i,u,N,s,m;if(r<=0)return NaN;for(u=a<0?(1-r)*a:0,N=f<0?(1-r)*f:0,m=0;m<r&&((s=n[u])!=s||0!==t[N]);m++)u+=a,N+=f;if(m===r)return NaN;if(e(i=s))return i;for(o=i,m+=1;m<r;m++)u+=a,t[N+=f]||(s=n[u],e(s)||(s<i?i=s:s>o&&(o=s)));return o-i}var t=n;function f(r,n,e,a,f,o,i){var u,N,s,m,p,v;if(r<=0)return NaN;for(s=a,m=i,v=0;v<r&&((p=n[s])!=p||0!==f[m]);v++)s+=e,m+=o;if(v===r)return NaN;if(t(N=p))return N;for(u=N,v+=1;v<r;v++)s+=e,f[m+=o]||(p=n[s],t(p)||(p<N?N=p:p>u&&(u=p)));return u-N}var o=r,i=a,u=f;o(i,"ndarray",u);export default i;
//# sourceMappingURL=dnanmskrange.js.map