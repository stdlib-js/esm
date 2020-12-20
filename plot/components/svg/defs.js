// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../vendor/events.js";import r from"./../../../vendor/debug.js";import n from"./../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../utils/inherit.js";import i from"./../../../assert/instance-of.js";import o from"./../../../vendor/virtual-dom/h.js";var s=r,a=o,d=s("defs:render"),m="defs";function f(){var e,r;return d("Rendering..."),r={namespace:"http://www.w3.org/2000/svg"},d("Generating a virtual DOM tree (%s) with properties: %s.",m,JSON.stringify(r)),e=a(m,r,[]),this.emit("_render",e),e}var v=e.EventEmitter,p=r,h=n,u=t,c=i,g=f,l=p("defs:main");function w(){var e;return c(this,w)?(e=this,l("Creating an instance..."),v.call(this),this.on("change",(function(){l("Received a change event."),e.render()})),this.on("_render",(function(){var r,n;for(l("Received a render event. Re-emitting..."),(r=new Array(arguments.length+1))[0]="render",n=0;n<arguments.length;n++)r[n+1]=arguments[n];e.emit.apply(e,r)})),this):new w}u(w,v),h(w.prototype,"render",g);var j=w;export default j;
//# sourceMappingURL=defs.js.map