// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../assert/is-nan.js";import t from"./../assert/is-integer.js";import f from"./../../../constants/math/float64-max-safe-nth-lucas.js";var r=[2,1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207,3571,5778,9349,15127,24476,39603,64079,103682,167761,271443,439204,710647,1149851,1860498,3010349,4870847,7881196,12752043,20633239,33385282,54018521,87403803,141422324,228826127,370248451,599074578,969323029,1568397607,2537720636,4106118243,6643838879,10749957122,17393796001,28143753123,45537549124,73681302247,119218851371,192900153618,312119004989,505019158607,817138163596,1322157322203,2139295485799,3461452808002,5600748293801,9062201101803,0xd55fbe3dc94,23725150497407,38388099893011,62113250390418,0x5b67cb4878a5,0x93e5a9822a37,0xef4d74caa2dc,425730551631123,688846502588399,0x3f5b3b1643d02,0x66834447bacf1,0xa5de7f5dfe9f3,4721424167835364,7639424778862807],e=a,s=t,o=f,n=r;function x(a){return e(a)||!1===s(a)||a<0||a>o?NaN:n[a]}var c=x;export default c;
//# sourceMappingURL=lucas.js.map