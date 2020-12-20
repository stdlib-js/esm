// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../vendor/process.js";import r from"./../../vendor/readable-stream.js";import i from"./../../assert/is-number.js";import n from"./../../math/base/assert/is-nan.js";import o from"./../../assert/is-error.js";import s from"./../../utils/copy.js";import a from"./../../utils/inherit.js";import p from"./../../utils/define-nonenumerable-property.js";import m from"./../../utils/define-read-only-accessor.js";import d from"./../../utils/define-read-write-accessor.js";import u from"./../base/triangular.js";import h from"./../../buffer/from-string.js";import g from"./../../assert/is-plain-object.js";import f from"./../../assert/has-own-property.js";import l from"./../../assert/is-boolean.js";import c from"./../../assert/is-nonnegative-number.js";import b from"./../../assert/is-string.js";import v from"./../../assert/is-positive-integer.js";import y from"./../../assert/is-nonnegative-integer.js";import j from"./../../vendor/debug.js";var w=!1,_=null,M="\n",T=!0,E=1e308,N={objectMode:w,encoding:_,sep:M,copy:T,siter:E},O=g,P=f,k=l.isPrimitive,V=c.isPrimitive,L=b.isPrimitive,W=v.isPrimitive,S=y.isPrimitive;function R(e,t){return O(t)?P(t,"sep")&&(e.sep=t.sep,!L(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):P(t,"objectMode")&&(e.objectMode=t.objectMode,!k(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):P(t,"encoding")&&(e.encoding=t.encoding,!L(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):P(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!V(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):P(t,"iter")&&(e.iter=t.iter,!S(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):P(t,"siter")&&(e.siter=t.siter,!W(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(P(t,"prng")&&(e.prng=t.prng),P(t,"seed")&&(e.seed=t.seed),P(t,"state")&&(e.state=t.state),P(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var G=j,x=G("random:streams:triangular"),C=r.Readable,F=i.isPrimitive,J=n,A=o,I=s,q=a,z=p,B=e,D=m,H=d,K=u.factory,Q=h,U=N,X=R,Y=x;function Z(){return this._prng.seed}function $(){return this._prng.seedLength}function ee(){return this._prng.stateLength}function te(){return this._prng.byteLength}function re(){return this._prng.state}function ie(e){this._prng.state=e}function ne(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return Y("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),Y("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?Q(t):Q(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}}function oe(e){var r;return this._destroyed?(Y("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,t.nextTick((function(){e&&(Y("Stream was destroyed due to an error. Error: %s.",A(e)?e.message:JSON.stringify(e)),r.emit("error",e));Y("Closing the stream..."),r.emit("close")})),this)}function se(e,t,r,i){var n,o;if(!(this instanceof se))return arguments.length>3?new se(e,t,r,i):new se(e,t,r);if(!F(e)||J(e))throw new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`.");if(!F(t)||J(t))throw new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`.");if(!F(r)||J(r))throw new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`.");if(!(e<=r&&r<=t))throw new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+e+","+t+","+r+"]`.");if(n=I(U),arguments.length>3&&(o=X(n,i)))throw o;return Y("Creating a readable stream configured with the following options: %s.",JSON.stringify(n)),C.call(this,n),z(this,"_destroyed",!1),B(this,"_objectMode",n.objectMode),B(this,"_sep",n.sep),B(this,"_iter",n.iter),B(this,"_siter",n.siter),z(this,"_i",0),B(this,"_prng",K(e,t,r,n)),B(this,"PRNG",this._prng.PRNG),this}q(se,C),D(se.prototype,"seed",Z),D(se.prototype,"seedLength",$),H(se.prototype,"state",re,ie),D(se.prototype,"stateLength",ee),D(se.prototype,"byteLength",te),B(se.prototype,"_read",ne),B(se.prototype,"destroy",oe);var ae=g,pe=s,me=se;function de(e,t,r,i){var n;if(arguments.length>3){if(!ae(n=i))throw new TypeError("invalid argument. Options must be an object. Value: `"+n+"`.");n=pe(i,1)}else n={};return n.objectMode=!0,new me(e,t,r,n)}var ue=s,he=se;function ge(e,t,r,i){var n,o;return o=1===(n=arguments.length)?ue(e,1):n>3?ue(i,1):{},n<3?s:a;function s(e,t,r){return new he(e,t,r,o)}function a(){return new he(e,t,r,o)}}var fe=e,le=se,ce=de,be=ge;fe(le,"objectMode",ce),fe(le,"factory",be);export default le;
//# sourceMappingURL=triangular.js.map