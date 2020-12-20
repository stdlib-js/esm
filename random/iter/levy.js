// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import i from"./../../utils/noop.js";import o from"./../../utils/copy.js";import s from"./../../assert/is-number.js";import a from"./../../math/base/assert/is-nan.js";import m from"./../../assert/is-plain-object.js";import u from"./../../assert/is-nonnegative-integer.js";import l from"./../../assert/is-positive-number.js";import f from"./../../assert/has-own-property.js";import p from"./../../constants/math/float64-max.js";import d from"./../base/levy.js";import c from"./../../symbol/iterator.js";var g=e,b=t,v=r,h=n,j=i,y=o,P=s.isPrimitive,w=a,N=m,L=u.isPrimitive,G=l.isPrimitive,R=f,E=p,T=d.factory,x=c;function V(e,t,r){var n,i,o,s,a;if(!P(e)||w(e))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`.");if(!G(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(arguments.length>2){if(!N(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(n=y(r,1),R(n,"iter")){if(!L(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=E;o=T(e,t,n),void 0===n.prng&&!1!==n.copy&&(n.state=o.state)}else o=T(e,t),n={iter:E,state:o.state};return a=0,g(i={},"next",m),g(i,"return",u),n&&n.prng?(g(i,"seed",null),g(i,"seedLength",null),v(i,"state",h(null),j),g(i,"stateLength",null),g(i,"byteLength",null)):(b(i,"seed",f),b(i,"seedLength",p),v(i,"state",O,F),b(i,"stateLength",d),b(i,"byteLength",c)),g(i,"PRNG",o.PRNG),x&&g(i,x,l),i;function m(){return a+=1,s||a>n.iter?{done:!0}:{value:o(),done:!1}}function u(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return V(e,t,n)}function f(){return o.PRNG.seed}function p(){return o.PRNG.seedLength}function d(){return o.PRNG.stateLength}function c(){return o.PRNG.byteLength}function O(){return o.PRNG.state}function F(e){o.PRNG.state=e}}var O=V;export default O;
//# sourceMappingURL=levy.js.map