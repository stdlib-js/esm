// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import n from"./../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../strided/dispatch.js";import i from"./../../../strided/base/unary.js";import r from"./../../base/special/floor.js";import u from"./../../base/special/floorf.js";import o from"./../../base/special/identity.js";import a from"./../../../utils/define-nonenumerable-read-only-accessor.js";import e from"./../../../ndarray/base/dtypes2signatures.js";var f=["float64","float64","float64","generic","float32","float32","float32","float64","float32","generic","generic","generic","int32","int32","int32","float64","int32","generic","int16","int16","int16","int32","int16","float32","int16","float64","int16","generic","int8","int8","int8","int16","int8","int32","int8","float32","int8","float64","int8","generic","uint32","uint32","uint32","float64","uint32","generic","uint16","int32","uint16","uint16","uint16","uint32","uint16","float32","uint16","float64","uint16","generic","uint8","int16","uint8","int32","uint8","uint8","uint8","uint8c","uint8","uint16","uint8","uint32","uint8","float32","uint8","float64","uint8","generic","uint8c","int16","uint8c","int32","uint8c","uint8","uint8c","uint8c","uint8c","uint16","uint8c","uint32","uint8c","float32","uint8c","float64","uint8c","generic"],s=5,c=1,l=1,g={nargs:s,nin:c,nout:l},m=r,p=u,d=o,y=[r,r,p,r,r,r,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],j=t,b=i,v=f,h=g,x=y,k=j(b,v,x,h.nargs,h.nin,h.nout);function q(n,t,i,r,u){return k(n,t,i,r,u)}var w=t,z=i.ndarray,A=f,B=g,C=y,D=w(z,A,C,B.nargs+B.nin+B.nout,B.nin,B.nout);function E(n,t,i,r,u,o,a){return D(n,t,i,r,u,o,a)}var F=n,G=a,H=e,I=f,J=g;function K(){return H(I,J.nin,J.nout)}function L(n,t){F(n,"nargs",t?J.nargs+J.nin+J.nout:J.nargs),F(n,"nin",J.nin),F(n,"nout",J.nout),G(n,"types",K)}var M=n,N=q,O=E,P=L;M(N,"ndarray",O),P(N,!1),P(N.ndarray,!0);export default N;
//# sourceMappingURL=floor.js.map