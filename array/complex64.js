// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-nonnegative-integer.js";import r from"./../assert/is-array-like-object.js";import t from"./../assert/is-collection.js";import n from"./../assert/is-arraybuffer.js";import a from"./../assert/is-object.js";import i from"./../assert/is-array.js";import o from"./../assert/is-function.js";import u from"./../assert/is-complex-like.js";import l from"./../math/base/assert/is-even.js";import f from"./../math/base/assert/is-integer.js";import s from"./../assert/has-iterator-symbol-support.js";import m from"./../symbol/iterator.js";import h from"./../utils/define-property.js";import g from"./float32.js";import b from"./../complex/float32.js";import c from"./../complex/real.js";import w from"./../complex/imag.js";var p=r,y=u,v=c,d=w;function E(e){var r,t,n;for(r=[];;){if(n=(t=e.next()).value)if(p(n)&&n.length>=2)r.push(n[0],n[1]);else{if(!y(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(v(n),d(n))}if(t.done)break}return r}var T=r,j=u,_=c,x=w;function k(e,r,t){var n,a,i,o;for(n=[],o=-1;;){if(o+=1,i=(a=e.next()).value)if(i=r.call(t,i,o),T(i)&&i.length>=2)n.push(i[0],i[1]);else{if(!j(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(_(i),x(i))}if(a.done)break}return n}var V=u,L=c,R=w;function A(e,r){var t,n,a,i;for(t=r.length,i=0,a=0;a<t;a++){if(n=r[a],!V(n))return null;e[i]=L(n),e[i+1]=R(n),i+=2}return e}var B=e.isPrimitive,M=r,O=t,C=n,S=a,F=i,P=o,N=u,Y=l,I=f,W=s,q=m,z=h,D=g,G=b,H=c,J=w,K=E,Q=k,U=A,X=2*D.BYTES_PER_ELEMENT,Z=W();function $(e){return e instanceof re||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ee(e){return e===re||"Complex128Array"===e.name}function re(){var e,r,t,n;if(r=arguments.length,!(this instanceof re))return 0===r?new re:1===r?new re(arguments[0]):2===r?new re(arguments[0],arguments[1]):new re(arguments[0],arguments[1],arguments[2]);if(0===r)t=new D(0);else if(1===r)if(B(arguments[0]))t=new D(2*arguments[0]);else if(O(arguments[0]))if((n=(t=arguments[0]).length)&&F(t)&&N(t[0])){if(null===(t=U(new D(2*n),t))){if(!Y(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new D(arguments[0])}}else{if(!Y(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new D(t)}else if(C(arguments[0])){if(!I((t=arguments[0]).byteLength/X))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+X+". Byte length: `"+t.byteLength+"`.");t=new D(t)}else{if(!S(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Z)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!P(t[q]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[q](),!P(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=K(t))instanceof Error)throw t;t=new D(t)}else{if(!C(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!B(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!I(e/X))throw new RangeError("invalid argument. Byte offset must be a multiple of "+X+". Value: `"+e+"`.");if(2===r){if(n=t.byteLength-e,!I(n/X))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+X+". View byte length: `"+n+"`.");t=new D(t,e)}else{if(!B(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*X>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*X+"`.");t=new D(t,e,2*n)}}return z(this,"_buffer",{configurable:!1,enumerable:!1,writable:!1,value:t}),z(this,"_length",{configurable:!1,enumerable:!1,writable:!1,value:t.length/2}),this}z(re,"BYTES_PER_ELEMENT",{configurable:!1,enumerable:!1,writable:!1,value:X}),z(re,"name",{configurable:!1,enumerable:!1,writable:!1,value:"Complex64Array"}),z(re,"from",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var r,t,n,a,i,o,u,l,f,s,m;if(!P(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!P(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(O(e))if(n){for(u=e.length,s=0;s<u;s++)if(!N(e[s])){l=!0;break}if(l){if(!Y(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(a=new this(u/2))._buffer,s=0;s<u;s++)i[s]=n.call(r,e[s],s)}else for(i=(a=new this(u))._buffer,m=0,s=0;s<u;s++){if(f=n.call(r,e[s],s),N(f))i[m]=H(f),i[m+1]=J(f);else{if(!(M(f)&&f.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+f+"`.");i[m]=f[0],i[m+1]=f[1]}m+=2}}else a=new this(e);else{if(!(S(e)&&Z&&P(e[q])))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.");if(i=e[q](),!P(i.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((o=n?Q(i,n,r):K(i))instanceof Error)throw o;for(i=(a=new this(u=o.length/2))._buffer,s=0;s<u;s++)i[s]=o[s]}return a}}),z(re,"of",{configurable:!1,enumerable:!1,writable:!1,value:function(){var e,r;if(!P(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)}}),z(re.prototype,"buffer",{configurable:!1,enumerable:!1,get:function(){return this._buffer.buffer}}),z(re.prototype,"byteLength",{configurable:!1,enumerable:!1,get:function(){return this._buffer.byteLength}}),z(re.prototype,"byteOffset",{configurable:!1,enumerable:!1,get:function(){return this._buffer.byteOffset}}),z(re.prototype,"BYTES_PER_ELEMENT",{configurable:!1,enumerable:!1,writable:!1,value:re.BYTES_PER_ELEMENT}),z(re.prototype,"copyWithin",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r){if(!$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this}}),z(re.prototype,"entries",{configurable:!1,enumerable:!1,writable:!1,value:function(){var e,r,t,n,a,i,o;if(!$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,o=-2,z(t={},"next",{configurable:!1,enumerable:!1,writable:!1,value:function(){var r;if(i+=1,a||i>=n)return{done:!0};return r=new G(e[o+=2],e[o+1]),{value:[i,r],done:!1}}}),z(t,"return",{configurable:!1,enumerable:!1,writable:!1,value:function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}}}),q&&z(t,q,{configurable:!1,enumerable:!1,writable:!1,value:function(){return r.entries()}}),t}}),z(re.prototype,"get",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var r,t,n;if(!$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(r=arguments[1],!M(t=e)||t.length<2)throw new TypeError("invalid argument. Output argument must be an array-like object. Value: `"+t+"`.")}else r=e;if(!B(r))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return r*=2,t?(t[0]=n[r],t[1]=n[r+1],t):new G(n[r],n[r+1])}}),z(re.prototype,"length",{configurable:!1,enumerable:!1,get:function(){return this._length}}),z(re.prototype,"set",{configurable:!1,enumerable:!1,writable:!1,value:function(e){var r,t,n,a,i,o,u,l,f;if(!$(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!B(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(N(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=H(e),void(n[t+1]=J(e))}if($(e)){if(t+(o=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,f=n.byteOffset+t*X,r.buffer===n.buffer&&r.byteOffset<f&&r.byteOffset+r.byteLength>f){for(a=new D(r.length),l=0;l<r.length;l++)a[l]=r[l];r=a}for(t*=2,f=0,l=0;l<o;l++)n[t]=r[f],n[t+1]=r[f+1],t+=2,f+=2}else{if(!M(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(o=e.length,l=0;l<o;l++)if(!N(e[l])){i=!0;break}if(i){if(!Y(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(t+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,f=n.byteOffset+t*X,r.buffer===n.buffer&&r.byteOffset<f&&r.byteOffset+r.byteLength>f){for(a=new D(o),l=0;l<o;l++)a[l]=r[l];r=a}for(t*=2,o/=2,f=0,l=0;l<o;l++)n[t]=r[f],n[t+1]=r[f+1],t+=2,f+=2;return}if(t+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,l=0;l<o;l++)u=e[l],n[t]=H(u),n[t+1]=J(u),t+=2}}});var te=re;export default te;
//# sourceMappingURL=complex64.js.map