// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../math/base/special/abs.js";var n=e;function t(r,e,t,a){var f,o,i,u,m,p;if(r<=0)return 0;if(1===r||0===a)return e+t[0];for(o=a<0?(1-r)*a:0,f=0,m=0,p=0;p<r;p++)u=f+(i=e+t[o]),n(f)>=n(i)?m+=f-u+i:m+=i-u+f,f=u,o+=a;return f+m}var a=e;function f(r,e,n,t,f){var o,i,u,m,p,s;if(r<=0)return 0;if(1===r||0===t)return e+n[f];for(i=f,o=0,p=0,s=0;s<r;s++)m=o+(u=e+n[i]),a(o)>=a(u)?p+=o-m+u:p+=u-m+o,o=m,i+=t;return o+p}var o=r,i=t,u=f;o(i,"ndarray",u);export default i;
//# sourceMappingURL=dapxsumkbn.js.map