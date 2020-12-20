// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./is-function.js";import o from"./../regexp/native-function.js";var r=t,n=o,i=Function.prototype.toString;function e(t){return r(t)&&n.test(i.call(t))}var f=e;export default f;
//# sourceMappingURL=is-native-function.js.map