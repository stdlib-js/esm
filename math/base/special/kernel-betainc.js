// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./expm1.js";import o from"./floor.js";import a from"./log1p.js";import m from"./asin.js";import f from"./beta.js";import n from"./sqrt.js";import i from"./exp.js";import s from"./pow.js";import e from"./max.js";import u from"./min.js";import l from"./../../../constants/math/float64-max.js";import p from"./../../../constants/math/float64-smallest-normal.js";import j from"./../../../constants/math/int32-max.js";import c from"./../../../constants/math/float64-half-pi.js";import v from"./../../../constants/math/float64-pi.js";import N from"./gamma-delta-ratio.js";import h from"./factorial.js";import g from"./gammainc.js";import x from"./abs.js";import b from"./ln.js";import d from"./../../../constants/math/float64-eps.js";import k from"./../../../constants/math/float64-max-ln.js";import w from"./../../../constants/math/float64-min-ln.js";import y from"./gamma-lanczos-sum-expg-scaled.js";import z from"./gammaln.js";import A from"./gamma.js";import q from"./../../../constants/math/float64-gamma-lanczos-g.js";import I from"./../../../constants/math/float64-e.js";import T from"./maxabs.js";import V from"./minabs.js";import B from"./../tools/continued-fraction.js";import C from"./binomcoef.js";import D from"./../tools/sum-series.js";var E=i,F=s,G=b,H=k,J=w;function K(r,t){var o;return o=r*G(t),t>=1?o<H&&-t>J?F(t,r)*E(-t):r>=1?F(t/E(t/r),r):E(o-t):o>J?F(t,r)*E(-t):t/r<H?F(t/E(t/r),r):E(o-t)}var L=y,M=z,O=A,P=a,Q=n,R=x,S=i,U=s,W=e,X=u,Y=b,Z=k,$=w,_=q,rr=I;function tr(r,t){var o,a,m,f,n,i,s;return s=(t-r-_+.5)/(m=r+_-.5),r<1?t<=$?S(r*Y(t)-t-M(r)):U(t,r)*S(-t)/O(r):(R(s*s*r)<=100&&r>150?(o=r*(P(s)-s)+t*(.5-_)/m,o=S(o)):(f=r*Y(t/m),X(f,n=r-t)<=$||W(f,n)>=Z?(a=n/r,X(f,n)/2>$&&W(f,n)/2<Z?o=(i=U(t/m,r/2)*S(n/2))*i:X(f,n)/4>$&&W(f,n)/4<Z&&t>r?(o=(i=U(t/m,r/4)*S(n/4))*i,o*=o):o=a>$&&a<Z?U(t*S(a)/m,r):S(f+n)):o=U(t/m,r)*S(n)),o*=Q(m/rr)/L(r))}var or=N,ar=h,mr=g,fr=a,nr=x,ir=s,sr=b,er=p,ur=d,lr=K,pr=tr,jr=new Array(30);function cr(r,t,o,a,m,f,n){var i,s,e,u,l,p,j,c,v,N,h,g,x,b,d,k,w,y;if(w=r+(p=t-1)/2,N=a<.35?fr(-a):sr(o),(g=pr(t,y=-w*N))<=er)return m;for(n?(i=g/or(r,t),i/=ir(w,t)):i=lr(t,y)/ir(w,t),i*=f,jr[0]=1,x=mr(y,t,!0,!0),u=m+i*(x/=g),e=1,j=N/2,j*=j,c=1,h=4*w*w,l=t,d=1;d<jr.length;++d){for(e+=2,jr[d]=0,v=t-d,s=3,b=1;b<d;++b)v=b*t-d,jr[d]+=v*jr[d-b]/ar(s),s+=2;if(jr[d]/=d,jr[d]+=p/ar(e),x=(l*(l+1)*x+(y+l+1)*c)/h,c*=j,l+=2,u+=k=i*jr[d]*x,k>1){if(nr(k)<nr(ur*u))break}else if(nr(k/ur)<nr(u))break}return u}function vr(r,t,o){var a,m;if(0===o)return 1;for(a=1,m=0;m<o;m++)a*=(r+m)/(t+m);return a}var Nr=y,hr=T,gr=V,xr=t,br=a,dr=n,kr=x,wr=i,yr=s,zr=u,Ar=b,qr=k,Ir=w,Tr=q,Vr=I;function Br(r,t,o,a,m){var f,n,i,s,e,u,l,p,j,c,v,N,h,g;if(!m)return yr(o,r)*yr(a,t);if(s=r+Tr-.5,e=t+Tr-.5,u=(h=r+t)+Tr-.5,f=Nr(h),f/=Nr(r)*Nr(t),f*=dr(e/Vr),f*=dr(s/u),gr(l=(o*t-a*s)/s,p=(a*r-o*e)/e)<.2)if(l*p>0||zr(r,t)<1)kr(l)<.1?f*=wr(r*br(l)):f*=yr(o*u/s,r),kr(p)<.1?f*=wr(t*br(p)):f*=yr(a*u/e,t);else if(hr(l,p)<.5)i=t/r,(n=r<t)&&i*p<.1||!n&&l/i>.1?(j=xr(i*br(p)),j=r*br(j=l+j+j*l),f*=wr(j)):(j=xr(br(l)/i),j=t*br(j=p+j+j*p),f*=wr(j));else if(kr(l)<kr(p))if((g=r*br(l)+t*Ar(a*u/e))<=Ir||g>=qr){if((g+=Ar(f))>=qr)return NaN;f=wr(g)}else f*=wr(g);else if((g=t*br(p)+r*Ar(o*u/s))<=Ir||g>=qr){if((g+=Ar(f))>=qr)return NaN;f=wr(g)}else f*=wr(g);else if(N=a*u/e,l=r*Ar(v=o*u/s),p=t*Ar(N),l>=qr||l<=Ir||p>=qr||p<=Ir)if(r<t)if(c=yr(N,t/r),(j=r*(Ar(v)+Ar(c)))<qr&&j>Ir)f*=yr(c*v,r);else{if((p+=l+Ar(f))>=qr)return NaN;f=wr(p)}else if(c=yr(v,r/t),(j=(Ar(c)+Ar(N))*t)<qr&&j>Ir)f*=yr(c*N,t);else{if((p+=l+Ar(f))>=qr)return NaN;f=wr(p)}else f*=yr(v,r)*yr(N,t);return f}var Cr=B,Dr=Br,Er={keep:!0,maxIter:1e3};function Fr(r,t,o,a){var m=0;return function(){var f,n,i;return n=(r+m-1)*(r+t+m-1)*m*(t-m)*o*o,f=r+2*m-1,i=m,i+=m*(t-m)*o/(r+2*m-1),i+=(r+m)*(r*a-t*o+1+m*(2-o))/(r+2*m+1),m+=1,[n/=f*f,i]}}function Gr(r,t,o,a,m,f){var n,i;return n=Dr(r,t,o,a,m),f&&(f[1]=n),0===n?n:(i=Fr(r,t,o,a),n/Cr(i,Er))}var Hr=C,Jr=o,Kr=s,Lr=p;function Mr(r,t,o,a){var m,f,n,i,s;if((f=Kr(o,r))>Lr)for(i=f,s=Jr(r-1);s>t;s--)f+=i*=(s+1)*a/((r-s)*o);else if((n=Jr(r*o))<=t+1&&(n=Jr(t+2)),f=Kr(o,n)*Kr(a,r-n),0===(f*=Hr(Jr(r),Jr(n))))for(s=n-1;s>t;s--)f+=Kr(o,s)*Kr(a,r-s),f*=Hr(Jr(r),Jr(s));else{for(i=f,m=f,s=n-1;s>t;s--)f+=i*=(s+1)*a/((r-s)*o);for(i=m,s=n+1;s<=r;s++)f+=i*=(r-s+1)*o/(s*a)}return f}var Or=Br;function Pr(r,t,o,a,m,f,n){var i,s,e,u;if(i=Or(r,t,o,a,f),n&&(n[1]=i),0===(i/=r))return i;for(e=1,s=1,u=0;u<m-1;++u)e+=s*=(r+t+u)*o/(r+u+1);return i*=e}var Qr=y,Rr=D,Sr=a,Ur=n,Wr=i,Xr=s,Yr=b,Zr=p,$r=k,_r=w,rt=q,tt=I,ot={maxTerms:100};function at(r,t,o,a){var m=1-t,f=1;return function(){var t=a/r;return r+=1,a*=m*o/f,f+=1,m+=1,t}}function mt(r,t,o,a,m,f,n){var i,s,e,u,l,p,j,c;return m?(s=r+rt-.5,e=t+rt-.5,u=(j=r+t)+rt-.5,i=Qr(j)/(Qr(r)*Qr(t)),l=Yr(u/e)*(t-.5),p=Yr(o*u/s)*r,l>_r&&l<$r&&p>_r&&p<$r?(i*=r*t<10*e?Wr((t-.5)*Sr(r/e)):Xr(u/e,t-.5),i*=Xr(o*u/s,r),i*=Ur(s/tt),f&&(f[1]=i*Xr(n,t))):(i=Yr(i)+l+p+(Yr(s)-1)/2,f&&(f[1]=Wr(i+t*Yr(n))),i=Wr(i))):i=Xr(o,r),i<Zr?a:(c=at(r,t,o,i),ot.initialValue=a,Rr(c,ot))}var ft=r,nt=t,it=o,st=a,et=m,ut=f,lt=n,pt=i,jt=s,ct=e,vt=u,Nt=l,ht=p,gt=j,xt=c,bt=v,dt=cr,kt=vr,wt=Br,yt=Gr,zt=Mr,At=Pr,qt=mt,It=1/bt;function Tt(r,t,o,a,m,f){var n,i,s,e,u,l,p,j,c;if(c=1-t,r[1]=-1,ft(t)||t<0||t>1)return r[0]=NaN,r[1]=NaN,r;if(m){if(o<0||a<0)return r[0]=NaN,r[1]=NaN,r;if(0===o){if(0===a)return r[0]=NaN,r[1]=NaN,r;if(a>0)return r[0]=f?0:1,r}else if(0===a&&o>0)return r[0]=f?1:0,r}else if(o<=0||a<=0)return r[0]=NaN,r[1]=NaN,r;return 0===t?(r[1]=1===o?1:o<1?Nt/2:2*ht,f?(r[0]=m?1:ut(o,a),r):(r[0]=0,r)):1===t?(r[1]=1===a?1:a<1?Nt/2:2*ht,r[0]=f?0:m?1:ut(o,a),r):.5===o&&.5===a?(r[1]=It*lt(c*t),j=et(lt(f?c:t)),j/=xt,m||(j*=bt),r[0]=j,r):(1===o&&(u=a,a=o,o=u,u=c,c=t,t=u,f=!f),1===a?1===o?(r[1]=1,r[0]=f?c:t,r):(r[1]=o*jt(t,o-1),j=c<.5?f?-nt(o*st(-c)):pt(o*st(-c)):f?-(jt(t,o)-1):jt(t,o),m||(j/=o),r[0]=j,r):(vt(o,a)<=1?(t>.5&&(u=a,a=o,o=u,u=c,c=t,t=u,f=!f),ct(o,a)<=1?o>=vt(.2,a)||jt(t,o)<=.9?f?(i=-(m?1:ut(o,a)),f=!1,i=-qt(o,a,t,i,m,r,c)):i=qt(o,a,t,0,m,r,c):(u=a,a=o,o=u,u=c,c=t,t=u,f=!f,c>=.3?f?(i=-(m?1:ut(o,a)),f=!1,i=-qt(o,a,t,i,m,r,c)):i=qt(o,a,t,0,m,r,c):(n=m?1:kt(o+a,o,20),i=At(o,a,t,c,20,m,r),f?(i-=m?1:ut(o,a),f=!1,i=-dt(o+20,a,t,c,i,n,m)):i=dt(o+20,a,t,c,i,n,m))):a<=1||t<.1&&jt(a*t,o)<=.7?f?(i=-(m?1:ut(o,a)),f=!1,i=-qt(o,a,t,i,m,r,c)):i=qt(o,a,t,0,m,r,c):(u=a,a=o,o=u,u=c,c=t,t=u,f=!f,c>=.3?f?(i=-(m?1:ut(o,a)),f=!1,i=-qt(o,a,t,i,m,r,c)):i=qt(o,a,t,0,m,r,c):o>=15?f?(i=-(m?1:ut(o,a)),f=!1,i=-dt(o,a,t,c,i,1,m)):i=dt(o,a,t,c,0,1,m):(n=m?1:kt(o+a,o,20),i=At(o,a,t,c,20,m,r),f?(i-=m?1:ut(o,a),f=!1,i=-dt(o+20,a,t,c,i,n,m)):i=dt(o+20,a,t,c,i,n,m)))):((o<a?o-(o+a)*t:(o+a)*c-a)<0&&(u=a,a=o,o=u,u=c,c=t,t=u,f=!f),a<40?it(o)===o&&it(a)===a&&o<gt-100?(i=zt(p=a+(l=o-1),l,t,c),m||(i*=ut(o,a))):a*t<=.7?f?(i=-(m?1:ut(o,a)),f=!1,i=-qt(o,a,t,i,m,r,c)):i=qt(o,a,t,0,m,r,c):o>15?((p=it(a))===a&&(p-=1),s=a-p,n=m?1:kt(o+s,s,p),i=At(s,o,c,t,p,m),i=dt(o,s,t,c,i,1,m),i/=n):m?((s=a-(p=it(a)))<=0&&(p-=1,s+=1),i=At(s,o,c,t,p,m),i+=At(o,s,t,c,20,m),f&&(i-=1),i=dt(o+20,s,t,c,i,1,m),f&&(i=-i,f=!1)):i=yt(o,a,t,c,m,r):i=yt(o,a,t,c,m,r)),r[1]<0&&(r[1]=wt(o,a,t,c,!0)),e=c*t,0!==r[1]&&(Nt*e<r[1]?r[1]=Nt/2:r[1]/=e),r[0]=f?(m?1:ut(o,a))-i:i,r))}var Vt=Tt;function Bt(r,t,o,a,m,f){return 5===arguments.length?Vt(new Array(2),r,t,o,a,m):Vt(r,t,o,a,m,f)}var Ct=Bt;export default Ct;
//# sourceMappingURL=kernel-betainc.js.map