// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import i from"./../../utils/noop.js";import o from"./../../utils/copy.js";import s from"./../../assert/is-positive-number.js";import a from"./../../assert/is-plain-object.js";import u from"./../../assert/is-nonnegative-integer.js";import m from"./../../assert/has-own-property.js";import l from"./../../constants/math/float64-max.js";import f from"./../base/weibull.js";import p from"./../../symbol/iterator.js";var c=e,d=t,g=r,b=n,h=i,v=o,j=s.isPrimitive,y=a,w=u.isPrimitive,P=m,L=l,G=f.factory,N=p;function R(e,t,r){var n,i,o,s,a;if(!j(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(!j(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(arguments.length>2){if(!y(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(n=v(r,1),P(n,"iter")){if(!w(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=L;o=G(e,t,n),void 0===n.prng&&!1!==n.copy&&(n.state=o.state)}else o=G(e,t),n={iter:L,state:o.state};return a=0,c(i={},"next",u),c(i,"return",m),n&&n.prng?(c(i,"seed",null),c(i,"seedLength",null),g(i,"state",b(null),h),c(i,"stateLength",null),c(i,"byteLength",null)):(d(i,"seed",f),d(i,"seedLength",p),g(i,"state",x,V),d(i,"stateLength",E),d(i,"byteLength",T)),c(i,"PRNG",o.PRNG),N&&c(i,N,l),i;function u(){return a+=1,s||a>n.iter?{done:!0}:{value:o(),done:!1}}function m(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return R(e,t,n)}function f(){return o.PRNG.seed}function p(){return o.PRNG.seedLength}function E(){return o.PRNG.stateLength}function T(){return o.PRNG.byteLength}function x(){return o.PRNG.state}function V(e){o.PRNG.state=e}}var E=R;export default E;
//# sourceMappingURL=weibull.js.map