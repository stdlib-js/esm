// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";import e from"./../regexp/whitespace.js";var t=r.isPrimitive,i=e,s=new RegExp("^"+i.source+"+$");function o(r){return!!t(r)&&s.test(r)}var p=o;export default p;
//# sourceMappingURL=is-whitespace.js.map