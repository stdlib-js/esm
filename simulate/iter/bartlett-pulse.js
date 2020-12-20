// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../../utils/define-nonenumerable-read-only-property.js";import t from"./../../symbol/iterator.js";import e from"./../../math/base/special/abs.js";import r from"./../../assert/is-plain-object.js";import o from"./../../assert/has-own-property.js";import n from"./../../assert/is-positive-number.js";import a from"./../../assert/is-integer.js";import p from"./../../assert/is-positive-integer.js";import s from"./../../assert/is-nonnegative-integer.js";var u=r,d=o,m=n.isPrimitive,f=a.isPrimitive,l=p.isPrimitive,v=s.isPrimitive;function b(i,t){return u(t)?d(t,"duration")&&(i.duration=t.duration,!l(t.duration))?new TypeError("invalid option. `duration` option must be a positive integer. Option: `"+t.duration+"`."):d(t,"period")&&(i.period=t.period,!l(t.period))?new TypeError("invalid option. `period` option must be a positive integer. Option: `"+t.period+"`."):d(t,"amplitude")&&(i.amplitude=t.amplitude,!m(t.amplitude))?new TypeError("invalid option. `amplitude` option must be a positive number. Option: `"+t.amplitude+"`."):d(t,"offset")&&(i.offset=t.offset,!f(t.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+t.offset+"`."):d(t,"iter")&&(i.iter=t.iter,!v(t.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+t.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}var g=i,w=t,j=e,h=b;function y(i){var t,e,r,o,n,a,p;if(t={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=h(t,i)))throw o;if(-1===t.duration&&(t.duration=t.period),t.duration>t.period)throw new RangeError("invalid option. `duration` option must be less than or equal to the period. Option: `"+t.duration+"`.");if(t.duration<=2)throw new RangeError("invalid option. `duration` option must be greater than 2. Option: `"+t.duration+"`.");return(n=(t.period-t.offset)%t.period)<0&&(n+=t.period),a=2/(t.duration-1),n-=1,p=0,g(e={},"next",s),g(e,"return",u),w&&g(e,w,d),e;function s(){return p+=1,r||p>t.iter?{done:!0}:{value:(n=(n+1)%t.period)<t.duration?t.amplitude*(1-j(a*n-1)):0,done:!1}}function u(i){return r=!0,arguments.length?{value:i,done:!0}:{done:!0}}function d(){return y(t)}}var c=y;export default c;
//# sourceMappingURL=bartlett-pulse.js.map