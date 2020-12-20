// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import t from"./../assert/is-function.js";import e from"./index-of.js";import o from"./../assert/is-plain-object.js";import i from"./../assert/has-own-property.js";var n=o,s=i;function a(r,t){return n(t)?(s(t,"thisArg")&&(r.thisArg=t.thisArg),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var u=r,l=t,m=e,f=a;function p(r,t,e){var o,i,n,s,a,p,h,g,c,j,v;if(!u(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(n={},2===arguments.length)g=t;else{if(h=f(n,t))throw h;g=e}if(!l(g))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+g+"`.");for(o=n.thisArg,i=0,s=[],p=[],a=r.length,j=0;j<a;j++)c=g.call(o,r[j],j),i+=1,-1===(v=m(s,c))?(s.push(c),p.push([c,1,0])):p[v][1]+=1;for(a=p.length,j=0;j<a;j++)p[j][2]=p[j][1]/i;return p}var h=p;export default h;
//# sourceMappingURL=tabulate-by.js.map