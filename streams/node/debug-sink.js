// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import n from"./inspect-sink.js";import t from"./../../assert/is-function.js";import i from"./../../assert/is-buffer.js";import r from"./../../utils/copy.js";import o from"./../../utils/inherit.js";import a from"./../../vendor/debug.js";import s from"./../../assert/is-plain-object.js";import u from"./../../assert/has-own-property.js";import m from"./../../assert/is-boolean.js";import d from"./../../assert/is-nonnegative-number.js";import l from"./../../assert/is-string.js";var p="debug-stream-sink",g=a,f=p,c=g(f),h=!1,b=!0,v="utf8",w="",j={objectMode:h,decodeStrings:b,defaultEncoding:v,name:w},y=s,E=u,k=m.isPrimitive,M=d.isPrimitive,O=l.isPrimitive;function S(e,n){return y(n)?E(n,"name")&&(e.name=n.name,!O(e.name))?new TypeError("invalid option. `name` option must be a primitive string. Option: `"+e.name+"`."):E(n,"objectMode")&&(e.objectMode=n.objectMode,!k(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):E(n,"highWaterMark")&&(e.highWaterMark=n.highWaterMark,!M(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):E(n,"decodeStrings")&&(e.decodeStrings=n.decodeStrings,!k(e.decodeStrings))?new TypeError("invalid option. `decodeStrings` option must be a primitive boolean. Option: `"+e.decodeStrings+"`."):E(n,"defaultEncoding")&&(e.defaultEncoding=n.defaultEncoding,!O(e.defaultEncoding))?new TypeError("invalid option. `defaultEncoding` option must be a primitive string. Option: `"+e.defaultEncoding+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}var T=a,C=n,V=t,W=i,x=r,I=o,P=c,J=j,N=p,R=S,q=T;function z(e,n){var t,i,r,o,a;if(!(this instanceof z))return arguments.length>1?new z(e,n):1===arguments.length?new z(e):new z;if(t=x(J),arguments.length>1){if(!V(n))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+n+"`.");a=n,o=R(t,e)}else arguments.length&&(V(e)?a=e:o=R(t,e));if(o)throw o;return i=t.name?N+":"+t.name:N,r=q(i),P("Creating a writable stream configured with the following options: %s.",JSON.stringify(t)),C.call(this,t,s),this;function s(e,n){if(a)return P("Received a new chunk. Chunk: %s. Index: %d.",e.toString(),n),a(r,e,n);W(e)&&(e=e.toString()),e=JSON.stringify(e),P("Received a new chunk. Chunk: %s. Index: %d.",e,n),r("Chunk: %s. Index: %d.",e,n)}}I(z,C);var A=t,B=s,D=r,F=z;function G(e,n){var t,i;if(arguments.length>1){if(!B(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(t=D(e),i=n,!A(n))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+n+"`.")}else if(arguments.length)if(A(e))t={},i=e;else{if(!B(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");t=D(e)}else t={};return t.objectMode=!0,void 0===i?new F(t):new F(t,i)}var H=s,K=r,L=z;function Q(e){var n;if(arguments.length){if(!H(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");n=K(e)}else n={};return t;function t(e,t){return n.name=e,arguments.length>1?new L(n,t):new L(n)}}var U=e,X=z,Y=G,Z=Q;U(X,"objectMode",Y),U(X,"factory",Z);export default X;
//# sourceMappingURL=debug-sink.js.map