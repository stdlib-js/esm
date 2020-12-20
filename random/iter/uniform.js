// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../utils/constant-function.js";import i from"./../../utils/noop.js";import o from"./../../utils/copy.js";import s from"./../../assert/is-number.js";import a from"./../../math/base/assert/is-nan.js";import u from"./../../assert/is-plain-object.js";import m from"./../../assert/is-nonnegative-integer.js";import l from"./../../assert/has-own-property.js";import f from"./../../constants/math/float64-max.js";import p from"./../base/uniform.js";import d from"./../../symbol/iterator.js";var g=e,c=t,b=r,h=n,v=i,j=o,y=s.isPrimitive,w=a,N=u,P=m.isPrimitive,L=l,R=f,G=p.factory,E=d;function x(e,t,r){var n,i,o,s,a;if(!y(e)||w(e))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`.");if(!y(t)||w(t))throw new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`.");if(e>=t)throw new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+e+","+t+"]`.");if(arguments.length>2){if(!N(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(n=j(r,1),L(n,"iter")){if(!P(n.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+n.iter+"`.")}else n.iter=R;o=G(e,t,n),void 0===n.prng&&!1!==n.copy&&(n.state=o.state)}else o=G(e,t),n={iter:R,state:o.state};return a=0,g(i={},"next",u),g(i,"return",m),n&&n.prng?(g(i,"seed",null),g(i,"seedLength",null),b(i,"state",h(null),v),g(i,"stateLength",null),g(i,"byteLength",null)):(c(i,"seed",f),c(i,"seedLength",p),b(i,"state",V,O),c(i,"stateLength",d),c(i,"byteLength",T)),g(i,"PRNG",o.PRNG),E&&g(i,E,l),i;function u(){return a+=1,s||a>n.iter?{done:!0}:{value:o(),done:!1}}function m(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return x(e,t,n)}function f(){return o.PRNG.seed}function p(){return o.PRNG.seedLength}function d(){return o.PRNG.stateLength}function T(){return o.PRNG.byteLength}function V(){return o.PRNG.state}function O(e){o.PRNG.state=e}}var T=x;export default T;
//# sourceMappingURL=uniform.js.map