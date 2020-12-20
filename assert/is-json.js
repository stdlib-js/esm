// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r=/^\{[\s\S]*\}$|^\[[\s\S]*\]$/;function t(t){if("string"!=typeof t)return!1;if(!r.test(t))return!1;try{JSON.parse(t)}catch(r){return!1}return!0}var e=t;export default e;
//# sourceMappingURL=is-json.js.map