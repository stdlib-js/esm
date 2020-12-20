// The MIT License (MIT)
// 
// Copyright (c) 2017 CoderPuppy
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
function createCommonjsModule(n,r,e){return n(e={path:r,exports:{},require:function(n,r){return commonjsRequire(n,null==r?e.path:r)}},e.exports),e.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var browser=createCommonjsModule((function(n,r){r.endianness=function(){return"LE"},r.hostname=function(){return"undefined"!=typeof location?location.hostname:""},r.loadavg=function(){return[]},r.uptime=function(){return 0},r.freemem=function(){return Number.MAX_VALUE},r.totalmem=function(){return Number.MAX_VALUE},r.cpus=function(){return[]},r.type=function(){return"Browser"},r.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},r.networkInterfaces=r.getNetworkInterfaces=function(){return{}},r.arch=function(){return"javascript"},r.platform=function(){return"browser"},r.tmpdir=r.tmpDir=function(){return"/tmp"},r.EOL="\n",r.homedir=function(){return"/"}}));export default browser;