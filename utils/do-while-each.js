// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import e from"./../assert/is-function.js";var t=r,n=e;function i(r,e,i,a){var o,l;if(!t(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(!n(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(!n(i))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+i+"`.");if(0===(o=r.length)&&(e.call(a,void 0,void 0,r),0===(o=r.length)))return r;l=0;do{e.call(a,r[l],l,r),l+=1,o=r.length}while(l<o&&i(r[l-1],l-1,r));return r}var a=i;export default a;
//# sourceMappingURL=do-while-each.js.map