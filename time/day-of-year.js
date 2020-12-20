// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-date-object.js";import r from"./../assert/is-string.js";import t from"./../assert/is-integer.js";import a from"./days-in-month.js";import i from"./../assert/is-leap-year.js";import n from"./../string/lowercase.js";var o=1,s=1,m=2,u=2,g=3,l=3,f=4,p=4,v=5,d=6,h=6,j=7,b=7,w=8,y=8,c=9,D=9,E=10,T=10,V=11,F=11,M=12,P=12,S={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,jan:o,january:s,feb:m,february:u,mar:g,march:l,apr:f,april:p,may:v,jun:d,june:h,jul:j,july:b,aug:w,august:y,sep:c,september:D,oct:E,october:T,nov:V,november:F,dec:M,december:P},Y=[31,28,31,30,31,30,31,31,30,31,30,31],x=e,I=r.isPrimitive,R=t.isPrimitive,k=a,q=i,z=n,A=S,B=Y;function C(e,r,t){var a,i,n,o,s,m,u;if(0===arguments.length)o=(a=new Date).getMonth()+1,s=a.getFullYear(),m=a.getDate();else if(1===arguments.length){if(!x(e))throw new TypeError("invalid argument. If only providing a single argument, must provide a `Date` object. Value: `"+e+"`.");o=(a=e).getMonth()+1,s=a.getFullYear(),m=a.getDate()}else{if(!I(e)&&!R(e))throw new TypeError("invalid argument. First argument must be either a string or integer. Value: `"+e+"`.");if(!R(r))throw new TypeError("invalid argument. Second argument must be an integer. Value: `"+r+"`.");if(!R(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");o=e,m=r,s=t}if(i=k(o,s),m<1||m>i)throw new RangeError("invalid argument. Day number must be on the interval `[1,"+i+"]`. Value: `"+m+"`.");for(o=z(o.toString()),o=A[o],n=0,u=0;u<o-1;u++)n+=B[u],1===u&&q(s)&&(n+=1);return n+=m}var G=C;export default G;
//# sourceMappingURL=day-of-year.js.map