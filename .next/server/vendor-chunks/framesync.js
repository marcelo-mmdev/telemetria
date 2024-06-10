"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)\n/* harmony export */ });\nfunction createRenderStep(runNextFrame) {\n    let toRun = [];\n    let toRunNextFrame = [];\n    let numToRun = 0;\n    let isProcessing = false;\n    let flushNextFrame = false;\n    const toKeepAlive = new WeakSet();\n    const step = {\n        schedule: (callback, keepAlive = false, immediate = false) => {\n            const addToCurrentFrame = immediate && isProcessing;\n            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive)\n                toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing)\n                    numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: (callback) => {\n            const index = toRunNextFrame.indexOf(callback);\n            if (index !== -1)\n                toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: (frameData) => {\n            if (isProcessing) {\n                flushNextFrame = true;\n                return;\n            }\n            isProcessing = true;\n            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for (let i = 0; i < numToRun; i++) {\n                    const callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n            if (flushNextFrame) {\n                flushNextFrame = false;\n                step.process(frameData);\n            }\n        },\n    };\n    return step;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvY3JlYXRlLXJlbmRlci1zdGVwLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2VzL2NyZWF0ZS1yZW5kZXItc3RlcC5tanM/YjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHJ1bk5leHRGcmFtZSkge1xuICAgIGxldCB0b1J1biA9IFtdO1xuICAgIGxldCB0b1J1bk5leHRGcmFtZSA9IFtdO1xuICAgIGxldCBudW1Ub1J1biA9IDA7XG4gICAgbGV0IGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGxldCBmbHVzaE5leHRGcmFtZSA9IGZhbHNlO1xuICAgIGNvbnN0IHRvS2VlcEFsaXZlID0gbmV3IFdlYWtTZXQoKTtcbiAgICBjb25zdCBzdGVwID0ge1xuICAgICAgICBzY2hlZHVsZTogKGNhbGxiYWNrLCBrZWVwQWxpdmUgPSBmYWxzZSwgaW1tZWRpYXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRvQ3VycmVudEZyYW1lID0gaW1tZWRpYXRlICYmIGlzUHJvY2Vzc2luZztcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGFkZFRvQ3VycmVudEZyYW1lID8gdG9SdW4gOiB0b1J1bk5leHRGcmFtZTtcbiAgICAgICAgICAgIGlmIChrZWVwQWxpdmUpXG4gICAgICAgICAgICAgICAgdG9LZWVwQWxpdmUuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChidWZmZXIuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChhZGRUb0N1cnJlbnRGcmFtZSAmJiBpc1Byb2Nlc3NpbmcpXG4gICAgICAgICAgICAgICAgICAgIG51bVRvUnVuID0gdG9SdW4ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0b1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgdG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRvS2VlcEFsaXZlLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3M6IChmcmFtZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICBmbHVzaE5leHRGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIFt0b1J1biwgdG9SdW5OZXh0RnJhbWVdID0gW3RvUnVuTmV4dEZyYW1lLCB0b1J1bl07XG4gICAgICAgICAgICB0b1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnVtVG9SdW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRvUnVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0b1J1bltpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZnJhbWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEFsaXZlLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuc2NoZWR1bGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTmV4dEZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChmbHVzaE5leHRGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZsdXNoTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RlcC5wcm9jZXNzKGZyYW1lRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUmVuZGVyU3RlcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cancelSync: () => (/* binding */ cancelSync),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   flushSync: () => (/* binding */ flushSync),\n/* harmony export */   getFrameData: () => (/* binding */ getFrameData)\n/* harmony export */ });\n/* harmony import */ var _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.mjs */ \"(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\");\n/* harmony import */ var _create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.mjs */ \"(ssr)/./node_modules/framesync/dist/es/create-render-step.mjs\");\n\n\n\nconst maxElapsed = 40;\nlet useDefaultElapsed = true;\nlet runNextFrame = false;\nlet isProcessing = false;\nconst frame = {\n    delta: 0,\n    timestamp: 0,\n};\nconst stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\",\n];\nconst steps = stepsOrder.reduce((acc, key) => {\n    acc[key] = (0,_create_render_step_mjs__WEBPACK_IMPORTED_MODULE_1__.createRenderStep)(() => (runNextFrame = true));\n    return acc;\n}, {});\nconst sync = stepsOrder.reduce((acc, key) => {\n    const step = steps[key];\n    acc[key] = (process, keepAlive = false, immediate = false) => {\n        if (!runNextFrame)\n            startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nconst cancelSync = stepsOrder.reduce((acc, key) => {\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nconst flushSync = stepsOrder.reduce((acc, key) => {\n    acc[key] = () => steps[key].process(frame);\n    return acc;\n}, {});\nconst processStep = (stepId) => steps[stepId].process(frame);\nconst processFrame = (timestamp) => {\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed\n        ? _on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultTimestep\n        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n    }\n};\nconst startLoop = () => {\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing)\n        (0,_on_next_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.onNextFrame)(processFrame);\n};\nconst getFrameData = () => frame;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sync);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRTtBQUNQOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUVBQWdCO0FBQy9CO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrREFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBVztBQUNuQjtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQztBQUMyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8vLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvaW5kZXgubWpzP2EwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25OZXh0RnJhbWUsIGRlZmF1bHRUaW1lc3RlcCB9IGZyb20gJy4vb24tbmV4dC1mcmFtZS5tanMnO1xuaW1wb3J0IHsgY3JlYXRlUmVuZGVyU3RlcCB9IGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwLm1qcyc7XG5cbmNvbnN0IG1heEVsYXBzZWQgPSA0MDtcbmxldCB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG5sZXQgcnVuTmV4dEZyYW1lID0gZmFsc2U7XG5sZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG5jb25zdCBmcmFtZSA9IHtcbiAgICBkZWx0YTogMCxcbiAgICB0aW1lc3RhbXA6IDAsXG59O1xuY29uc3Qgc3RlcHNPcmRlciA9IFtcbiAgICBcInJlYWRcIixcbiAgICBcInVwZGF0ZVwiLFxuICAgIFwicHJlUmVuZGVyXCIsXG4gICAgXCJyZW5kZXJcIixcbiAgICBcInBvc3RSZW5kZXJcIixcbl07XG5jb25zdCBzdGVwcyA9IHN0ZXBzT3JkZXIucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gY3JlYXRlUmVuZGVyU3RlcCgoKSA9PiAocnVuTmV4dEZyYW1lID0gdHJ1ZSkpO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBzeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzW2tleV07XG4gICAgYWNjW2tleV0gPSAocHJvY2Vzcywga2VlcEFsaXZlID0gZmFsc2UsIGltbWVkaWF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghcnVuTmV4dEZyYW1lKVxuICAgICAgICAgICAgc3RhcnRMb29wKCk7XG4gICAgICAgIHJldHVybiBzdGVwLnNjaGVkdWxlKHByb2Nlc3MsIGtlZXBBbGl2ZSwgaW1tZWRpYXRlKTtcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBjYW5jZWxTeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSBzdGVwc1trZXldLmNhbmNlbDtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuY29uc3QgZmx1c2hTeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSAoKSA9PiBzdGVwc1trZXldLnByb2Nlc3MoZnJhbWUpO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG5jb25zdCBwcm9jZXNzU3RlcCA9IChzdGVwSWQpID0+IHN0ZXBzW3N0ZXBJZF0ucHJvY2VzcyhmcmFtZSk7XG5jb25zdCBwcm9jZXNzRnJhbWUgPSAodGltZXN0YW1wKSA9PiB7XG4gICAgcnVuTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgZnJhbWUuZGVsdGEgPSB1c2VEZWZhdWx0RWxhcHNlZFxuICAgICAgICA/IGRlZmF1bHRUaW1lc3RlcFxuICAgICAgICA6IE1hdGgubWF4KE1hdGgubWluKHRpbWVzdGFtcCAtIGZyYW1lLnRpbWVzdGFtcCwgbWF4RWxhcHNlZCksIDEpO1xuICAgIGZyYW1lLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHN0ZXBzT3JkZXIuZm9yRWFjaChwcm9jZXNzU3RlcCk7XG4gICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgaWYgKHJ1bk5leHRGcmFtZSkge1xuICAgICAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IGZhbHNlO1xuICAgICAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xuICAgIH1cbn07XG5jb25zdCBzdGFydExvb3AgPSAoKSA9PiB7XG4gICAgcnVuTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG4gICAgaWYgKCFpc1Byb2Nlc3NpbmcpXG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG59O1xuY29uc3QgZ2V0RnJhbWVEYXRhID0gKCkgPT4gZnJhbWU7XG5cbmV4cG9ydCBkZWZhdWx0IHN5bmM7XG5leHBvcnQgeyBjYW5jZWxTeW5jLCBmbHVzaFN5bmMsIGdldEZyYW1lRGF0YSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultTimestep: () => (/* binding */ defaultTimestep),\n/* harmony export */   onNextFrame: () => (/* binding */ onNextFrame)\n/* harmony export */ });\nconst defaultTimestep = (1 / 60) * 1000;\nconst getCurrentTime = typeof performance !== \"undefined\"\n    ? () => performance.now()\n    : () => Date.now();\nconst onNextFrame = typeof window !== \"undefined\"\n    ? (callback) => window.requestAnimationFrame(callback)\n    : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZXMvb24tbmV4dC1mcmFtZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2VzL29uLW5leHQtZnJhbWUubWpzP2U0M2QiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdFRpbWVzdGVwID0gKDEgLyA2MCkgKiAxMDAwO1xuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xuY29uc3Qgb25OZXh0RnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgOiAoY2FsbGJhY2spID0+IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soZ2V0Q3VycmVudFRpbWUoKSksIGRlZmF1bHRUaW1lc3RlcCk7XG5cbmV4cG9ydCB7IGRlZmF1bHRUaW1lc3RlcCwgb25OZXh0RnJhbWUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/es/on-next-frame.mjs\n");

/***/ })

};
;