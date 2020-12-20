// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../vendor/process.js";import r from"./../../vendor/readable-stream.js";import i from"./../../assert/is-positive-number.js";import o from"./../../assert/is-number.js";import n from"./../../math/base/assert/is-nan.js";import s from"./../../assert/is-error.js";import a from"./../../utils/copy.js";import p from"./../../utils/inherit.js";import m from"./../../utils/define-nonenumerable-property.js";import d from"./../../utils/define-read-only-accessor.js";import u from"./../../utils/define-read-write-accessor.js";import h from"./../base/normal.js";import g from"./../../buffer/from-string.js";import f from"./../../assert/is-plain-object.js";import c from"./../../assert/has-own-property.js";import l from"./../../assert/is-boolean.js";import b from"./../../assert/is-nonnegative-number.js";import v from"./../../assert/is-string.js";import y from"./../../assert/is-positive-integer.js";import j from"./../../assert/is-nonnegative-integer.js";import _ from"./../../vendor/debug.js";var w=!1,M=null,E="\n",T=!0,O=1e308,P={objectMode:w,encoding:M,sep:E,copy:T,siter:O},k=f,L=c,N=l.isPrimitive,W=b.isPrimitive,S=v.isPrimitive,V=y.isPrimitive,G=j.isPrimitive;function R(e,t){return k(t)?L(t,"sep")&&(e.sep=t.sep,!S(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):L(t,"objectMode")&&(e.objectMode=t.objectMode,!N(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):L(t,"encoding")&&(e.encoding=t.encoding,!S(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):L(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!W(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):L(t,"iter")&&(e.iter=t.iter,!G(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):L(t,"siter")&&(e.siter=t.siter,!V(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(L(t,"prng")&&(e.prng=t.prng),L(t,"seed")&&(e.seed=t.seed),L(t,"state")&&(e.state=t.state),L(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var x=_,C=x("random:streams:normal"),F=r.Readable,J=i.isPrimitive,A=o.isPrimitive,I=n,q=s,z=a,B=p,D=m,H=e,K=d,Q=u,U=h.factory,X=g,Y=P,Z=R,$=C;function ee(){return this._prng.seed}function te(){return this._prng.seedLength}function re(){return this._prng.stateLength}function ie(){return this._prng.byteLength}function oe(){return this._prng.state}function ne(e){this._prng.state=e}function se(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return $("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),$("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?X(t):X(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}}function ae(e){var r;return this._destroyed?($("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,t.nextTick((function(){e&&($("Stream was destroyed due to an error. Error: %s.",q(e)?e.message:JSON.stringify(e)),r.emit("error",e));$("Closing the stream..."),r.emit("close")})),this)}function pe(e,t,r){var i,o;if(!(this instanceof pe))return arguments.length>2?new pe(e,t,r):new pe(e,t);if(!A(e)||I(e))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`.");if(!J(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(i=z(Y),arguments.length>2&&(o=Z(i,r)))throw o;return $("Creating a readable stream configured with the following options: %s.",JSON.stringify(i)),F.call(this,i),D(this,"_destroyed",!1),H(this,"_objectMode",i.objectMode),H(this,"_sep",i.sep),H(this,"_iter",i.iter),H(this,"_siter",i.siter),D(this,"_i",0),H(this,"_prng",U(e,t,i)),H(this,"PRNG",this._prng.PRNG),this}B(pe,F),K(pe.prototype,"seed",ee),K(pe.prototype,"seedLength",te),Q(pe.prototype,"state",oe,ne),K(pe.prototype,"stateLength",re),K(pe.prototype,"byteLength",ie),H(pe.prototype,"_read",se),H(pe.prototype,"destroy",ae);var me=f,de=a,ue=pe;function he(e,t,r){var i;if(arguments.length>2){if(!me(i=r))throw new TypeError("invalid argument. Options must be an object. Value: `"+i+"`.");i=de(r,1)}else i={};return i.objectMode=!0,new ue(e,t,i)}var ge=a,fe=pe;function ce(e,t,r){var i,o;return o=1===(i=arguments.length)?ge(e,1):i>2?ge(r,1):{},i<2?n:s;function n(e,t){return new fe(e,t,o)}function s(){return new fe(e,t,o)}}var le=e,be=pe,ve=he,ye=ce;le(be,"objectMode",ve),le(be,"factory",ye);export default be;
//# sourceMappingURL=normal.js.map