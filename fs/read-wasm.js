// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import n from"./../assert/is-plain-object.js";import e from"./../assert/is-function.js";import t from"./../assert/is-uint8array.js";import i from"./read-file.js";import o from"./../array/uint8.js";import a from"./../assert/instance-of.js";var u=n,l=e,s=t,f=i,m=o;function p(r,n,e){var t,i;if(arguments.length<3)t={},i=n;else{if(!u(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");t=n,i=e}if(!l(i))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+i+"`.");function o(r,n){var e,t;if(r)return i(r);if(s(n))return i(null,n);for(e=new m(n.length),t=0;t<n.length;t++)e[t]=n[t];i(null,e)}t.encoding=null,f(r,t,o)}var c=n,g=t,j=a,d=i.sync,h=o;function v(r,n){var e,t,i,o;if(arguments.length>1){if(!c(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");e=n}else e={};if(e.encoding=null,i=d(r,e),j(i,Error))return i;if(g(i))return i;for(t=new h(i.length),o=0;o<i.length;o++)t[o]=i[o];return t}var y=r,b=p,w=v;y(b,"sync",w);export default b;
//# sourceMappingURL=read-wasm.js.map