// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./define-nonenumerable-read-only-property.js";import r from"./../constants/math/float64-pinf.js";import o from"./../assert/is-object.js";import t from"./keys.js";import i from"./../assert/has-own-property.js";import n from"./../assert/is-buffer.js";import a from"./../assert/is-function.js";import p from"./type-of.js";import s from"./copy.js";import m from"./../assert/is-plain-object.js";import l from"./../assert/is-boolean.js";import v from"./../assert/is-positive-integer.js";var f=r,u={level:f,override:!0,extend:!0,copy:!0},c=t,d=o,y=i,b=n,j=a,w=p,g=s;function h(e,r,o,t,i,n){var a,p,s,m,l,v,f,u,x;for(p=j(i),o-=1,m=c(r),x=0;x<m.length;x++)if(v=m[x],(a=y(e,v))||n)if(f=r[v],a){if(l=e[v],s=w(l),!b(l)&&"object"===s&&d(f)&&o){h(l,f,o,t,i,n);continue}p?(u=i(l,f,v),t&&u!==l&&u===f&&(u=g(u)),e[v]=u):i&&(e[v]=t?g(f):f)}else e[v]=t?g(f):f}var x=o,E=h;function T(e){return function(r){var o,t,i,n;if((o=arguments.length-1)<1)throw new Error("insufficient input arguments. Must provide both a target object and one or more source objects.");if(!x(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");for(i=new Array(o),n=0;n<o;n++){if(!x(t=arguments[n+1]))throw new TypeError("invalid argument. A merge source must be an object. Value: `"+t+"`.");i[n]=t}for(n=0;n<o;n++)E(r,i[n],e.level,e.copy,e.override,e.extend);return r}}var O=u,V=T,A=V(O),P=m,k=i,F=l.isPrimitive,M=a,q=v.isPrimitive;function z(e,r){return P(r)?k(r,"level")&&(e.level=r.level,!q(e.level))?new TypeError("invalid option. `level` option must be a positive integer. Option: `"+e.level+"`."):k(r,"copy")&&(e.copy=r.copy,!F(e.copy))?new TypeError("invalid option. `copy` option must be a boolean primitive. Option: `"+e.copy+"`."):!k(r,"override")||(e.override=r.override,F(e.override)||M(e.override))?k(r,"extend")&&(e.extend=r.extend,!F(e.extend))?new TypeError("invalid option. `extend` option must be a boolean primitive. Option: `"+e.extend+"`."):null:new TypeError("invalid option. `override` option must be either a boolean primitive or a function. Option: `"+e.override+"`."):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}var B=s,C=z,D=u,G=T;function H(e){var r,o;if(r=B(D),o=C(r,e))throw o;return G(r)}var I=e,J=A,K=H;I(J,"factory",K);export default J;
//# sourceMappingURL=merge.js.map