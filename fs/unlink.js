// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import n from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../vendor/fs.js";var e=r.unlink;function t(n,r){e(n,r)}var o=r.unlinkSync;function u(n){try{o(n)}catch(n){return n}return null}var i=n,l=t,a=u;i(l,"sync",a);export default l;
//# sourceMappingURL=unlink.js.map