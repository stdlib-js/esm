// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-function.js";import t from"./ctor.js";import e from"./../assert/is-string.js";var i=r,n=t,a=i(n.from),u=e.isPrimitive,o=t;function m(r,t){if(!u(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`");if(arguments.length>1){if(!u(t))throw new TypeError("invalid argument. Second argument must be a string. Value: `"+t+"`");return o.from(r,t)}return o.from(r,"utf8")}var s=e.isPrimitive,f=t;function g(r,t){if(!s(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`");if(arguments.length>1){if(!s(t))throw new TypeError("invalid argument. Second argument must be a string. Value: `"+t+"`");return new f(r,t)}return new f(r,"utf8")}var l,w=a,v=m,p=g,d=l=w?v:p;export default d;
//# sourceMappingURL=from-string.js.map