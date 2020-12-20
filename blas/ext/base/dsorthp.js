// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/assert/is-positive-zero.js";import o from"./../../../math/base/assert/is-nan.js";import a from"./../../../math/base/special/floor.js";var t=e,f=o,i=a;function s(r,e,o,a){var s,n,m,p,u,l,v,b,d,j;if(r<=0||0===e)return o;for(e<0&&(a*=-1),s=a<0?(1-r)*a:0,l=r,n=i(r/2);;){if(n>0)v=o[s+(n-=1)*a];else{if(0===(l-=1))return o;v=o[b=s+l*a],o[b]=o[s]}for(m=2*(d=n)+1;m<l&&((j=m+1)<l&&((p=o[s+j*a])>(u=o[s+m*a])||f(p)||p===u&&t(p))&&(m+=1),(p=o[s+m*a])>v||f(p)||p===v&&t(p));)o[s+d*a]=p,m=2*(d=m)+1;o[s+d*a]=v}}var n=e,m=o,p=a;function u(r,e,o,a,t){var f,i,s,u,l,v,b,d,j;if(r<=0||0===e)return o;for(e<0&&(t-=(r-1)*(a*=-1)),l=r,f=p(r/2);;){if(f>0)v=o[t+(f-=1)*a];else{if(0===(l-=1))return o;v=o[b=t+l*a],o[b]=o[t]}for(i=2*(d=f)+1;i<l&&((j=i+1)<l&&((s=o[t+j*a])>(u=o[t+i*a])||m(s)||s===u&&n(s))&&(i+=1),(s=o[t+i*a])>v||m(s)||s===v&&n(s));)o[t+d*a]=s,i=2*(d=i)+1;o[t+d*a]=v}}var l=r,v=s,b=u;l(v,"ndarray",b);export default v;
//# sourceMappingURL=dsorthp.js.map