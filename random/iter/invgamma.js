// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import i from"./../../utils/noop.js";import o from"./../../utils/copy.js";import s from"./../../assert/is-positive-number.js";import a from"./../../assert/is-plain-object.js";import u from"./../../assert/is-nonnegative-integer.js";import m from"./../../assert/has-own-property.js";import l from"./../../constants/math/float64-max.js";import f from"./../base/invgamma.js";import p from"./../../symbol/iterator.js";var g=e,c=t,d=r,v=n,b=i,h=o,j=s.isPrimitive,y=a,w=u.isPrimitive,P=m,L=l,G=f.factory,N=p;function R(e,t,r){var n,i,o,s,a;if(!j(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(!j(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(arguments.length>2){if(!y(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(n=h(r,1),P(n,"iter")){if(!w(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=L;o=G(e,t,n),void 0===n.prng&&!1!==n.copy&&(n.state=o.state)}else o=G(e,t),n={iter:L,state:o.state};return a=0,g(i={},"next",u),g(i,"return",m),n&&n.prng?(g(i,"seed",null),g(i,"seedLength",null),d(i,"state",v(null),b),g(i,"stateLength",null),g(i,"byteLength",null)):(c(i,"seed",f),c(i,"seedLength",p),d(i,"state",x,V),c(i,"stateLength",E),c(i,"byteLength",T)),g(i,"PRNG",o.PRNG),N&&g(i,N,l),i;function u(){return a+=1,s||a>n.iter?{done:!0}:{value:o(),done:!1}}function m(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return R(e,t,n)}function f(){return o.PRNG.seed}function p(){return o.PRNG.seedLength}function E(){return o.PRNG.stateLength}function T(){return o.PRNG.byteLength}function x(){return o.PRNG.state}function V(e){o.PRNG.state=e}}var E=R;export default E;
//# sourceMappingURL=invgamma.js.map