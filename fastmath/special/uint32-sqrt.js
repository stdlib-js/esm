// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r=1073741824;function a(a){var f,o,t,e;for(e=a>>>0,f=0,o=r;o>e;)o>>>=2;for(;0!==o;)t=f+o>>>0,f>>>=1,a>=t&&(a-=t,f+=o),o>>>=2;return f>>>0}var f=a;export default f;
//# sourceMappingURL=uint32-sqrt.js.map