// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import n from"./../assert/is-float32vector-like.js";import e from"./base/sdot.js";var r=n,a=e.ndarray;function t(n,e){if(!r(n))throw new TypeError("invalid argument. First argument must be a 1-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `"+n+"`.");if(!r(e))throw new TypeError("invalid argument. Second argument must be a 1-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `"+e+"`.");if(n.length!==e.length)throw new RangeError("invalid argument. Arrays must be the same length. First argument length: "+n.length+". Second argument length: "+e.length+".");return a(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}export default t;
//# sourceMappingURL=sdot.js.map