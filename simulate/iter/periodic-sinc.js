// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../utils/define-nonenumerable-read-only-property.js";import i from"./../../assert/is-positive-integer.js";import r from"./../../math/base/assert/is-even.js";import t from"./../../symbol/iterator.js";import o from"./../../math/base/special/sinpi.js";import n from"./../../math/base/special/floor.js";import p from"./../../assert/is-plain-object.js";import s from"./../../assert/has-own-property.js";import a from"./../../assert/is-integer.js";import m from"./../../assert/is-nonnegative-integer.js";import u from"./../../assert/is-nonnegative-number.js";var d=p,f=s,l=a.isPrimitive,v=i.isPrimitive,g=m.isPrimitive,b=u.isPrimitive;function j(e,i){return d(i)?f(i,"period")&&(e.period=i.period,!v(i.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+i.period+"`."):f(i,"amplitude")&&(e.amplitude=i.amplitude,!b(i.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+i.amplitude+"`."):f(i,"offset")&&(e.offset=i.offset,!l(i.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+i.offset+"`."):f(i,"iter")&&(e.iter=i.iter,!g(i.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+i.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.")}var c=e,y=i.isPrimitive,w=r,h=t,E=o,T=n,O=j;function P(e,i){var r,t,o,n,p,s,a,m,u,d;if(!y(e))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.");if(r={period:100,amplitude:1,offset:0,iter:1e308},arguments.length>1&&(n=O(r,i)))throw n;return(m=(r.period-r.offset)%r.period)<0&&(m+=r.period),w(e)?(p=r.offset>=0?-1:1,a=r.period/2,s=T(a),u=e/a):u=e/r.period,m-=1,d=0,c(t={},"next",void 0===p?l:f),c(t,"return",v),h&&c(t,h,g),t;function f(){var i;return d+=1,o||d>r.iter?{done:!0}:(m+=1,0===(m%=r.period)||m===a?i=(p*=-1)*r.amplitude:(m===s&&(p*=-1),i=r.amplitude*E(u*m)/(e*E(m/a))),{value:i,done:!1})}function l(){return d+=1,o||d>r.iter?{done:!0}:(m+=1,{value:0===(m%=r.period)?r.amplitude:r.amplitude*E(u*m)/(e*E(m/r.period)),done:!1})}function v(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return P(e,r)}}var x=P;export default x;
//# sourceMappingURL=periodic-sinc.js.map