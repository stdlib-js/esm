// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../vendor/events.js";import t from"./../../vendor/debug.js";import i from"./../../utils/keys.js";import r from"./../../utils/inherit.js";import n from"./../../utils/copy.js";import a from"./../../utils/merge.js";import s from"./../../utils/define-property.js";import o from"./../../utils/define-read-only-property.js";import u from"./../../assert/is-plain-object.js";import l from"./../../random/base/minstd.js";import h from"./../../assert/is-node-repl.js";import m from"./../../assert/is-boolean.js";import p from"./../../assert/is-string.js";import g from"./../../assert/contains.js";import d from"./../../assert/is-positive-number.js";import v from"./../../assert/is-empty-array.js";import c from"./../../assert/is-string-array.js";import f from"./../../assert/is-number.js";import b from"./../../assert/is-number-array.js";import _ from"./../../utils/index-of.js";import y from"./../../assert/is-nonnegative-integer.js";import w from"./../../assert/is-nonnegative-integer-array.js";import x from"./../../assert/is-null.js";import{format as T}from"./../../vendor/d3-format.js";import{timeFormat as N}from"./../../vendor/d3-time-format.js";var V=h;function k(){var e,t;return e=V(),(t={}).autoRender=!1,t.autoView=!1,t.description="",t.engine="svg",t.height=400,t.labels=[],t.lineOpacity=.9,t.lineStyle="-",t.lineWidth=2,t.paddingBottom=80,t.paddingLeft=90,t.paddingRight=20,t.paddingTop=80,t.renderFormat="vdom",t.title="",t.viewer=e?"window":"none",t.width=400,t.xAxisOrient="bottom",t.xLabel="x",t.xMax=null,t.xMin=null,t.xNumTicks=5,t.xTickFormat=null,t.yAxisOrient="left",t.yLabel="y",t.yMax=null,t.yMin=null,t.yNumTicks=5,t.yTickFormat=null,t}function O(e){console.log(JSON.stringify(e))}var F=O;function E(e,t,i){if("none"!==t){if("stdout"===t)return F(i);if("browser"===t)throw new Error("invalid argument. Must provide a supported viewer. Value: `"+t+"`.");if("terminal"!==t)throw new Error("invalid argument. Must provide a supported viewer. Value: `"+t+"`.")}}var j=t,L=E,R=j("plot:base:view");function C(e){var t=this.viewer;arguments.length&&(this.viewer=e),R("Viewer: %s.",this.viewer),R("Generating view..."),L(this,this.viewer,this.render()),arguments.length&&(this.viewer=t)}var P=t,S=m.isPrimitive,A=P("plot:base:set:auto-render");function M(e){if(!S(e))throw new TypeError("invalid value. `autoRender` must be a boolean primitive. Value: `"+e+".`");e!==this._autoRender&&(A("Current value: %s.",this._autoRender),this._autoRender=e,A("New Value: %s.",this._autoRender),this.emit("change"))}function B(){return this._autoRender}var J=t,W=m.isPrimitive,D=J("plot:base:set:auto-view");function z(e){if(!W(e))throw new TypeError("invalid value. `autoView` must be a boolean primitive. Value: `"+e+".`");e!==this._autoView&&(D("Current value: %s.",this._autoView),this._autoView=e,D("New Value: %s.",this._autoView),this.emit("change"))}function U(){return this._autoView}var G=t,H=p.isPrimitive,$=G("plot:base:set:description");function I(e){if(!H(e))throw new TypeError("invalid value. `description` must be a string. Value: `"+e+".`");e!==this._description&&($("Current value: %s.",this._description),this._description=e,$("New value: %s.",this._description),this.emit("change"))}function q(){return this._description}var K=["svg"],Q=t,X=g,Y=K,Z=Q("plot:base:set:engine");function ee(e){if(!X(Y,e))throw new TypeError("invalid value. `engine` must be one of `["+Y.join(", ")+"]`. Value: `"+e+".`");e!==this._engine&&(Z("Current value: %s.",this._engine),this._engine=e,Z("New value: %s.",this._engine),this.emit("change"))}function te(){return this._engine}function ie(){return this._height-this._paddingTop-this._paddingBottom}function re(){return this._width-this._paddingLeft-this._paddingRight}var ne=t,ae=d.isPrimitive,se=ne("plot:base:set:height");function oe(e){if(!ae(e))throw new TypeError("invalid value. `height` must be a positive number. Value: `"+e+".`");e!==this._height&&(se("Current value: %d.",this._height),this._height=e,se("New Value: %d.",this._height),this.emit("change"))}function ue(){return this._height}var le=t,he=v,me=c.primitives,pe=le("plot:base:set:labels");function ge(e){if(!he(e)&&!me(e))throw new TypeError("invalid value. `labels` must be either an array of strings or an empty array. Value: `"+e+".`");pe("Current value: %s.",JSON.stringify(this._labels)),this._labels=e.slice(),pe("New Value: %s.",JSON.stringify(this._labels)),this.emit("change")}function de(){return this._labels.slice()}var ve=t,ce=f.isPrimitive,fe=b.primitives,be=ve("plot:base:set:line-opacity");function _e(e){var t,i=ce(e);if(!i&&!fe(e))throw new TypeError("invalid value. `lineOpacity` must be a number or number array. Value: `"+e+".`");for(e=i?[e]:e.slice(),t=0;t<e.length;t++)if(e[t]<0||e[t]>1)throw new RangeError("invalid value. A `lineOpacity` must be a number on the interval `[0,1]`. Value: `"+e[t]+"`.");be("Current value: %s.",JSON.stringify(this._lineOpacity)),this._lineOpacity=e,be("New Value: %s.",JSON.stringify(this._lineOpacity)),this.emit("change")}function ye(){return this._lineOpacity.slice()}var we=["-","--",":","-.","none"],xe=t,Te=p.isPrimitive,Ne=c.primitives,Ve=_,ke=we,Oe=xe("plot:base:set:line-style");function Fe(e){var t,i=Te(e);if(!i&&!Ne(e))throw new TypeError("invalid value. `lineStyle` must be a string or a string array. Value: `"+e+".`");for(e=i?[e]:e.slice(),t=0;t<e.length;t++)if(-1===Ve(ke,e[t]))throw new Error("invalid value. Unsupported/unrecognized line style. Must be one of `["+ke.join(",")+"]`. Value: `"+e[t]+"`.");Oe("Current value: %s.",JSON.stringify(this._lineStyle)),this._lineStyle=e,Oe("New Value: %s.",JSON.stringify(this._lineStyle)),this.emit("change")}function Ee(){return this._lineStyle.slice()}var je=t,Le=y.isPrimitive,Re=w.primitives,Ce=je("plot:base:set:line-width");function Pe(e){var t=Le(e);if(!t&&!Re(e))throw new TypeError("invalid value. `lineWidth` must be a nonnegative integer or nonnegative integer array. Value: `"+e+".`");e=t?[e]:e.slice(),Ce("Current value: %s.",JSON.stringify(this._lineWidth)),this._lineWidth=e,Ce("New Value: %s.",JSON.stringify(this._lineWidth)),this.emit("change")}function Se(){return this._lineWidth.slice()}var Ae=t,Me=y.isPrimitive,Be=Ae("plot:base:set:padding-bottom");function Je(e){if(!Me(e))throw new TypeError("invalid value. `paddingBottom` must be a nonnegative integer. Value: `"+e+".`");e!==this._paddingBottom&&(Be("Current value: %d.",this._paddingBottom),this._paddingBottom=e,Be("New value: %d.",this._paddingBottom),this.emit("change"))}function We(){return this._paddingBottom}var De=t,ze=y.isPrimitive,Ue=De("plot:base:set:padding-left");function Ge(e){if(!ze(e))throw new TypeError("invalid value. `paddingLeft` must be a nonnegative integer. Value: `"+e+".`");e!==this._paddingLeft&&(Ue("Current value: %d.",this._paddingLeft),this._paddingLeft=e,Ue("New value: %d.",this._paddingLeft),this.emit("change"))}function He(){return this._paddingLeft}var $e=t,Ie=y.isPrimitive,qe=$e("plot:base:set:padding-right");function Ke(e){if(!Ie(e))throw new TypeError("invalid value. `paddingRight` must be a nonnegative integer. Value: `"+e+".`");e!==this._paddingRight&&(qe("Current value: %d.",this._paddingRight),this._paddingRight=e,qe("New value: %d.",this._paddingRight),this.emit("change"))}function Qe(){return this._paddingRight}var Xe=t,Ye=y.isPrimitive,Ze=Xe("plot:base:set:padding-top");function et(e){if(!Ye(e))throw new TypeError("invalid value. `paddingTop` must be a nonnegative integer. Value: `"+e+".`");e!==this._paddingTop&&(Ze("Current value: %d.",this._paddingTop),this._paddingTop=e,Ze("New value: %d.",this._paddingTop),this.emit("change"))}function tt(){return this._paddingTop}var it=t,rt=it("plot:base:render");function nt(e){var t,i,r;return i=this.renderFormat,arguments.length?(this.renderFormat=e,r=e):r=i,rt("Render format: %s.",this.renderFormat),rt("Rendering..."),t=this._render(r),this.emit("render",t),arguments.length&&(this.renderFormat=i),t}function at(){throw new Error("method not implemented.")}var st=["vdom","html"],ot=t,ut=_,lt=st,ht=ot("plot:base:set:render-format");function mt(e){if(-1===ut(lt,e))throw new TypeError("invalid value. Unrecognized/unsupported `format`. Must be one of `["+lt.join(", ")+"]`. Value: `"+e+".`");e!==this._renderFormat&&(ht("Current value: %s.",this._renderFormat),this._renderFormat=e,ht("New value: %s.",this._renderFormat),this.emit("change"))}function pt(){return this._renderFormat}var gt=t,dt=p.isPrimitive,vt=gt("plot:base:set:title");function ct(e){if(!dt(e))throw new TypeError("invalid value. `title` must be a string. Value: `"+e+".`");e!==this._title&&(vt("Current value: %s.",this._title),this._title=e,vt("New value: %s.",this._title),this.emit("change"))}function ft(){return this._title}var bt=["none","browser","terminal","stdout","window"],_t=t,yt=_,wt=bt,xt=_t("plot:base:set:viewer");function Tt(e){if(-1===yt(wt,e))throw new TypeError("invalid value. Unrecognized/unsupported `viewer`. Value: `"+e+".`");e!==this._viewer&&(xt("Current value: %s.",this._viewer),this._viewer=e,xt("New value: %s.",this._viewer),this.emit("change"))}function Nt(){return this._viewer}var Vt=t,kt=d.isPrimitive,Ot=Vt("plot:base:set:width");function Ft(e){if(!kt(e))throw new TypeError("invalid value. `width` must be a positive number. Value: `"+e+".`");e!==this._width&&(Ot("Current value: %d.",this._width),this._width=e,Ot("New value: %d.",this._width),this.emit("change"))}function Et(){return this._width}var jt=["bottom","top"],Lt=t,Rt=_,Ct=jt,Pt=Lt("plot:base:set:x-axis-orient");function St(e){if(-1===Rt(Ct,e))throw new TypeError("invalid value. `xAxisOrient` must be one of `["+Ct.join(", ")+"]`. Value: `"+e+".`");e!==this._xAxisOrient&&(Pt("Current value: %s.",this._xAxisOrient),this._xAxisOrient=e,Pt("New value: %s.",this._xAxisOrient),this.emit("change"))}function At(){return this._xAxisOrient}function Mt(){return[this.xMin,this.xMax]}var Bt=t,Jt=p.isPrimitive,Wt=Bt("plot:base:set:x-label");function Dt(e){if(!Jt(e))throw new TypeError("invalid value. `xLabel` must be a string. Value: `"+e+".`");e!==this._xLabel&&(Wt("Current value: %s.",this._xLabel),this._xLabel=e,Wt("New value: %s.",this._xLabel),this.emit("change"))}function zt(){return this._xLabel}var Ut=t,Gt=x,Ht=y.isPrimitive,$t=Ut("plot:base:set:x-num-ticks");function It(e){if(!Gt(e)&&!Ht(e))throw new TypeError("invalid value. `xNumTicks` must be a nonnegative integer or null. Value: `"+e+".`");e!==this._xNumTicks&&($t("Current value: %d.",this._xNumTicks),this._xNumTicks=e,$t("New value: %d.",this._xNumTicks),this.emit("change"))}function qt(){return this._xNumTicks}var Kt=t,Qt=Kt("plot:base:x-pos");function Xt(){var e=this.xScale;return function(t){var i=e(t);return Qt("Value: %d => Pixel: %d.",t,i),i}}function Yt(){return[0,this.graphWidth]}var Zt=t,ei=x,ti=p.isPrimitive,ii=Zt("plot:base:set:x-tick-format");function ri(e){if(!ei(e)&&!ti(e))throw new TypeError("invalid value. `xTickFormat` must be a string or null. Value: `"+e+".`");e!==this._xTickFormat&&(ii("Current value: %s.",this._xTickFormat),this._xTickFormat=e,ii("New value: %s.",this._xTickFormat),this.emit("change"))}var ni=x;function ai(){return ni(this._xTickFormat)?this._xTickFormat:"time"===this._xScale?N(this._xTickFormat):T(this._xTickFormat)}var si=["left","right"],oi=t,ui=_,li=si,hi=oi("plot:base:set:y-axis-orient");function mi(e){if(-1===ui(li,e))throw new TypeError("invalid value. `yAxisOrient` must be one of `["+li.join(", ")+"]`. Value: `"+e+".`");e!==this._yAxisOrient&&(hi("Current value: %s.",this._yAxisOrient),this._yAxisOrient=e,hi("New value: %s.",this._yAxisOrient),this.emit("change"))}function pi(){return this._yAxisOrient}function gi(){return[this.yMin,this.yMax]}var di=t,vi=p.isPrimitive,ci=di("plot:base:set:y-label");function fi(e){if(!vi(e))throw new TypeError("invalid value. `yLabel` must be a string. Value: `"+e+".`");e!==this._yLabel&&(ci("Current value: %s.",this._yLabel),this._yLabel=e,ci("New value: %s.",this._yLabel),this.emit("change"))}function bi(){return this._yLabel}var _i=t,yi=x,wi=y.isPrimitive,xi=_i("plot:base:set:y-num-ticks");function Ti(e){if(!yi(e)&&!wi(e))throw new TypeError("invalid value. `yNumTicks` must be a nonnegative integer or null. Value: `"+e+".`");e!==this._yNumTicks&&(xi("Current value: %d.",this._yNumTicks),this._yNumTicks=e,xi("New value: %d.",this._yNumTicks),this.emit("change"))}function Ni(){return this._yNumTicks}var Vi=t,ki=Vi("plot:base:y-pos");function Oi(){var e=this.yScale;return function(t){var i=e(t);return ki("Value: %d => Pixel: %d.",t,i),i}}function Fi(){return[this.graphHeight,0]}var Ei=t,ji=x,Li=p.isPrimitive,Ri=Ei("plot:base:set:y-tick-format");function Ci(e){if(!ji(e)&&!Li(e))throw new TypeError("invalid value. `yTickFormat` must be a string or null. Value: `"+e+".`");e!==this._yTickFormat&&(Ri("Current value: %s.",this._yTickFormat),this._yTickFormat=e,Ri("New value: %s.",this._yTickFormat),this.emit("change"))}var Pi=x;function Si(){return Pi(this._yTickFormat)?this._yTickFormat:T(this._yTickFormat)}var Ai=e.EventEmitter,Mi=t,Bi=i,Ji=r,Wi=n,Di=a.factory,zi=s,Ui=o,Gi=u,Hi=l,$i=k,Ii=C,qi=M,Ki=B,Qi=z,Xi=U,Yi=I,Zi=q,er=ee,tr=te,ir=ie,rr=re,nr=oe,ar=ue,sr=ge,or=de,ur=_e,lr=ye,hr=Fe,mr=Ee,pr=Pe,gr=Se,dr=Je,vr=We,cr=Ge,fr=He,br=Ke,_r=Qe,yr=et,wr=tt,xr=nt,Tr=at,Nr=mt,Vr=pt,kr=ct,Or=ft,Fr=Tt,Er=Nt,jr=Ft,Lr=Et,Rr=St,Cr=At,Pr=Mt,Sr=Dt,Ar=zt,Mr=It,Br=qt,Jr=Xt,Wr=Yt,Dr=ri,zr=ai,Ur=mi,Gr=pi,Hr=gi,$r=fi,Ir=bi,qr=Ti,Kr=Ni,Qr=Oi,Xr=Fi,Yr=Ci,Zr=Si,en=Mi("plot:base:main"),tn=["_autoRender","_autoView","_description","_engine","_height","_isDefined","_labels","_lineOpacity","_lineStyle","_lineWidth","_paddingBottom","_paddingLeft","_paddingRight","_paddingTop","_renderFormat","_title","_viewer","_width","_xAxisOrient","_xData","_xLabel","_xMax","_xMin","_xNumTicks","_xScale","_xTickFormat","_yAxisOrient","_yData","_yLabel","_yMax","_yMin","_yNumTicks","_yScale","_yTickFormat"],rn=Di({extend:!1});function nn(){var e,t,i,r,n,a,s;if(t=arguments.length,!(this instanceof nn))return 0===t?new nn:1===t?new nn(arguments[0]):2===t?new nn(arguments[0],arguments[1]):new nn(arguments[0],arguments[1],arguments[2]);if(r=this,n=$i(),0===t)e={};else if(1===t){if(!Gi(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an `object`. Value: `"+e+"`.")}else if(2===t)e={};else if(t>2){if(!Gi(arguments[2]))throw new TypeError("invalid argument. Options argument must be an `object`. Value: `"+arguments[2]+"`.");e=Wi(arguments[2])}for(n=rn(n,e),en("Creating an instance with the following configuration: %s.",JSON.stringify(n)),Ai.call(this),s=0;s<tn.length;s++)zi(this,tn[s],{configurable:!1,enumerable:!1,writable:!0,value:null});for(zi(this,"_clipPathId",{configurable:!1,enumerable:!1,writable:!1,value:Hi().toString()}),zi(this,"$",{configurable:!1,enumerable:!1,writable:!1,value:{}}),zi(this.$,"svg",{configurable:!1,enumerable:!1,writable:!1,value:{}}),i=Bi(n),s=0;s<i.length;s++)this[a=i[s]]=n[a];return this.on("change",o),this.on("render",u),this;function o(){en("Received a change event."),r._autoRender&&r.render()}function u(e){en("Received a render event."),r._autoView&&(en("Viewer: %s.",r._viewer),en("Generating view..."),Ii(r,r._viewer,e))}}Ji(nn,Ai),zi(nn.prototype,"autoRender",{configurable:!1,enumerable:!0,set:qi,get:Ki}),zi(nn.prototype,"autoView",{configurable:!1,enumerable:!0,set:Qi,get:Xi}),zi(nn.prototype,"description",{configurable:!1,enumerable:!0,set:Yi,get:Zi}),zi(nn.prototype,"engine",{configurable:!1,enumerable:!0,set:er,get:tr}),zi(nn.prototype,"graphHeight",{configurable:!1,enumerable:!0,get:ir}),zi(nn.prototype,"graphWidth",{configurable:!1,enumerable:!0,get:rr}),zi(nn.prototype,"height",{configurable:!1,enumerable:!0,set:nr,get:ar}),zi(nn.prototype,"labels",{configurable:!1,enumerable:!0,set:sr,get:or}),zi(nn.prototype,"lineOpacity",{configurable:!1,enumerable:!0,set:ur,get:lr}),zi(nn.prototype,"lineStyle",{configurable:!1,enumerable:!0,set:hr,get:mr}),zi(nn.prototype,"lineWidth",{configurable:!1,enumerable:!0,set:pr,get:gr}),zi(nn.prototype,"paddingBottom",{configurable:!1,enumerable:!0,set:dr,get:vr}),zi(nn.prototype,"paddingLeft",{configurable:!1,enumerable:!0,set:cr,get:fr}),zi(nn.prototype,"paddingRight",{configurable:!1,enumerable:!0,set:br,get:_r}),zi(nn.prototype,"paddingTop",{configurable:!1,enumerable:!0,set:yr,get:wr}),Ui(nn.prototype,"render",xr),Ui(nn.prototype,"_render",Tr),zi(nn.prototype,"renderFormat",{configurable:!1,enumerable:!0,set:Nr,get:Vr}),zi(nn.prototype,"title",{configurable:!1,enumerable:!0,set:kr,get:Or}),zi(nn.prototype,"viewer",{configurable:!1,enumerable:!0,set:Fr,get:Er}),zi(nn.prototype,"width",{configurable:!1,enumerable:!0,set:jr,get:Lr}),zi(nn.prototype,"xAxisOrient",{configurable:!1,enumerable:!0,set:Rr,get:Cr}),zi(nn.prototype,"xDomain",{configurable:!1,enumerable:!0,get:Pr}),zi(nn.prototype,"xLabel",{configurable:!1,enumerable:!0,set:Sr,get:Ar}),zi(nn.prototype,"xNumTicks",{configurable:!1,enumerable:!0,set:Mr,get:Br}),zi(nn.prototype,"xPos",{configurable:!1,enumerable:!0,get:Jr}),zi(nn.prototype,"xRange",{configurable:!1,enumerable:!0,get:Wr}),zi(nn.prototype,"xTickFormat",{configurable:!1,enumerable:!0,set:Dr,get:zr}),zi(nn.prototype,"yAxisOrient",{configurable:!1,enumerable:!0,set:Ur,get:Gr}),zi(nn.prototype,"yDomain",{configurable:!1,enumerable:!0,get:Hr}),zi(nn.prototype,"yLabel",{configurable:!1,enumerable:!0,set:$r,get:Ir}),zi(nn.prototype,"yNumTicks",{configurable:!1,enumerable:!0,set:qr,get:Kr}),zi(nn.prototype,"yPos",{configurable:!1,enumerable:!0,get:Qr}),zi(nn.prototype,"yRange",{configurable:!1,enumerable:!0,get:Xr}),zi(nn.prototype,"yTickFormat",{configurable:!1,enumerable:!0,set:Yr,get:Zr}),Ui(nn.prototype,"view",Ii);var an=nn;export default an;
//# sourceMappingURL=ctor.js.map