// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import n from"./../../utils/define-nonenumerable-read-only-accessor.js";import r from"./../../utils/define-nonenumerable-read-write-accessor.js";import t from"./../../assert/is-plain-object.js";import o from"./../../assert/is-function.js";import i from"./../../assert/has-own-property.js";import a from"./../../utils/constant-function.js";import s from"./../../utils/noop.js";import u from"./mt19937.js";import m from"./../../math/base/assert/is-nan.js";import p from"./../../array/to-json.js";import l from"./../../assert/is-positive-number.js";import f from"./../../math/base/special/pow.js";var g=l.isPrimitive;function c(e,n){return g(e)?g(n)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+n+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+e+"`.")}var d=f;function b(e,n,r){var t=e();return d(1-d(1-t,1/r),1/n)}var h=e,v=n,y=r,j=t,w=o,L=i,N=a,E=s,O=u.factory,T=m,P=p,V=c,G=b;function R(){var e,n,r,t,o,i;if(0===arguments.length)n=O();else if(1===arguments.length){if(!j(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(L(e,"prng")){if(!w(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");n=e.prng}else n=O(e)}else{if(t=V(o=arguments[0],i=arguments[1]))throw t;if(arguments.length>2){if(!j(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(L(e,"prng")){if(!w(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");n=e.prng}else n=O(e)}else n=O()}return h(r=void 0===o?c:g,"NAME","kumaraswamy"),e&&e.prng?(h(r,"seed",null),h(r,"seedLength",null),y(r,"state",N(null),E),h(r,"stateLength",null),h(r,"byteLength",null),h(r,"toJSON",N(null)),h(r,"PRNG",n)):(v(r,"seed",a),v(r,"seedLength",s),y(r,"state",p,l),v(r,"stateLength",u),v(r,"byteLength",m),h(r,"toJSON",f),h(r,"PRNG",n),n=n.normalized),r;function a(){return n.seed}function s(){return n.seedLength}function u(){return n.stateLength}function m(){return n.byteLength}function p(){return n.state}function l(e){n.state=e}function f(){var e={type:"PRNG"};return e.name=r.NAME,e.state=P(n.state),e.params=void 0===o?[]:[o,i],e}function g(){return G(n,o,i)}function c(e,r){return T(e)||T(r)||e<=0||r<=0?NaN:G(n,e,r)}}var A=R,J=A(),M=e,S=J,k=R;M(S,"factory",k);export default S;
//# sourceMappingURL=kumaraswamy.js.map