// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import r from"./../../vendor/process.js";import t from"./../../vendor/readable-stream.js";import o from"./../../assert/is-error.js";import i from"./../../utils/copy.js";import n from"./../../utils/inherit.js";import s from"./../../utils/define-nonenumerable-property.js";import a from"./../../assert/is-plain-object.js";import m from"./../../assert/has-own-property.js";import d from"./../../assert/is-boolean.js";import p from"./../../vendor/debug.js";var u=!1,l={objectMode:u},f=a,c=m,j=d.isPrimitive;function b(e,r){return f(r)?c(r,"objectMode")&&(e.objectMode=r.objectMode,!j(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}var y=p,h=y("empty-stream"),v=t.Readable,g=o,w=i,M=n,O=s,_=e,E=l,S=b,T=h;function x(){this.push(null)}function C(e){var t;return this._destroyed?(T("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,r.nextTick((function(){e&&(T("Stream was destroyed due to an error. Error: %s.",g(e)?e.message:JSON.stringify(e)),t.emit("error",e));T("Closing the stream..."),t.emit("close")})),this)}function J(e){var r,t;if(!(this instanceof J))return arguments.length>0?new J(e):new J;if(r=w(E),arguments.length>0&&(t=S(r,e)))throw t;return T("Creating a readable stream configured with the following options: %s.",JSON.stringify(r)),v.call(this,r),O(this,"_destroyed",!1),this}M(J,v),_(J.prototype,"_read",x),_(J.prototype,"destroy",C);var N=J;function k(){return new N({objectMode:!0})}var A=i,P=J;function R(e){var r;return r=arguments.length>0?A(e,1):{},t;function t(){return new P(r)}}var V=e,q=J,z=k,B=R;V(q,"objectMode",z),V(q,"factory",B);export default q;
//# sourceMappingURL=empty.js.map