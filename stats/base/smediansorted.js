// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import a from"./../../number/float64/base/to-float32.js";import o from"./../../math/base/special/floor.js";var e=a,t=o;function n(r,a,o){var n,f,m;return r<=0?NaN:(n=o<0?(1-r)*o:0,(f=r/2)===(m=t(f))?e(e(a[n+m*o]+a[n+(m-1)*o])/2):a[n+m*o])}var f=a,m=o;function i(r,a,o,e){var t,n;return r<=0?NaN:(t=r/2)===(n=m(t))?f(f(a[e+n*o]+a[e+(n-1)*o])/2):a[e+n*o]}var l=r,u=n,p=i;l(u,"ndarray",p);export default u;
//# sourceMappingURL=smediansorted.js.map