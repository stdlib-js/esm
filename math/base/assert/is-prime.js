// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../special/sqrt.js";import t from"./../special/floor.js";import f from"./../../../constants/math/float64-max-safe-integer.js";var e={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0},i=r,n=t,o=f,u=e;function a(r){var t,f;if(n(r)!==r)return!1;if(r<=3)return r>1;if(r>o||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(u[r])return!0;for(t=n(i(r)),f=11;f<=t;f+=210)if(r%f==0||r%(f+2)==0||r%(f+6)==0||r%(f+8)==0||r%(f+12)==0||r%(f+18)==0||r%(f+20)==0||r%(f+26)==0||r%(f+30)==0||r%(f+32)==0||r%(f+36)==0||r%(f+42)==0||r%(f+48)==0||r%(f+50)==0||r%(f+56)==0||r%(f+60)==0||r%(f+62)==0||r%(f+68)==0||r%(f+72)==0||r%(f+78)==0||r%(f+86)==0||r%(f+90)==0||r%(f+92)==0||r%(f+96)==0||r%(f+98)==0||r%(f+102)==0||r%(f+110)==0||r%(f+116)==0||r%(f+120)==0||r%(f+126)==0||r%(f+128)==0||r%(f+132)==0||r%(f+138)==0||r%(f+140)==0||r%(f+146)==0||r%(f+152)==0||r%(f+156)==0||r%(f+158)==0||r%(f+162)==0||r%(f+168)==0||r%(f+170)==0||r%(f+176)==0||r%(f+180)==0||r%(f+182)==0||r%(f+186)==0||r%(f+188)==0||r%(f+198)==0||r%(f+200)==0)return!1;return!0}var s=a;export default s;
//# sourceMappingURL=is-prime.js.map