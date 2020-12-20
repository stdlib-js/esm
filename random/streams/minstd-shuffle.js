// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../vendor/process.js";import r from"./../../vendor/readable-stream.js";import i from"./../../assert/is-error.js";import o from"./../../utils/copy.js";import n from"./../../utils/inherit.js";import s from"./../../utils/define-nonenumerable-property.js";import a from"./../../utils/define-read-only-accessor.js";import p from"./../../utils/define-read-write-accessor.js";import d from"./../base/minstd-shuffle.js";import m from"./../../buffer/from-string.js";import h from"./../../assert/is-plain-object.js";import u from"./../../assert/has-own-property.js";import l from"./../../assert/is-boolean.js";import f from"./../../assert/is-nonnegative-number.js";import g from"./../../assert/is-string.js";import c from"./../../assert/is-positive-integer.js";import b from"./../../assert/is-nonnegative-integer.js";import y from"./../../vendor/debug.js";var v=!1,j=null,_="\n",w=!0,M=1e308,O=!1,E={objectMode:v,encoding:j,sep:_,copy:w,siter:M,normalized:O},T=h,z=u,k=l.isPrimitive,L=f.isPrimitive,W=g.isPrimitive,P=c.isPrimitive,S=b.isPrimitive;function V(e,t){return T(t)?z(t,"sep")&&(e.sep=t.sep,!W(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):z(t,"objectMode")&&(e.objectMode=t.objectMode,!k(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):z(t,"encoding")&&(e.encoding=t.encoding,!W(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):z(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!L(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):z(t,"iter")&&(e.iter=t.iter,!S(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):z(t,"siter")&&(e.siter=t.siter,!P(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):z(t,"normalized")&&(e.normalized=t.normalized,!k(e.normalized))?new TypeError("invalid option. `normalized` option must be a primitive boolean. Option: `"+e.normalized+"`."):(z(t,"seed")&&(e.seed=t.seed),z(t,"state")&&(e.state=t.state),z(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var x=y,C=x("random:streams:minstd-shuffle"),J=r.Readable,N=i,A=o,F=n,G=s,I=e,R=a,q=p,B=d.factory,D=m,H=E,K=V,Q=C;function U(){return this._prng.seed}function X(){return this._prng.seedLength}function Y(){return this._prng.stateLength}function Z(){return this._prng.byteLength}function $(){return this._prng.state}function ee(e){this._prng.state=e}function te(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return Q("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),Q("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?D(t):D(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}}function re(e){var r;return this._destroyed?(Q("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,t.nextTick((function(){e&&(Q("Stream was destroyed due to an error. Error: %s.",N(e)?e.message:JSON.stringify(e)),r.emit("error",e));Q("Closing the stream..."),r.emit("close")})),this)}function ie(e){var t,r,i;if(!(this instanceof ie))return arguments.length>0?new ie(e):new ie;if(r=A(H),arguments.length>0&&(i=K(r,e)))throw i;return Q("Creating a readable stream configured with the following options: %s.",JSON.stringify(r)),J.call(this,r),G(this,"_destroyed",!1),I(this,"_objectMode",r.objectMode),I(this,"_sep",r.sep),I(this,"_iter",r.iter),I(this,"_siter",r.siter),G(this,"_i",0),t=B(r),r.normalized&&(t=t.normalized),I(this,"_prng",t),this}F(ie,J),R(ie.prototype,"seed",U),R(ie.prototype,"seedLength",X),q(ie.prototype,"state",$,ee),R(ie.prototype,"stateLength",Y),R(ie.prototype,"byteLength",Z),I(ie.prototype,"_read",te),I(ie.prototype,"destroy",re);var oe=h,ne=o,se=ie;function ae(e){var t;if(arguments.length>0){if(!oe(t=e))throw new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.");t=ne(e,1)}else t={};return t.objectMode=!0,new se(t)}var pe=o,de=ie;function me(e){var t;return t=arguments.length>0?pe(e,1):{},r;function r(){return new de(t)}}var he=e,ue=ie,le=ae,fe=me;he(ue,"objectMode",le),he(ue,"factory",fe);export default ue;
//# sourceMappingURL=minstd-shuffle.js.map