// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../assert/is-boolean.js";import r from"./../assert/is-string.js";import e from"./../assert/is-nonnegative-integer.js";var t=i.isPrimitive,n=r.isPrimitive,a=e.isPrimitive,o=65536,s=1024,l=55296,u=56319,v=56320,g=57343;function d(i,r,e){var d,m,h,p;if(!n(i))throw new TypeError("invalid argument. Must provide a string. Value: `"+i+"`.");if(!a(r))throw new TypeError("invalid argument. Must provide a valid position (nonnegative integer). Value: `"+r+"`.");if(r>=i.length)throw new RangeError("invalid argument. Must provide a valid position (within string bounds). Value: `"+r+"`.");if(arguments.length>2){if(!t(e))throw new TypeError("invalid argument. Third argument must be a boolean. Value: `"+e+"`.");m=e}else m=!1;return(d=i.charCodeAt(r))>=l&&d<=u&&r<i.length-1?(p=d,h=i.charCodeAt(r+1),v<=h&&h<=g?(p-l)*s+(h-v)+o:p):m&&d>=v&&d<=g&&r>=1?(p=i.charCodeAt(r-1),h=d,l<=p&&p<=u?(p-l)*s+(h-v)+o:h):d}var m=d;export default m;
//# sourceMappingURL=code-point-at.js.map