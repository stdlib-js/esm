// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../vendor/events.js";import t from"./../../../vendor/debug.js";import i from"./../../../utils/define-property.js";import r from"./../../../utils/define-read-only-property.js";import n from"./../../../utils/keys.js";import a from"./../../../utils/copy.js";import o from"./../../../utils/merge.js";import s from"./../../../assert/is-plain-object.js";import l from"./../../../assert/is-nan.js";import u from"./../../../assert/is-array-like.js";import h from"./../../../assert/is-function.js";import c from"./../../../assert/is-string.js";import p from"./../../../assert/is-number.js";import f from"./../../../assert/is-nonnegative-integer.js";import m from"./../../../assert/is-boolean.js";import{line as y}from"./../../../vendor/d3-shape.js";import d from"./../../../vendor/virtual-dom/h.js";import{scaleLinear as v}from"./../../../vendor/d3-scale.js";var g=t,b=l.isPrimitive,w=g("path:accessor:is-defined");function _(e){var t=!b(e);return w("Datum: %s. Defined: %s.",JSON.stringify(e),t),t}var x=!1,S="#000",V=null,D="",j=.9,N="-",E=2,R=[],P=null,C=[],T=null,k={autoRender:x,color:S,isDefined:V,label:D,opacity:j,style:N,width:E,x:R,xScale:P,y:C,yScale:T},O=t,J=u,A=O("path:set:x");function M(e){if(!J(e))throw new TypeError("invalid value. `x` must be array-like. Value: `"+e+".`");A("Current value: %s.",JSON.stringify(this._xData)),this._xData=e,A("New Value: %s.",JSON.stringify(this._xData)),this.emit("change")}function q(){return this._xData}var G=t,z=u,B=G("path:set:y");function F(e){if(!z(e))throw new TypeError("invalid value. `y` must be array-like. Value: `"+e+".`");B("Current value: %s.",JSON.stringify(this._yData)),this._yData=e,B("New Value: %s.",JSON.stringify(this._yData)),this.emit("change")}function H(){return this._yData}var I=t,K=h,L=I("path:set:xscale");function Q(e){if(!K(e))throw new TypeError("invalid value. `xScale` must be a function. Value: `"+e+".`");L("Current value: %s.",this._xScale),this._xScale=e,L("New Value: %s.",this._xScale),this.emit("change")}function U(){return this._xScale}var W=t,X=h,Y=W("path:set:yscale");function Z(e){if(!X(e))throw new TypeError("invalid value. `yScale` must be a function. Value: `"+e+".`");Y("Current value: %s.",this._yScale),this._yScale=e,Y("New Value: %s.",this._yScale),this.emit("change")}function $(){return this._yScale}var ee=t,te=h,ie=ee("path:set:is-defined");function re(e){if(!te(e))throw new TypeError("invalid value. `isDefined` must be a function. Value: `"+e+".`");ie("Current value: %s.",this._isDefined),this._isDefined=e,ie("New Value: %s.",this._isDefined),this.emit("change")}function ne(){return this._isDefined}var ae=t,oe=c.isPrimitive,se=ae("path:set:color");function le(e){if(!oe(e))throw new TypeError("invalid value. `color` must be a string primitive. Value: `"+e+".`");se("Current value: %d.",this._color),this._color=e,se("New Value: %d.",this._color),this.emit("change")}function ue(){return this._color}var he=t,ce=c.isPrimitive,pe=he("path:set:label");function fe(e){if(!ce(e))throw new TypeError("invalid value. `label` must be a string primitive. Value: `"+e+".`");pe("Current value: %d.",this._label),this._label=e,pe("New Value: %d.",this._label),this.emit("change")}function me(){return this._label}var ye=t,de=p.isPrimitive,ve=ye("path:set:opacity");function ge(e){if(!de(e))throw new TypeError("invalid value. `opacity` must be a number. Value: `"+e+".`");if(e<0||e>1)throw new RangeError("invalid value. `opacity` must be a number on the interval `[0,1]`. Value: `"+e+"`.");ve("Current value: %d.",this._opacity),this._opacity=e,ve("New Value: %d.",this._opacity),this.emit("change")}function be(){return this._opacity}var we=t,_e=f.isPrimitive,xe=we("path:set:width");function Se(e){if(!_e(e))throw new TypeError("invalid value. `width` must be a nonnegative integer. Value: `"+e+".`");xe("Current value: %d.",this._width),this._width=e,xe("New Value: %d.",this._width),this.emit("change")}function Ve(){return this._width}var De=t,je=c.isPrimitive,Ne=De("path:set:style");function Ee(e){if(!je(e))throw new TypeError("invalid value. `style` must be a string primitive. Value: `"+e+".`");Ne("Current value: %d.",this._style),this._style=e,Ne("New Value: %d.",this._style),this.emit("change")}function Re(){return this._style}var Pe=t,Ce=m.isPrimitive,Te=Pe("path:set:auto-render");function ke(e){if(!Ce(e))throw new TypeError("invalid value. `autoRender` must be a boolean primitive. Value: `"+e+".`");Te("Current value: %d.",this._autoRender),this._autoRender=e,Te("New Value: %d.",this._autoRender),this.emit("change")}function Oe(){return this._autoRender}function Je(){return y().x(this.xPos).y(this.yPos).defined(this.isDefined)}var Ae=t,Me=Ae("path:xpos");function qe(){var e=this.xScale;return function(t){var i=e(t[0]);return Me("Value: %d => Pixel: %d.",t[0],i),i}}var Ge=t,ze=Ge("path:ypos");function Be(){var e=this.yScale;return function(t){var i=e(t[1]);return ze("Value: %d => Pixel: %d.",t[1],i),i}}function Fe(e,t){var i,r;if(e.length!==t.length)throw new Error("invalid arguments. Must provide equal length array-like objects. `x` length: "+e.length+", `y` length: "+t.length+".");for(i=new Array(e.length),r=0;r<e.length;r++)i[r]=[e[r],t[r]];return i}var He={"-":"","--":"5, 1",":":"0.9","-.":"5, 1, 1, 1"};function Ie(e){var t=He[e];return t||e}var Ke=t,Le=d,Qe=Fe,Ue=Ie,We=Ke("path:render"),Xe="path";function Ye(){var e,t;return We("Rendering..."),e={namespace:"http://www.w3.org/2000/svg",property:"line",className:"path line",attributes:{d:this.line(Qe(this._xData,this._yData)),fill:"none",stroke:this.color,"stroke-width":this.width,"stroke-opacity":this.opacity,"stroke-dasharray":Ue(this.style),"data-label":this.label}},We("Generating a virtual DOM tree (%s) with properties: %s.",Xe,JSON.stringify(e)),t=Le(Xe,e,[]),this.emit("_render",t),t}var Ze=e.EventEmitter,$e=t,et=i,tt=r,it=n,rt=a,nt=o,at=s,ot=_,st=k,lt=M,ut=q,ht=F,ct=H,pt=Q,ft=U,mt=Z,yt=$,dt=re,vt=ne,gt=le,bt=ue,wt=fe,_t=me,xt=ge,St=be,Vt=Se,Dt=Ve,jt=Ee,Nt=Re,Et=ke,Rt=Oe,Pt=Je,Ct=qe,Tt=Be,kt=Ye,Ot=$e("path:main"),Jt=["_autoRender","_color","_isDefined","_label","_opacity","_style","_width","_xData","_xScale","_yData","_yScale"];function At(e){var t,i,r,n,a;if(!(this instanceof At))return arguments.length?new At(e):new At;if(t=this,(r=rt(st)).isDefined=ot,r.xScale=v(),r.yScale=v(),arguments.length){if(!at(e))throw new TypeError("invalid argument. `options` argument must be an object. Value: `"+e+"`.");r=nt(r,e)}for(Ot("Creating an instance with the following configuration: %s.",JSON.stringify(r)),Ze.call(this),a=0;a<Jt.length;a++)et(this,Jt[a],{configurable:!1,enumerable:!1,writable:!0,value:null});for(i=it(r),a=0;a<i.length;a++)this[n=i[a]]=r[n];return this.on("change",o),this.on("_render",s),this;function o(){Ot("Received a change event."),t._autoRender&&t.render()}function s(){var e,i;for(Ot("Received a render event. Re-emitting..."),(e=new Array(arguments.length+1))[0]="render",i=0;i<arguments.length;i++)e[i+1]=arguments[i];t.emit.apply(t,e)}}At.prototype=Object.create(Ze.prototype),At.prototype.constructor=At,et(At.prototype,"x",{configurable:!1,enumerable:!0,set:lt,get:ut}),et(At.prototype,"y",{configurable:!1,enumerable:!0,set:ht,get:ct}),et(At.prototype,"xScale",{configurable:!1,enumerable:!0,set:pt,get:ft}),et(At.prototype,"yScale",{configurable:!1,enumerable:!0,set:mt,get:yt}),et(At.prototype,"isDefined",{configurable:!1,enumerable:!0,set:dt,get:vt}),et(At.prototype,"color",{configurable:!1,enumerable:!0,set:gt,get:bt}),et(At.prototype,"label",{configurable:!1,enumerable:!0,set:wt,get:_t}),et(At.prototype,"opacity",{configurable:!1,enumerable:!0,set:xt,get:St}),et(At.prototype,"width",{configurable:!1,enumerable:!0,set:Vt,get:Dt}),et(At.prototype,"style",{configurable:!1,enumerable:!0,set:jt,get:Nt}),et(At.prototype,"autoRender",{configurable:!1,enumerable:!0,set:Et,get:Rt}),et(At.prototype,"line",{configurable:!1,enumerable:!0,get:Pt}),et(At.prototype,"xPos",{configurable:!1,enumerable:!0,get:Ct}),et(At.prototype,"yPos",{configurable:!1,enumerable:!0,get:Tt}),tt(At.prototype,"render",kt);var Mt=At;export default Mt;
//# sourceMappingURL=path.js.map