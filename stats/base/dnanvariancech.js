// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";function e(r,e,a,n){var f,N,t,i,u,o,d,l,p;if(r<=0)return NaN;if(1===r||0===n)return(d=a[0])==d&&r-e>0?0:NaN;for(N=n<0?(1-r)*n:0,p=0;p<r;p++){if((d=a[N])==d){f=d;break}N+=n}if(p===r)return NaN;for(N+=n,p+=1,t=0,u=0,l=1;p<r;p++)(d=a[N])==d&&(t+=(o=d-f)*o,u+=o,l+=1),N+=n;return(i=l-e)<=0?NaN:t/i-u/l*(u/i)}function a(r,e,a,n,f){var N,t,i,u,o,d,l,p,b;if(r<=0)return NaN;if(1===r||0===n)return(l=a[f])==l&&r-e>0?0:NaN;for(t=f,b=0;b<r;b++){if((l=a[t])==l){N=l;break}t+=n}if(b===r)return NaN;for(t+=n,b+=1,i=0,o=0,p=1;b<r;b++)(l=a[t])==l&&(i+=(d=l-N)*d,o+=d,p+=1),t+=n;return(u=p-e)<=0?NaN:i/u-o/p*(o/u)}var n=r,f=e,N=a;n(f,"ndarray",N);export default f;
//# sourceMappingURL=dnanvariancech.js.map