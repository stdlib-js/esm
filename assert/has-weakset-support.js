// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t="function"==typeof WeakSet?WeakSet:null,e=t;function a(){var t,a,n;if("function"!=typeof e)return!1;try{a={},(n=new e).add(a),n.add(a),t=n.has(a)}catch(e){t=!1}return t}var n=a;export default n;
//# sourceMappingURL=has-weakset-support.js.map