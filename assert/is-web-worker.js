// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/global.js";import o from"./is-node.js";import t from"./is-plain-object.js";var e;function n(){return"try {","return this === self;","} catch ( err ) {","return false;","}",new Function("try {return this === self;} catch ( err ) {return false;}")()}var i=e=n(),a=r,c=o,f=t,s=i,l=a();function u(){return!1===c&&"object"==typeof WorkerGlobalScope&&f(WorkerNavigator)&&navigator instanceof WorkerNavigator&&f(WorkerLocation)&&location instanceof WorkerLocation&&"object"==typeof self&&self===l&&!0===s&&"function"==typeof importScripts}var p=u,m=p();export default m;
//# sourceMappingURL=is-web-worker.js.map