// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-function.js";import n from"./../assert/is-array-like-object.js";import t from"./../assert/is-integer.js";import i from"./../symbol/iterator.js";var a=e,o=r,u=n,l=t.isPrimitive,s=i;function m(e){var r,n,t,i,f,g,d,h;if(!u(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(1===(t=arguments.length))n=0,d=e.length;else if(2===t)o(arguments[1])?(n=0,g=arguments[1]):n=arguments[1],d=e.length;else if(3===t)o(arguments[1])?(n=0,d=e.length,g=arguments[1],r=arguments[2]):o(arguments[2])?(n=arguments[1],d=e.length,g=arguments[2]):(n=arguments[1],d=arguments[2]);else{if(n=arguments[1],d=arguments[2],!o(g=arguments[3]))throw new TypeError("invalid argument. Fourth argument must be a function. Value: `"+g+"`.");r=arguments[4]}if(!l(n))throw new TypeError("invalid argument. Second argument must be either an integer (starting index) or a callback function. Value: `"+n+"`.");if(!l(d))throw new TypeError("invalid argument. Third argument must be either an integer (ending index) or a callback function. Value: `"+d+"`.");return d<0?(d=e.length+d)<0&&(d=0):d>e.length&&(d=e.length),n<0&&(n=e.length+n)<0&&(n=0),h=n-1,a(i={},"next",g?c:p),a(i,"return",v),s&&a(i,s,b),i;function c(){return h+=1,f||h>=d?{done:!0}:{value:g.call(r,e[h],h,h-n,e),done:!1}}function p(){return h+=1,f||h>=d?{done:!0}:{value:e[h],done:!1}}function v(e){return f=!0,arguments.length?{value:e,done:!0}:{done:!0}}function b(){return g?m(e,n,d,g,r):m(e,n,d)}}var f=m;export default f;
//# sourceMappingURL=to-view-iterator.js.map