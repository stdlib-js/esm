// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import o from"./../../utils/noop.js";import i from"./../../utils/copy.js";import s from"./../../assert/is-positive-number.js";import a from"./../../assert/is-plain-object.js";import u from"./../../assert/is-nonnegative-integer.js";import m from"./../../assert/has-own-property.js";import l from"./../../constants/math/float64-max.js";import f from"./../base/rayleigh.js";import p from"./../../symbol/iterator.js";var c=e,g=t,d=r,h=n,b=o,j=i,v=s.isPrimitive,y=a,P=u.isPrimitive,L=m,w=l,G=f.factory,N=p;function R(e,t){var r,n,o,i,s;if(!v(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(arguments.length>1){if(!y(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(r=j(t,1),L(r,"iter")){if(!P(r.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+r.iter+"`.")}else r.iter=w;o=G(e,r),void 0===r.prng&&!1!==r.copy&&(r.state=o.state)}else o=G(e),r={iter:w,state:o.state};return s=0,c(n={},"next",a),c(n,"return",u),r&&r.prng?(c(n,"seed",null),c(n,"seedLength",null),d(n,"state",h(null),b),c(n,"stateLength",null),c(n,"byteLength",null)):(g(n,"seed",l),g(n,"seedLength",f),d(n,"state",E,T),g(n,"stateLength",p),g(n,"byteLength",x)),c(n,"PRNG",o.PRNG),N&&c(n,N,m),n;function a(){return s+=1,i||s>r.iter?{done:!0}:{value:o(),done:!1}}function u(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return R(e,r)}function l(){return o.PRNG.seed}function f(){return o.PRNG.seedLength}function p(){return o.PRNG.stateLength}function x(){return o.PRNG.byteLength}function E(){return o.PRNG.state}function T(e){o.PRNG.state=e}}var x=R;export default x;
//# sourceMappingURL=rayleigh.js.map