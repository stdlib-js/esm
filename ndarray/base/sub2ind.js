// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
function e(){var e,r,n,t,a,i,l,s,u,o,f,c;for(e=arguments[1],r=arguments[2],n=(i=arguments[3+(a=(t=arguments[0]).length)]).length,s=r,c=0;c<a;c++){if(u=t[c],f=arguments[c+3],"clamp"===(l=i[c%n]))f<0?f=0:f>=u&&(f=u-1);else if("wrap"===l)f<0?(f+=u)<0&&0!==(f%=u)&&(f+=u):f>=u&&(f-=u)>=u&&(f%=u);else if(f<0||f>=u)throw new RangeError("invalid argument. Subscripts must not exceed array dimensions. Subscript: "+c+". Value: `"+f+"`.");(o=e[c])<0&&0===r?s-=f*o:s+=f*o}return s}var r=e;export default r;
//# sourceMappingURL=sub2ind.js.map