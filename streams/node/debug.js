// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import n from"./inspect.js";import t from"./../../assert/is-function.js";import r from"./../../assert/is-buffer.js";import o from"./../../utils/copy.js";import i from"./../../utils/inherit.js";import a from"./../../vendor/debug.js";import l from"./../../assert/is-plain-object.js";import s from"./../../assert/has-own-property.js";import m from"./../../assert/is-boolean.js";import p from"./../../assert/is-nonnegative-number.js";import u from"./../../assert/is-string.js";var f="debug-stream",b=a,d=f,c=b(d),g=!1,h=!1,w=!1,j="",v={objectMode:g,allowHalfOpen:h,readableObjectMode:w,name:j},O=l,M=s,y=m.isPrimitive,k=p.isPrimitive,E=u.isPrimitive;function T(e,n){return O(n)?M(n,"name")&&(e.name=n.name,!E(e.name))?new TypeError("invalid option. `name` option must be a primitive string. Option: `"+e.name+"`."):M(n,"objectMode")&&(e.objectMode=n.objectMode,!y(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):M(n,"readableObjectMode")&&(e.readableObjectMode=n.readableObjectMode,!y(e.readableObjectMode))?new TypeError("invalid option. `readableObjectMode` option must be a primitive boolean. Option: `"+e.readableObjectMode+"`."):M(n,"allowHalfOpen")&&(e.allowHalfOpen=n.allowHalfOpen,!y(e.allowHalfOpen))?new TypeError("invalid option. `allowHalfOpen` option must be a primitive boolean. Option: `"+e.allowHalfOpen+"`."):M(n,"highWaterMark")&&(e.highWaterMark=n.highWaterMark,!k(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}var H=a,C=n,V=t,W=r,x=o,S=i,I=c,P=v,J=f,N=T,R=H;function q(e,n){var t,r,o,i,a;if(!(this instanceof q))return arguments.length>1?new q(e,n):1===arguments.length?new q(e):new q;if(t=x(P),arguments.length>1){if(!V(n))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+n+"`.");a=n,i=N(t,e)}else arguments.length&&(V(e)?a=e:i=N(t,e));if(i)throw i;return r=t.name?J+":"+t.name:J,o=R(r),I("Creating a transform stream configured with the following options: %s.",JSON.stringify(t)),C.call(this,t,l),this;function l(e,n){if(a)return I("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),n),a(o,e,n);W(e)&&(e=e.toString()),e=JSON.stringify(e),I("Received a new chunk. Chunk: %s. Index: %d.",e,n),o("Chunk: %s. Index: %d.",e,n)}}S(q,C);var z=t,A=l,B=o,D=q;function F(e,n){var t,r;if(arguments.length>1){if(!A(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(t=B(e),r=n,!z(n))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+n+"`.")}else if(arguments.length)if(z(e))t={},r=e;else{if(!A(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");t=B(e)}else t={};return t.objectMode=!0,void 0===r?new D(t):new D(t,r)}var G=l,K=o,L=q;function Q(e){var n;if(arguments.length){if(!G(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");n=K(e)}else n={};return t;function t(e,t){return n.name=e,arguments.length>1?new L(n,t):new L(n)}}var U=e,X=q,Y=F,Z=Q;U(X,"objectMode",Y),U(X,"factory",Z);export default X;
//# sourceMappingURL=debug.js.map