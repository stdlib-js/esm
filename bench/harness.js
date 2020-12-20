// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../streams/node/transform.js";import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-function.js";import i from"./../vendor/process.js";import n from"./../utils/define-nonenumerable-read-only-accessor.js";import o from"./../assert/is-string.js";import a from"./../assert/is-boolean.js";import s from"./../assert/is-plain-object.js";import u from"./../assert/has-own-property.js";import l from"./../utils/copy.js";import c from"./../vendor/events.js";import m from"./../utils/inherit.js";import p from"./../utils/define-property.js";import f from"./../time/tic.js";import h from"./../time/toc.js";import d from"./../string/trim.js";import v from"./../string/replace.js";import b from"./../regexp/eol.js";import g from"./../assert/is-null.js";import w from"./../assert/is-positive-integer.js";import _ from"./../assert/is-browser.js";import k from"./../assert/is-node-writable-stream-like.js";import y from"./../utils/pick.js";import j from"./../utils/omit.js";import E from"./../utils/noop.js";import x from"./../string/from-code-point.js";var T=setTimeout,O=clearTimeout,S=T,P=O;function V(){var t,e;if(this._skip)return this.comment("SKIP "+this.name),this.end();if(!this._benchmark)return this.comment("TODO "+this.name),this.end();t=this,this._running=!0,e=S((function(){t.fail("benchmark timed out after "+t.timeout+"ms")}),this.timeout),this.once("end",(function(){P(e)})),this.emit("prerun"),this._benchmark(this),this.emit("run")}function q(){this._exited||this._ended||(this._exited=!0,this.fail("benchmark exited without ending"),this._running||this.end())}function D(){return this._ended}var F=u;function M(t,e){var r;r={id:this._count,ok:t,skip:e.skip,todo:e.todo,name:e.message||"(unnamed assert)",operator:e.operator},F(e,"actual")&&(r.actual=e.actual),F(e,"expected")&&(r.expected=e.expected),t||(r.error=e.error||new Error(this.name)),this._count+=1,this.emit("result",r)}var A=d,I=v,C=b,K=/^#\s*/;function N(t){var e,r;for(e=(t=A(t)).split(C),r=0;r<e.length;r++)t=A(e[r]),t=I(t,K,""),this.emit("result",t)}function G(t,e){this._assert(!0,{message:e,operator:"skip",skip:!0})}function H(t,e){this._assert(!!t,{message:e,operator:"todo",todo:!0})}function R(t){this._assert(!1,{message:t,operator:"fail"})}function W(t){this._assert(!0,{message:t,operator:"pass"})}function z(t,e){this._assert(!!t,{message:e||"should be truthy",operator:"ok",expected:!0,actual:t})}function B(t,e){this._assert(!t,{message:e||"should be falsy",operator:"notOk",expected:!1,actual:t})}function J(t,e,r){this._assert(t===e,{message:r||"should be equal",operator:"equal",expected:e,actual:t})}function L(t,e,r){this._assert(t!==e,{message:r||"should not be equal",operator:"notEqual",expected:e,actual:t})}function Q(t,e,r){this.comment("actual: "+t+". expected: "+e+". msg: "+r+".")}function U(t,e,r){this.comment("actual: "+t+". expected: "+e+". msg: "+r+".")}function X(t){setTimeout(t,0)}var Y=X;function Z(){var t=this;this._ended?this.fail(".end() called more than once"):Y((function(){t.emit("end")})),this._ended=!0,this._running=!1}var $=c.EventEmitter,tt=m,et=p,rt=e,it=f,nt=h,ot=V,at=q,st=D,ut=M,lt=N,ct=G,mt=H,pt=R,ft=W,ht=z,dt=B,vt=J,bt=L,gt=Q,wt=U,_t=Z;function kt(t,e,r){var i,n,o,a;return this instanceof kt?(o=this,i=!1,n=!1,$.call(this),rt(this,"_benchmark",r),rt(this,"_skip",e.skip),et(this,"_ended",{configurable:!1,enumerable:!1,writable:!0,value:!1}),et(this,"_running",{configurable:!1,enumerable:!1,writable:!0,value:!1}),et(this,"_exited",{configurable:!1,enumerable:!1,writable:!0,value:!1}),et(this,"_count",{configurable:!1,enumerable:!1,writable:!0,value:0}),rt(this,"name",t),rt(this,"tic",(function(){i?o.fail(".tic() called more than once"):(o.emit("tic"),i=!0,a=it())})),rt(this,"toc",(function(){var t,e,r,s;if(!1===i)return o.fail(".toc() called before .tic()");if(t=nt(a),n)return o.fail(".toc() called more than once");n=!0,o.emit("toc"),e=t[0]+t[1]/1e9,r=o.iterations/e,s={ok:!0,operator:"result",iterations:o.iterations,elapsed:e,rate:r},o.emit("result",s)})),rt(this,"iterations",e.iterations),rt(this,"timeout",e.timeout),this):new kt(t,e,r)}tt(kt,$),rt(kt.prototype,"run",ot),rt(kt.prototype,"exit",at),rt(kt.prototype,"ended",st),rt(kt.prototype,"_assert",ut),rt(kt.prototype,"comment",lt),rt(kt.prototype,"skip",ct),rt(kt.prototype,"todo",mt),rt(kt.prototype,"fail",pt),rt(kt.prototype,"pass",ft),rt(kt.prototype,"ok",ht),rt(kt.prototype,"notOk",dt),rt(kt.prototype,"equal",vt),rt(kt.prototype,"notEqual",bt),rt(kt.prototype,"deepEqual",gt),rt(kt.prototype,"notDeepEqual",wt),rt(kt.prototype,"end",_t);var yt=v,jt=u,Et=b,xt=/\s+/g;function Tt(t,e){var r,i,n,o,a,s,u,l;if(u="",t.ok||(u+="not "),u+="ok "+e,t.name&&(u+=" "+yt(t.name.toString(),xt," ")),t.skip?u+=" # SKIP":t.todo&&(u+=" # TODO"),u+="\n",t.ok)return u;if("  ",u+="  ---\n",u+="  operator: "+t.operator+"\n",(jt(t,"actual")||jt(t,"expected"))&&(n=t.expected,(o=t.actual)!=o&&n!=n))throw new Error("TODO: remove me");if(t.at&&(u+="  at: "+t.at+"\n"),t.actual&&(r=t.actual.stack),t.error&&(i=t.error.stack),a=r||i)for(s=a.toString().split(Et),u+="  stack: |-\n",l=0;l<s.length;l++)u+="    "+s[l]+"\n";return u+="  ...\n"}var Ot="  ",St=Ot+"---\n",Pt=Ot+"...\n";function Vt(t){var e=St;return e+=Ot+"iterations: "+t.iterations+"\n",e+=Ot+"elapsed: "+t.elapsed+"\n",e+=Ot+"rate: "+t.rate+"\n",e+=Pt}var qt=o.isPrimitive,Dt=Tt,Ft=Vt;function Mt(t){var e=this;this._benchmarks.push(t),t.once("prerun",(function(){e._stream.write("# "+t.name+"\n")})),t.on("result",(function(t){if(qt(t))return e._stream.write("# "+t+"\n");if("result"===t.operator)return t=Ft(t),e._stream.write(t);e.total+=1,t.ok?(t.skip?e.skip+=1:t.todo&&(e.todo+=1),e.pass+=1):t.todo?(e.pass+=1,e.todo+=1):e.fail+=1;t=Dt(t,e.total),e._stream.write(t)})),this.emit("_push",t)}var At=t,It=o.isPrimitive,Ct=X,Kt="TAP version 13";function Nt(t){var e,r,i,n;return i=this,e=new At(r=arguments.length?t:{}),r.objectMode?(n=0,this.on("_push",u),this.on("done",l)):(e.write(Kt+"\n"),this._stream.pipe(e)),this.on("_run",s),e;function o(){Ct(a)}function a(){var t=i._benchmarks.shift();if(t)return t.run(),t.ended()?o():t.once("end",o);i._running=!1,i.emit("done")}function s(){if(!i._running)return i._running=!0,o()}function u(t){var r=n;n+=1,t.once("prerun",(function(){var i={type:"benchmark",name:t.name,id:r};e.write(i)})),t.on("result",(function(t){It(t)?t={benchmark:r,type:"comment",name:t}:"result"===t.operator?(t.benchmark=r,t.type="result"):(t.benchmark=r,t.type="assert");e.write(t)})),t.on("end",(function(){e.write({benchmark:r,type:"end"})}))}function l(){e.destroy()}}function Gt(){this.emit("_run")}function Ht(){this._benchmarks.length=0}function Rt(){var t=this;this._closed||(this._closed=!0,this._benchmarks.length?(this.clear(),this._stream.write("# WARNING: harness closed before completion.\n")):(this._stream.write("#\n"),this._stream.write("1.."+this.total+"\n"),this._stream.write("# total "+this.total+"\n"),this._stream.write("# pass  "+this.pass+"\n"),this.fail&&this._stream.write("# fail  "+this.fail+"\n"),this.skip&&this._stream.write("# skip  "+this.skip+"\n"),this.todo&&this._stream.write("# todo  "+this.todo+"\n"),this.fail||this._stream.write("#\n# ok\n")),this._stream.once("close",(function(){t.emit("close")})),this._stream.destroy())}function Wt(){var t,e;for(e=0;e<this._benchmarks.length;e++)this._benchmarks[e].exit();t=this,this.clear(),this._stream.once("close",(function(){t.emit("close")})),this._stream.destroy()}var zt=c.EventEmitter,Bt=m,Jt=p,Lt=t,Qt=Mt,Ut=Nt,Xt=Gt,Yt=Ht,Zt=Rt,$t=Wt;function te(){return this instanceof te?(zt.call(this),Jt(this,"_benchmarks",{value:[],configurable:!1,writable:!1,enumerable:!1}),Jt(this,"_stream",{value:new Lt,configurable:!1,writable:!1,enumerable:!1}),Jt(this,"_closed",{value:!1,configurable:!1,writable:!0,enumerable:!1}),Jt(this,"_running",{value:!1,configurable:!1,writable:!0,enumerable:!1}),Jt(this,"total",{value:0,configurable:!1,writable:!0,enumerable:!0}),Jt(this,"fail",{value:0,configurable:!1,writable:!0,enumerable:!0}),Jt(this,"pass",{value:0,configurable:!1,writable:!0,enumerable:!0}),Jt(this,"skip",{value:0,configurable:!1,writable:!0,enumerable:!0}),Jt(this,"todo",{value:0,configurable:!1,writable:!0,enumerable:!0}),this):new te}Bt(te,zt),Jt(te.prototype,"push",{value:Qt,configurable:!1,writable:!1,enumerable:!1}),Jt(te.prototype,"createStream",{value:Ut,configurable:!1,writable:!1,enumerable:!1}),Jt(te.prototype,"run",{value:Xt,configurable:!1,writable:!1,enumerable:!1}),Jt(te.prototype,"clear",{value:Yt,configurable:!1,writable:!1,enumerable:!1}),Jt(te.prototype,"close",{value:Zt,configurable:!1,writable:!1,enumerable:!1}),Jt(te.prototype,"exit",{value:$t,configurable:!1,writable:!1,enumerable:!1});var ee=!1,re=null,ie=3,ne=3e5,oe={skip:ee,iterations:re,repeats:ie,timeout:ne},ae=s,se=u,ue=a.isPrimitive,le=g,ce=w.isPrimitive;function me(t,e){return ae(e)?se(e,"skip")&&(t.skip=e.skip,!ue(t.skip))?new TypeError("invalid option. `skip` option must be a boolean primitive. Option: `"+t.skip+"`."):!se(e,"iterations")||(t.iterations=e.iterations,ce(t.iterations)||le(t.iterations))?se(e,"repeats")&&(t.repeats=e.repeats,!ce(t.repeats))?new TypeError("invalid option. `repeats` option must be a positive integer. Option: `"+t.repeats+"`."):se(e,"timeout")&&(t.timeout=e.timeout,!ce(t.timeout))?new TypeError("invalid option. `timeout` option must be a positive integer. Option: `"+t.timeout+"`."):null:new TypeError("invalid option. `iterations` option must be either a positive integer or `null`. Option: `"+t.iterations+"`."):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}var pe=o.isPrimitive,fe=l,he=kt;function de(t,e,r,i){var n,o,a,s,u;a=0,s=0,(o=fe(e)).iterations=1,(u=new he(t,o,r)).on("result",(function(t){pe(t)||t.ok||t.todo||(n=!0)})),u.on("tic",(function(){a+=1})),u.on("toc",(function(){s+=1})),u.once("end",(function(){var t;n?t=new Error("benchmark failed"):1===a&&1===s||(t=new Error("invalid benchmark"));if(t)return i(t);return i()})),u.run()}var ve=o.isPrimitive,be=l,ge=kt,we=.1,_e=10,ke=1e10;function ye(t,e,r,i){var n,o;return o=0,(n=be(e)).iterations=_e,a();function a(){var e=new ge(t,n,r);e.on("result",s),e.once("end",u),e.run()}function s(t){ve(t)||"result"!==t.operator||(o=t.elapsed)}function u(){if(o<we&&n.iterations<ke)return n.iterations*=10,a();i(null,n.iterations)}}var je=de,Ee=ye;function xe(t,e,r,i){if(!r)return e.repeats=1,i(t,e,r);if(e.skip)return e.repeats=1,i(t,e,r);function n(n,o){return n?(e.repeats=1,e.iterations=1,i(t,e,r)):(e.iterations=o,i(t,e,r))}je(t,e,r,(function(o){if(o)return e.repeats=1,e.iterations=1,i(t,e,r);if(e.iterations)return i(t,e,r);Ee(t,e,r,n)}))}var Te=e,Oe=n,Se=o.isPrimitive,Pe=r,Ve=a.isPrimitive,qe=s,De=u,Fe=l,Me=kt,Ae=te,Ie=X,Ce=oe,Ke=me,Ne=xe;function Ge(t,e){var r,i,n,o,a;if(o={},1===arguments.length)if(Pe(t))a=t;else{if(!qe(t))throw new TypeError("invalid argument. Must provide either an options object or a callback function. Value: `"+t+"`.");o=t}else if(arguments.length>1){if(!qe(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if(De(t,"autoclose")&&(o.autoclose=t.autoclose,!Ve(o.autoclose)))throw new TypeError("invalid option. `autoclose` option must be a boolean primitive. Option: `"+o.autoclose+"`.");if(!Pe(a=e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+a+"`.")}function s(t,e,r){var i,o,a;if(!Se(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(i=Fe(Ce),2===arguments.length){if(Pe(e))a=e;else if(o=Ke(i,e))throw o}else if(arguments.length>2){if(o=Ke(i,e))throw o;if(!Pe(a=r))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+a+"`.")}return n.push([t,i,a]),1===n.length&&Ie(u),s}function u(){var t=-1;return e();function e(){var e;if((t+=1)===n.length)return n.length=0,i.run();e=n[t],Ne(e[0],e[1],e[2],r)}function r(t,r,n){var o,a;for(a=0;a<r.repeats;a++)(o=new Me(t,r,n)).on("result",l),i.push(o);return e()}}function l(t){Se(t)||t.ok||t.todo||(r=1)}function c(t){return arguments.length?i.createStream(t):i.createStream()}function m(){i.close()}function p(){i.exit()}function f(){return r}return i=new Ae,o.autoclose&&i.once("done",m),a&&i.once("done",a),r=0,n=[],Te(s,"createStream",c),Te(s,"close",m),Te(s,"exit",p),Oe(s,"exitCode",f),s}var He=i,Re=He,We=He&&"function"==typeof He.exit,ze=_,Be=We,Je=!ze&&Be;function Le(t){console.log(t)}var Qe=t,Ue=x,Xe=Le;function Ye(){var t,e;return t=new Qe({transform:function(t,i,n){var o,a;for(a=0;a<t.length;a++)"\n"===(o=Ue(t[a]))?r():e+=o;n()},flush:r}),e="",t;function r(r){try{Xe(e)}catch(e){t.emit("error",e)}if(e="",r)return r()}}var Ze=r,$e=a.isPrimitive,tr=s,er=k,rr=u,ir=y,nr=j,or=E,ar=Ge,sr=Ye,ur=Je,lr=He;function cr(){var t,e,r,i,n,o,a;if(0===arguments.length)i={},a=or;else if(1===arguments.length)if(Ze(arguments[0]))i={},a=arguments[0];else{if(!tr(arguments[0]))throw new TypeError("invalid argument. Must provide either an options object or a callback function. Value: `"+arguments[0]+"`.");i=arguments[0],a=or}else{if(!tr(i=arguments[0]))throw new TypeError("invalid argument. First argument must be an object. Value: `"+i+"`.");if(!Ze(a=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+a+"`.")}if(o={},rr(i,"autoclose")&&(o.autoclose=i.autoclose,!$e(o.autoclose)))throw new TypeError("invalid option. `autoclose` option must be a boolean primitive. Option: `"+o.autoclose+"`.");if(rr(i,"stream")&&(o.stream=i.stream,!er(o.stream)))throw new TypeError("invalid option. `stream` option must be a writable stream. Option: `"+o.stream+"`.");return t=0,n=ir(o,["autoclose"]),r=ar(n,s),n=nr(i,["autoclose","stream"]),e=r.createStream(n).pipe(o.stream||sr()),ur&&(e.on("error",u),lr.on("exit",l)),r;function s(){return a()}function u(){t=1}function l(e){0===e&&(r.close(),lr.exit(t||r.exitCode))}}var mr,pr=Je,fr=cr;function hr(t,e){var r,i;return mr||(arguments.length>1?(r=t,i=e):(r={},i=t),r.autoclose=!pr,mr=fr(r,i),hr.cached=!0,mr)}var dr=t,vr=e,br=r,gr=Ge,wr=hr,_r=[];function kr(){var t,e;for(t=_r.length,e=0;e<t;e++)_r.shift()()}function yr(t){var e,r;return r=arguments.length?t:{},wr.cached?wr().createStream(r):(e=new dr(r),r.stream=e,wr(r,kr),e)}function jr(t){var e;if(!br(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");for(e=0;e<_r.length;e++)if(t===_r[e])throw new Error("invalid argument. Attempted to add duplicate listener.");_r.push(t)}function Er(t,e,r){var i=wr(kr);return arguments.length<2?i(t):2===arguments.length?i(t,e):i(t,e,r),Er}vr(Er,"createHarness",gr),vr(Er,"createStream",yr),vr(Er,"onFinish",jr);var xr=Er;export default xr;
//# sourceMappingURL=harness.js.map