// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../utils/keys.js";import n from"./../assert/has-own-property.js";var i,u={float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},r={float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},a={float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},o={float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},e={float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},f={float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,binary:0,generic:1},l={float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,binary:0,generic:1},c={float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,binary:1,generic:1},g={float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,binary:1,generic:1},y={float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,binary:0,generic:1},b={float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,binary:1,generic:0},s={float64:u,float32:r,int32:a,int16:o,int8:e,uint32:f,uint16:l,uint8:c,uint8c:g,generic:y,binary:b},p=t,h=n,v=s;function m(){var t,n,i,u,r,a,o,e,f;for(i={},n=(t=p(v)).length,f=0;f<n;f++){for(r=t[f],o=v[r],u={},e=0;e<n;e++)u[a=t[e]]=o[a];i[r]=u}return i}function d(){var t,n,i,u,r,a,o,e,f;for(i={},n=(t=p(v)).length,f=0;f<n;f++){for(r=t[f],o=v[r],u=[],e=0;e<n;e++)1===o[a=t[e]]&&u.push(a);i[r]=u}return i}function j(t){return 0===arguments.length?m():(void 0===i&&(i=d()),h(i,t)?i[t].slice():null)}var k=j;export default k;
//# sourceMappingURL=same-kind-casts.js.map