// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../utils/define-nonenumerable-read-only-accessor.js";import o from"./../../utils/define-nonenumerable-read-write-accessor.js";import n from"./../../assert/is-plain-object.js";import r from"./../../assert/is-boolean.js";import i from"./../../assert/has-own-property.js";import a from"./../../array/to-json.js";import s from"./minstd.js";import p from"./minstd-shuffle.js";import m from"./mt19937.js";var d="mt19937",f=!0,u={name:d,copy:f},c={};c.minstd=s,c["minstd-shuffle"]=p,c.mt19937=m;var y=e,l=t,v=o,h=n,j=r.isPrimitive,b=i,w=a,g=u,N=c;function E(e){var t,o,n;if(t={name:g.name,copy:g.copy},arguments.length){if(!h(e))throw new TypeError("invalid argument. Must provide an object. Value: `"+e+"`.");if(b(e,"name")&&(t.name=e.name),b(e,"state")){if(t.state=e.state,void 0===t.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+t.state+"`.")}else if(b(e,"seed")&&(t.seed=e.seed,void 0===t.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+t.seed+"`.");if(b(e,"copy")&&(t.copy=e.copy,!j(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.")}if(void 0===(n=N[t.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+t.name+"`.");return o=void 0===t.state?void 0===t.seed?n.factory():n.factory({seed:t.seed}):n.factory({state:t.state,copy:t.copy}),y(f,"NAME","randu"),l(f,"seed",r),l(f,"seedLength",i),v(f,"state",p,m),l(f,"stateLength",a),l(f,"byteLength",s),y(f,"toJSON",d),y(f,"PRNG",o),y(f,"MIN",o.normalized.MIN),y(f,"MAX",o.normalized.MAX),f;function r(){return o.seed}function i(){return o.seedLength}function a(){return o.stateLength}function s(){return o.byteLength}function p(){return o.state}function m(e){o.state=e}function d(){var e={type:"PRNG"};return e.name=f.NAME+"-"+o.NAME,e.state=w(o.state),e.params=[],e}function f(){return o.normalized()}}var M=E,L=M(),A=e,O=L,z=E;A(O,"factory",z);export default O;
//# sourceMappingURL=randu.js.map