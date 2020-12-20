// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./../assert/is-odd.js";import n from"./../assert/is-infinite.js";import e from"./../assert/is-integer.js";import i from"./sqrt.js";import o from"./abs.js";import f from"./../../../number/float64/base/to-words.js";import s from"./../../../number/float64/base/set-low-word.js";import u from"./../../../number/uint32/base/to-int32.js";import m from"./../../../constants/math/float64-ninf.js";import a from"./../../../constants/math/float64-pinf.js";import p from"./copysign.js";import j from"./../../../number/float64/base/get-high-word.js";import c from"./../../../number/float64/base/set-high-word.js";import l from"./../../../constants/math/float64-exponent-bias.js";import b from"./ldexp.js";import v from"./../../../constants/math/float64-ln-two.js";var d=t,h=p,w=m,g=a;function x(r,t){return t===w?g:t===g?0:t>0?d(t)?r:0:d(t)?h(g,r):g}var N=j,q=2147483647,y=1072693247,k=1e300,z=1e-300;function A(r,t){return(N(r)&q)<=y?t<0?k*k:z*z:t>0?k*k:z*z}var B=o,C=a;function D(r,t){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(t===C)?0:C}function E(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))}var F=j,G=s,H=c,I=l,J=E,K=1048575,L=1048576,M=1072693248,O=536870912,P=524288,Q=20,R=9007199254740992,S=.9617966939259756,T=.9617967009544373,U=-7.028461650952758e-9,V=[1,1.5],W=[0,.5849624872207642],X=[0,1.350039202129749e-8];function Y(r,t,n){var e,i,o,f,s,u,m,a,p,j,c,l,b,v,d,h,w,g,x,N;return g=0,n<L&&(g-=53,n=F(t*=R)),g+=(n>>Q)-I|0,n=(x=n&K|0)|M|0,x<=235662?N=0:x<767610?N=1:(N=0,g+=1,n-=L),t=H(t,n),m=V[N],f=G(i=(h=t-m)*(w=1/(t+m)),0),e=(n>>1|O)+P,s=w*(h-f*(u=H(0,e+=N<<18))-f*(t-(u-m))),d=(o=i*i)*o*J(o),u=G(u=3+(o=f*f)+(d+=s*(f+i)),0),p=G(p=(h=f*u)+(w=s*u+(d-(u-3-o))*i),0),j=T*p,c=U*p+(w-(p-h))*S+X[N],a=W[N],b=c-((l=G(l=j+c+a+(v=g),0))-v-a-j),r[0]=l,r[1]=b,r}function Z(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)}var $=s,_=Z,rr=1.4426950408889634,tr=1.4426950216293335,nr=1.9259629911266175e-8;function er(r,t){var n,e,i,o,f,s;return o=(i=t-1)*i*_(i),n=(s=i*nr-o*rr)-((e=$(e=(f=tr*i)+s,0))-f),r[0]=e,r[1]=n,r}function ir(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)}var or=j,fr=c,sr=s,ur=u,mr=b,ar=v,pr=l,jr=ir,cr=2147483647,lr=1048575,br=1048576,vr=1071644672,dr=20,hr=.6931471824645996,wr=-1.904654299957768e-9;function gr(r,t,n){var e,i,o,f,s,u,m,a,p;return p=((a=r&cr|0)>>dr)-pr|0,m=0,a>vr&&(i=fr(0,((m=r+(br>>p+1)>>>0)&~(lr>>(p=((m&cr)>>dr)-pr|0)))>>>0),m=(m&lr|br)>>dr-p>>>0,r<0&&(m=-m),t-=i),s=(f=(n-((i=sr(i=n+t,0))-t))*ar+i*wr)-((u=(o=i*hr)+f)-o),e=u-(i=u*u)*jr(i),r=or(u=1-(u*e/(e-2)-(s+u*s)-u)),r=ur(r),u=(r+=m<<dr>>>0)>>dr<=0?mr(u,m):fr(u,r)}var xr=r,Nr=t,qr=n,yr=e,kr=i,zr=o,Ar=f,Br=s,Cr=u,Dr=m,Er=a,Fr=x,Gr=A,Hr=D,Ir=Y,Jr=er,Kr=gr,Lr=2147483647,Mr=1072693247,Or=1105199104,Pr=1139802112,Qr=1083179008,Rr=1072693248,Sr=1083231232,Tr=3230714880,Ur=31,Vr=1e300,Wr=1e-300,Xr=8008566259537294e-32,Yr=[0,0],Zr=[0,0];function $r(r,t){var n,e,i,o,f,s,u,m,a,p,j,c,l,b;if(xr(r)||xr(t))return NaN;if(Ar(Yr,t),f=Yr[0],0===Yr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return kr(r);if(-.5===t)return 1/kr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(qr(t))return Hr(r,t)}if(Ar(Yr,r),o=Yr[0],0===Yr[1]){if(0===o)return Fr(r,t);if(1===r)return 1;if(-1===r&&Nr(t))return-1;if(qr(r))return r===Dr?$r(-0,-t):t<0?0:Er}if(r<0&&!1===yr(t))return(r-r)/(r-r);if(i=zr(r),n=o&Lr|0,e=f&Lr|0,u=f>>>Ur|0,s=(s=o>>>Ur|0)&&Nr(t)?-1:1,e>Or){if(e>Pr)return Gr(r,t);if(n<Mr)return 1===u?s*Vr*Vr:s*Wr*Wr;if(n>Rr)return 0===u?s*Vr*Vr:s*Wr*Wr;j=Jr(Zr,i)}else j=Ir(Zr,i,n);if(p=(t-(m=Br(t,0)))*j[0]+t*j[1],a=m*j[0],Ar(Yr,c=p+a),l=Cr(Yr[0]),b=Cr(Yr[1]),l>=Qr){if(0!=(l-Qr|b))return s*Vr*Vr;if(p+Xr>c-a)return s*Vr*Vr}else if((l&Lr)>=Sr){if(0!=(l-Tr|b))return s*Wr*Wr;if(p<=c-a)return s*Wr*Wr}return s*(c=Kr(l,a,p))}var _r=$r;export default _r;
//# sourceMappingURL=pow.js.map