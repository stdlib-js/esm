// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../vendor/fs.js";var n=e.writeFile;function t(){var r,e;for(r=new Array(arguments.length),e=0;e<r.length;e++)r[e]=arguments[e];n.apply(null,r)}var l=e.writeFileSync;function o(r,e,n){try{arguments.length>2?l(r,e,n):l(r,e)}catch(r){return r}return null}var a=r,i=t,u=o;a(i,"sync",u);export default i;
//# sourceMappingURL=write-file.js.map