// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r=4294901760,a=65280,t=240,e=12,n=2,u=16,v=8,f=4,o=2,c=1;function d(d){var i=0,l=d>>>0;return l&r&&(l>>>=u,i|=u),l&a&&(l>>>=v,i|=v),l&t&&(l>>>=f,i|=f),l&e&&(l>>>=o,i|=o),l&n&&(l>>>=c,i|=c),i}var i=d;export default i;
//# sourceMappingURL=uint32-log2.js.map