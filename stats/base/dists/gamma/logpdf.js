// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import m from"./../../../../math/base/special/ln.js";import o from"./../../../../constants/math/float64-pinf.js";import r from"./../../../../constants/math/float64-ninf.js";import s from"./../../../../math/base/special/gammaln.js";import n from"./../../../../math/base/special/exp.js";import i from"./../../../../constants/math/float64-max.js";import e from"./../../../../math/base/special/gamma-lanczos-sum-expg-scaled.js";import f from"./../../../../math/base/special/gamma.js";import p from"./../../../../math/base/special/log1p.js";import l from"./../../../../math/base/special/sqrt.js";import c from"./../../../../math/base/special/abs.js";import j from"./../../../../math/base/special/pow.js";import h from"./../../../../math/base/special/max.js";import u from"./../../../../math/base/special/min.js";import b from"./../../../../constants/math/float64-max-ln.js";import g from"./../../../../constants/math/float64-min-ln.js";import N from"./../../../../constants/math/float64-gamma-lanczos-g.js";import v from"./../../../../constants/math/float64-e.js";import d from"./../../../../utils/constant-function.js";import x from"./../degenerate/logpdf.js";var y=e,z=s,q=f,w=p,k=l,A=c,B=n,C=j,D=h,E=u,F=m,G=b,H=g,I=N,J=v;function K(a,t){var m,o,r,s,n,i,e;return e=(t-a-I+.5)/(r=a+I-.5),a<1?t<=H?B(a*F(t)-t-z(a)):C(t,a)*B(-t)/q(a):(A(e*e*a)<=100&&a>150?(m=a*(w(e)-e)+t*(.5-I)/r,m=B(m)):(s=a*F(t/r),E(s,n=a-t)<=H||D(s,n)>=G?(o=n/a,E(s,n)/2>H&&D(s,n)/2<G?m=(i=C(t/r,a/2)*B(n/2))*i:E(s,n)/4>H&&D(s,n)/4<G&&t>a?(m=(i=C(t/r,a/4)*B(n/4))*i,m*=m):m=o>H&&o<G?C(t*B(o)/r,a):B(s+n)):m=C(t/r,a)*B(n)),m*=k(r/J)/y(a))}var L=s,M=n,O=m,P=o,Q=i,R=K;function S(a,t){var m;return a<=0||t<0?NaN:0===t?a>1?0:1===a?1:P:(m=R(a,t),t<1&&Q*t<m?P:(0===m?(m=a*O(t)-t-L(a)-O(t),m=M(m)):m/=t,m))}var T=t,U=m,V=o,W=r,X=S;function Y(a,t,m){return T(a)||T(t)||T(m)||t<0||m<=0?NaN:a<0||a===V?W:0===t?0===a?V:W:U(X(t,a*m))+U(m)}var Z=d,$=x.factory,_=t,aa=m,ta=r,ma=o,oa=S;function ra(a,t){return _(a)||_(t)||a<0||t<=0?Z(NaN):0===a?$(0):function(m){if(_(m))return NaN;if(m<0||m===ma)return ta;return aa(oa(a,m*t))+aa(t)}}var sa=a,na=Y,ia=ra;sa(na,"factory",ia);export default na;
//# sourceMappingURL=logpdf.js.map