// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../constants/math/int8-min.js";import n from"./../constants/math/int16-min.js";import a from"./../constants/math/int32-min.js";import r from"./../constants/math/float16-ninf.js";import o from"./../constants/math/float32-ninf.js";import s from"./../constants/math/float64-ninf.js";var e=t,i=n,m=a,c=r,f=o,u=s;function l(t){switch(t){case"float64":return u;case"int32":return m;case"float32":return f;case"int8":return e;case"int16":return i;case"float16":return c;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError("invalid argument. Must provide a recognized type. Value: `"+t+"`.")}}var p=l;export default p;
//# sourceMappingURL=type-min.js.map