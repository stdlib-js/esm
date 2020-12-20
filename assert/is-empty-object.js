// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../utils/keys.js";import r from"./is-plain-object.js";import o from"./has-symbol-support.js";var e=t,s=r,m=o,p=m();function i(t){return!!s(t)&&(!(e(t).length>0)&&!(p&&Object.getOwnPropertySymbols(t).length>0))}var l=i;export default l;
//# sourceMappingURL=is-empty-object.js.map