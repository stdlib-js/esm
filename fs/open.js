// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../vendor/fs.js";var n="r",o=438,t={flags:n,mode:o},a=e.open,d=t;function f(r,e,n,o){var t=arguments.length;return 2===t?a(r,d.flags,d.mode,e):3===t?a(r,e,d.mode,n):void a(r,e,n,o)}var m=e.openSync,l=t;function s(r,e,n){var o,t;o=arguments.length;try{t=1===o?m(r,l.flags,l.mode):m(r,e,2===o?l.mode:n)}catch(r){return r}return t}var u=r,i=f,p=s;u(i,"sync",p);export default i;
//# sourceMappingURL=open.js.map