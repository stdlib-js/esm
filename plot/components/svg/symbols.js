// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../vendor/events.js";import t from"./../../../vendor/debug.js";import i from"./../../../utils/define-property.js";import r from"./../../../utils/define-read-only-property.js";import n from"./../../../utils/keys.js";import s from"./../../../utils/copy.js";import o from"./../../../utils/merge.js";import a from"./../../../assert/is-plain-object.js";import l from"./../../../assert/is-nan.js";import u from"./../../../utils/index-of.js";import c from"./../../../assert/is-array-like.js";import m from"./../../../assert/is-function.js";import f from"./../../../assert/is-nonnegative-integer.js";import y from"./../../../assert/is-number.js";import h from"./../../../assert/is-string.js";import p from"./../../../assert/is-boolean.js";import v from"./../../../vendor/virtual-dom/h.js";import{scaleLinear as d}from"./../../../vendor/d3-scale.js";var b=t,g=l.isPrimitive,_=b("symbols:accessor:is-defined");function w(e){var t=!g(e);return _("Datum: %s. Defined: %s.",JSON.stringify(e),t),t}var x=!1,S="#000",D=null,V="",N=.9,j=6,P="closed-circle",R=[],E=null,z=[],O=null,C={autoRender:x,color:S,isDefined:D,label:V,opacity:N,size:j,symbol:P,x:R,xScale:E,y:z,yScale:O},T=["closed-circle","open-circle"],J=t,k=u,A=T,G=J("symbols:set:symbol");function M(e){if(-1===k(A,e))throw new TypeError("invalid value. `symbol` must be a supported symbol. Symbols: ["+A.join(",")+"]. Value: `"+e+"`.");G("Current value: %d.",this._symbol),this._symbol=e,G("New Value: %d.",this._symbol),this.emit("change")}function q(){return this._symbol}var B=t,F=c,H=B("symbols:set:x");function I(e){if(!F(e))throw new TypeError("invalid value. `x` must be array-like. Value: `"+e+".`");H("Current value: %s.",JSON.stringify(this._xData)),this._xData=e,H("New Value: %s.",JSON.stringify(this._xData)),this.emit("change")}function K(){return this._xData}var L=t,Q=c,U=L("symbols:set:y");function W(e){if(!Q(e))throw new TypeError("invalid value. `y` must be array-like. Value: `"+e+".`");U("Current value: %s.",JSON.stringify(this._yData)),this._yData=e,U("New Value: %s.",JSON.stringify(this._yData)),this.emit("change")}function X(){return this._yData}var Y=t,Z=m,$=Y("symbols:set:xscale");function ee(e){if(!Z(e))throw new TypeError("invalid value. `xScale` must be a function. Value: `"+e+".`");$("Current value: %s.",this._xScale),this._xScale=e,$("New Value: %s.",this._xScale),this.emit("change")}function te(){return this._xScale}var ie=t,re=m,ne=ie("symbols:set:yscale");function se(e){if(!re(e))throw new TypeError("invalid value. `yScale` must be a function. Value: `"+e+".`");ne("Current value: %s.",this._yScale),this._yScale=e,ne("New Value: %s.",this._yScale),this.emit("change")}function oe(){return this._yScale}var ae=t,le=m,ue=ae("symbols:set:is-defined");function ce(e){if(!le(e))throw new TypeError("invalid value. `isDefined` must be a function. Value: `"+e+".`");ue("Current value: %s.",this._isDefined),this._isDefined=e,ue("New Value: %s.",this._isDefined),this.emit("change")}function me(){return this._isDefined}var fe=t,ye=f.isPrimitive,he=m,pe=fe("symbols:set:size");function ve(e){if(!ye(e)&&!he(e))throw new TypeError("invalid value. `size` must be a nonnegative integer or a function. Value: `"+e+".`");pe("Current value: %d.",this._size),this._size=e,pe("New Value: %d.",this._size),this.emit("change")}var de=y.isPrimitive;function be(){var e=this;return de(this._size)?function(){return e._size}:this._size}var ge=t,_e=y.isPrimitive,we=m,xe=ge("symbols:set:opacity");function Se(e){var t=_e(e);if(!t&&!we(e))throw new TypeError("invalid value. `opacity` must be a number or a function. Value: `"+e+".`");if(t&&(e<0||e>1))throw new RangeError("invalid value. `opacity` must be a number on the interval `[0,1]`. Value: `"+e+"`.");xe("Current value: %d.",this._opacity),this._opacity=e,xe("New Value: %d.",this._opacity),this.emit("change")}var De=y.isPrimitive;function Ve(){var e=this;return De(this._opacity)?function(){return e._opacity}:this._opacity}var Ne=t,je=h.isPrimitive,Pe=m,Re=Ne("symbols:set:color");function Ee(e){if(!je(e)&&!Pe(e))throw new TypeError("invalid value. `color` must be a string primitive or a function. Value: `"+e+".`");Re("Current value: %d.",this._color),this._color=e,Re("New Value: %d.",this._color),this.emit("change")}var ze=h.isPrimitive;function Oe(){var e=this;return ze(this._color)?function(){return e._color}:this._color}var Ce=t,Te=h.isPrimitive,Je=m,ke=Ce("symbols:set:label");function Ae(e){if(!Te(e)&&!Je(e))throw new TypeError("invalid value. `label` must be a string primitive or a function. Value: `"+e+".`");ke("Current value: %d.",this._label),this._label=e,ke("New Value: %d.",this._label),this.emit("change")}var Ge=h.isPrimitive;function Me(){var e=this;return Ge(this._label)?function(){return e._label}:this._label}var qe=t,Be=p.isPrimitive,Fe=qe("symbols:set:auto-render");function He(e){if(!Be(e))throw new TypeError("invalid value. `autoRender` must be a boolean primitive. Value: `"+e+".`");Fe("Current value: %d.",this._autoRender),this._autoRender=e,Fe("New Value: %d.",this._autoRender),this.emit("change")}function Ie(){return this._autoRender}var Ke=t,Le=Ke("symbols:xpos");function Qe(){var e=this.xScale;return function(t){var i=e(t);return Le("Value: %d => Pixel: %d.",t,i),i}}var Ue=t,We=Ue("symbols:ypos");function Xe(){var e=this.yScale;return function(t){var i=e(t);return We("Value: %d => Pixel: %d.",t,i),i}}var Ye=t,Ze=v,$e=Ye("symbols:render:closed-circles"),et="circle";function tt(e){var t,i,r,n,s,o,a,l,u,c,m,f,y,h;for($e("Rendering closed circles..."),t=e.isDefined,i=e.opacity,r=e.label,n=e.color,o=e.size,a=e.xPos,l=e.yPos,f=e.x,y=e.y,u=new Array(f.length),h=0;h<f.length;h++)c=f[h],m=y[h],t(c)&&t(m)?($e("Rendering datum %d...",h),s={namespace:"http://www.w3.org/2000/svg",property:"closed-circle",className:"closed-circle",attributes:{cx:a(c),cy:l(m),r:o(c,m,h)/2,stroke:"none",opacity:i(c,m,h),fill:n(c,m,h),"data-label":r(c,m,h)}},$e("Generating a virtual DOM tree (%s) with properties: %s.",et,JSON.stringify(s)),u[h]=Ze(et,s,[])):$e("Datum %d is undefined. [%s,%s].",h,c,m);return u}var it=t,rt=v,nt=it("symbols:render:open-circles"),st="circle";function ot(e){var t,i,r,n,s,o,a,l,u,c,m,f,y,h;for(nt("Rendering open circles..."),t=e.isDefined,i=e.opacity,r=e.label,n=e.color,o=e.size,a=e.xPos,l=e.yPos,f=e.x,y=e.y,u=new Array(f.length),h=0;h<f.length;h++)c=f[h],m=y[h],t(c)&&t(m)?(nt("Rendering datum %d...",h),s={namespace:"http://www.w3.org/2000/svg",property:"open-circle",className:"open-circle",attributes:{cx:a(c),cy:l(m),r:o(c,m,h)/2,fill:"none",opacity:i(c,m,h),stroke:n(c,m,h),"stroke-width":1,"data-label":r(c,m,h)}},nt("Generating a virtual DOM tree (%s) with properties: %s.",st,JSON.stringify(s)),u[h]=rt(st,s,[])):nt("Datum %d is undefined. [%s,%s].",h,c,m);return u}var at=t,lt=v,ut=tt,ct=ot,mt=at("symbols:render"),ft="g",yt={"closed-circle":ut,"open-circle":ct};function ht(){var e,t,i;return mt("Rendering..."),t={namespace:"http://www.w3.org/2000/svg",property:"symbols",className:"symbols"},mt("Symbol: %s.",this.symbol),e=(0,yt[this.symbol])(this),mt("Generating a virtual DOM tree (%s) with properties: %s.",ft,JSON.stringify(t)),i=lt(ft,t,e),this.emit("_render",i),i}var pt=e.EventEmitter,vt=t,dt=i,bt=r,gt=n,_t=s,wt=o,xt=a,St=w,Dt=C,Vt=M,Nt=q,jt=I,Pt=K,Rt=W,Et=X,zt=ee,Ot=te,Ct=se,Tt=oe,Jt=ce,kt=me,At=ve,Gt=be,Mt=Se,qt=Ve,Bt=Ee,Ft=Oe,Ht=Ae,It=Me,Kt=He,Lt=Ie,Qt=Qe,Ut=Xe,Wt=ht,Xt=vt("symbols:main"),Yt=["_autoRender","_color","_isDefined","_label","_opacity","_size","_symbol","_xData","_xScale","_yData","_yScale"];function Zt(e){var t,i,r,n,s;if(!(this instanceof Zt))return arguments.length?new Zt(e):new Zt;if(t=this,(r=_t(Dt)).isDefined=St,r.xScale=d(),r.yScale=d(),arguments.length){if(!xt(e))throw new TypeError("invalid argument. `options` argument must be an object. Value: `"+e+"`.");r=wt(r,e)}for(Xt("Creating an instance with the following configuration: %s.",JSON.stringify(r)),pt.call(this),s=0;s<Yt.length;s++)dt(this,Yt[s],{configurable:!1,enumerable:!1,writable:!0,value:null});for(i=gt(r),s=0;s<i.length;s++)this[n=i[s]]=r[n];return this.on("change",o),this.on("_render",a),this;function o(){Xt("Received a change event."),t._autoRender&&t.render()}function a(){var e,i;for(Xt("Received a render event. Re-emitting..."),(e=new Array(arguments.length+1))[0]="render",i=0;i<arguments.length;i++)e[i+1]=arguments[i];t.emit.apply(t,e)}}Zt.prototype=Object.create(pt.prototype),Zt.prototype.constructor=Zt,dt(Zt.prototype,"symbol",{configurable:!1,enumerable:!0,set:Vt,get:Nt}),dt(Zt.prototype,"x",{configurable:!1,enumerable:!0,set:jt,get:Pt}),dt(Zt.prototype,"y",{configurable:!1,enumerable:!0,set:Rt,get:Et}),dt(Zt.prototype,"xScale",{configurable:!1,enumerable:!0,set:zt,get:Ot}),dt(Zt.prototype,"yScale",{configurable:!1,enumerable:!0,set:Ct,get:Tt}),dt(Zt.prototype,"isDefined",{configurable:!1,enumerable:!0,set:Jt,get:kt}),dt(Zt.prototype,"size",{configurable:!1,enumerable:!0,set:At,get:Gt}),dt(Zt.prototype,"opacity",{configurable:!1,enumerable:!0,set:Mt,get:qt}),dt(Zt.prototype,"color",{configurable:!1,enumerable:!0,set:Bt,get:Ft}),dt(Zt.prototype,"label",{configurable:!1,enumerable:!0,set:Ht,get:It}),dt(Zt.prototype,"autoRender",{configurable:!1,enumerable:!0,set:Kt,get:Lt}),dt(Zt.prototype,"xPos",{configurable:!1,enumerable:!0,get:Qt}),dt(Zt.prototype,"yPos",{configurable:!1,enumerable:!0,get:Ut}),bt(Zt.prototype,"render",Wt);var $t=Zt;export default $t;
//# sourceMappingURL=symbols.js.map