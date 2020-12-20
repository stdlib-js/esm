// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-nonnegative-integer.js";import t from"./../assert/is-positive-integer.js";import n from"./../assert/is-boolean.js";import i from"./../assert/is-function.js";import o from"./../assert/is-iterator-like.js";import a from"./../assert/has-own-property.js";import u from"./../symbol/iterator.js";var s=e,m=r.isPrimitive,l=t,f=n.isPrimitive,p=i,v=o,g=a,d=u,h=0,b=!1;function w(e,r,t,n){var i,o,a,u,c,j;if(!v(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!l(r))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+r+"`.");if(3===arguments.length){if(!m(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");u=t,o=b}else if(arguments.length>3){if(!m(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(u=t,!f(n))throw new TypeError("invalid argument. Fourth argument must be a boolean. Value: `"+n+"`.");o=n}else u=h,o=b;if(o){for(j=0;j<u;j++)if(e.next().done){a=!0;break}j-=1}else j=-1;return s(i={},"next",y),s(i,"return",T),d&&p(e[d])&&(c=u,s(i,d,x)),i;function y(){var t,n;if(a)return{done:!0};for(j+=1;j<u;){if((n=e.next()).done)return a=!0,{done:!0};j+=1}return u+=r,(n=e.next()).done?(a=!0,t={},g(n,"value")&&(t.value=n.value),t.done=!0,t):{value:n.value,done:!1}}function T(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function x(){return w(e[d](),r,c,o)}}var c=w;export default c;
//# sourceMappingURL=strided.js.map