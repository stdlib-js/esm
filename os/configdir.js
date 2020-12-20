// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../vendor/path.js";import i from"./../process/env.js";import o from"./../assert/is-windows.js";import e from"./platform.js";import t from"./../assert/is-string.js";import s from"./homedir.js";var n=r.join,m=i,a=o,f=e,p=t.isPrimitive,l=s;function u(r){var i,o,e;if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+r+"`.");i=r}else i="";return a?(e=m.LOCALAPPDATA||m.APPDATA)?n(e,i):null:null===(o=l())?null:"darwin"===f?n(o,"Library","Preferences",i):(e=m.XDG_CONFIG_HOME||n(o,".config"),n(e,i))}var v=u;export default v;
//# sourceMappingURL=configdir.js.map