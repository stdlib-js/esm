// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
function r(r,t){var a=t+1;return r<0?((r+=a)<0&&0!==(r%=a)&&(r+=a),r):r>t?((r-=a)>t&&(r%=a),r):r}var t=r;export default t;
//# sourceMappingURL=wrap-index.js.map