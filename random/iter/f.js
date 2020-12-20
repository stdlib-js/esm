// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import o from"./../../utils/noop.js";import i from"./../../utils/copy.js";import s from"./../../assert/is-positive-number.js";import a from"./../../assert/is-plain-object.js";import u from"./../../assert/is-nonnegative-integer.js";import m from"./../../assert/has-own-property.js";import l from"./../../constants/math/float64-max.js";import f from"./../base/f.js";import p from"./../../symbol/iterator.js";var c=e,d=t,g=r,b=n,h=o,v=i,j=s.isPrimitive,y=a,w=u.isPrimitive,P=m,L=l,G=f.factory,N=p;function R(e,t,r){var n,o,i,s,a;if(!j(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(!j(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(arguments.length>2){if(!y(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(n=v(r,1),P(n,"iter")){if(!w(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=L;i=G(e,t,n),void 0===n.prng&&!1!==n.copy&&(n.state=i.state)}else i=G(e,t),n={iter:L,state:i.state};return a=0,c(o={},"next",u),c(o,"return",m),n&&n.prng?(c(o,"seed",null),c(o,"seedLength",null),g(o,"state",b(null),h),c(o,"stateLength",null),c(o,"byteLength",null)):(d(o,"seed",f),d(o,"seedLength",p),g(o,"state",x,V),d(o,"stateLength",E),d(o,"byteLength",T)),c(o,"PRNG",i.PRNG),N&&c(o,N,l),o;function u(){return a+=1,s||a>n.iter?{done:!0}:{value:i(),done:!1}}function m(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return R(e,t,n)}function f(){return i.PRNG.seed}function p(){return i.PRNG.seedLength}function E(){return i.PRNG.stateLength}function T(){return i.PRNG.byteLength}function x(){return i.PRNG.state}function V(e){i.PRNG.state=e}}var E=R;export default E;
//# sourceMappingURL=f.js.map