"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@zag-js";
exports.ids = ["vendor-chunks/@zag-js"];
exports.modules = {

/***/ "(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@zag-js/dom-query/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_Z_INDEX: () => (/* binding */ MAX_Z_INDEX),\n/* harmony export */   ariaAttr: () => (/* binding */ ariaAttr),\n/* harmony export */   contains: () => (/* binding */ contains),\n/* harmony export */   createScope: () => (/* binding */ createScope),\n/* harmony export */   dataAttr: () => (/* binding */ dataAttr),\n/* harmony export */   getActiveElement: () => (/* binding */ getActiveElement),\n/* harmony export */   getByText: () => (/* binding */ getByText),\n/* harmony export */   getByTypeahead: () => (/* binding */ getByTypeahead),\n/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),\n/* harmony export */   getDocument: () => (/* binding */ getDocument2),\n/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),\n/* harmony export */   getParent: () => (/* binding */ getParent),\n/* harmony export */   getPlatform: () => (/* binding */ getPlatform),\n/* harmony export */   getScrollParent: () => (/* binding */ getScrollParent),\n/* harmony export */   getScrollParents: () => (/* binding */ getScrollParents),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   indexOfId: () => (/* binding */ indexOfId),\n/* harmony export */   isApple: () => (/* binding */ isApple),\n/* harmony export */   isDom: () => (/* binding */ isDom),\n/* harmony export */   isEditableElement: () => (/* binding */ isEditableElement),\n/* harmony export */   isFirefox: () => (/* binding */ isFirefox),\n/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),\n/* harmony export */   isIPhone: () => (/* binding */ isIPhone),\n/* harmony export */   isIos: () => (/* binding */ isIos),\n/* harmony export */   isMac: () => (/* binding */ isMac),\n/* harmony export */   isSafari: () => (/* binding */ isSafari),\n/* harmony export */   isSelfEvent: () => (/* binding */ isSelfEvent),\n/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice),\n/* harmony export */   itemById: () => (/* binding */ itemById),\n/* harmony export */   nextById: () => (/* binding */ nextById),\n/* harmony export */   nextTick: () => (/* binding */ nextTick),\n/* harmony export */   prevById: () => (/* binding */ prevById),\n/* harmony export */   query: () => (/* binding */ query),\n/* harmony export */   queryAll: () => (/* binding */ queryAll),\n/* harmony export */   raf: () => (/* binding */ raf)\n/* harmony export */ });\n// src/attrs.ts\nvar dataAttr = (guard) => {\n  return guard ? \"\" : void 0;\n};\nvar ariaAttr = (guard) => {\n  return guard ? \"true\" : void 0;\n};\n\n// src/is-html-element.ts\nfunction isHTMLElement(value) {\n  return typeof value === \"object\" && value?.nodeType === Node.ELEMENT_NODE && typeof value?.nodeName === \"string\";\n}\n\n// src/contains.ts\nfunction contains(parent, child) {\n  if (!parent || !child)\n    return false;\n  if (!isHTMLElement(parent) || !isHTMLElement(child))\n    return false;\n  return parent === child || parent.contains(child);\n}\nvar isSelfEvent = (event) => contains(event.currentTarget, event.target);\n\n// src/create-scope.ts\nvar getDocument = (node) => {\n  if (node.nodeType === Node.DOCUMENT_NODE)\n    return node;\n  return node.ownerDocument ?? document;\n};\nfunction createScope(methods) {\n  const screen = {\n    getRootNode: (ctx) => ctx.getRootNode?.() ?? document,\n    getDoc: (ctx) => getDocument(screen.getRootNode(ctx)),\n    getWin: (ctx) => screen.getDoc(ctx).defaultView ?? window,\n    getActiveElement: (ctx) => screen.getDoc(ctx).activeElement,\n    getById: (ctx, id) => screen.getRootNode(ctx).getElementById(id)\n  };\n  return { ...screen, ...methods };\n}\n\n// src/env.ts\nvar isDocument = (el) => el.nodeType === Node.DOCUMENT_NODE;\nfunction getDocument2(el) {\n  if (isDocument(el))\n    return el;\n  return el?.ownerDocument ?? document;\n}\nfunction getWindow(el) {\n  return el?.ownerDocument.defaultView ?? window;\n}\n\n// src/get-active-element.ts\nfunction getActiveElement(el) {\n  let activeElement = el.ownerDocument.activeElement;\n  while (activeElement?.shadowRoot) {\n    const el2 = activeElement.shadowRoot.activeElement;\n    if (el2 === activeElement)\n      break;\n    else\n      activeElement = el2;\n  }\n  return activeElement;\n}\n\n// src/get-by-id.ts\nfunction itemById(v, id) {\n  return v.find((node) => node.id === id);\n}\nfunction indexOfId(v, id) {\n  const item = itemById(v, id);\n  return item ? v.indexOf(item) : -1;\n}\nfunction nextById(v, id, loop = true) {\n  let idx = indexOfId(v, id);\n  idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);\n  return v[idx];\n}\nfunction prevById(v, id, loop = true) {\n  let idx = indexOfId(v, id);\n  if (idx === -1)\n    return loop ? v[v.length - 1] : null;\n  idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);\n  return v[idx];\n}\n\n// src/get-by-text.ts\nvar getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? \"\";\nvar match = (valueText, query2) => valueText.toLowerCase().startsWith(query2.toLowerCase());\nvar wrap = (v, idx) => {\n  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);\n};\nfunction getByText(v, text, currentId) {\n  const index = currentId ? indexOfId(v, currentId) : -1;\n  let items = currentId ? wrap(v, index) : v;\n  const isSingleKey = text.length === 1;\n  if (isSingleKey) {\n    items = items.filter((item) => item.id !== currentId);\n  }\n  return items.find((item) => match(getValueText(item), text));\n}\n\n// src/get-by-typeahead.ts\nfunction getByTypeaheadImpl(_items, options) {\n  const { state, activeId, key, timeout = 350 } = options;\n  const search = state.keysSoFar + key;\n  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);\n  const query2 = isRepeated ? search[0] : search;\n  let items = _items.slice();\n  const next = getByText(items, query2, activeId);\n  function cleanup() {\n    clearTimeout(state.timer);\n    state.timer = -1;\n  }\n  function update(value) {\n    state.keysSoFar = value;\n    cleanup();\n    if (value !== \"\") {\n      state.timer = +setTimeout(() => {\n        update(\"\");\n        cleanup();\n      }, timeout);\n    }\n  }\n  update(search);\n  return next;\n}\nvar getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {\n  defaultOptions: { keysSoFar: \"\", timer: -1 },\n  isValidEvent: isValidTypeaheadEvent\n});\nfunction isValidTypeaheadEvent(event) {\n  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;\n}\n\n// src/get-computed-style.ts\nvar styleCache = /* @__PURE__ */ new WeakMap();\nfunction getComputedStyle(el) {\n  if (!styleCache.has(el)) {\n    const win = el.ownerDocument.defaultView || window;\n    styleCache.set(el, win.getComputedStyle(el));\n  }\n  return styleCache.get(el);\n}\n\n// src/get-event-target.ts\nfunction getEventTarget(event) {\n  return event.composedPath?.()[0] ?? event.target;\n}\n\n// src/get-scroll-parent.ts\nfunction isScrollParent(el) {\n  const win = el.ownerDocument.defaultView || window;\n  const { overflow, overflowX, overflowY } = win.getComputedStyle(el);\n  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);\n}\nfunction getParent(el) {\n  if (el.localName === \"html\")\n    return el;\n  return el.assignedSlot || el.parentElement || el.ownerDocument.documentElement;\n}\nfunction getScrollParent(el) {\n  if ([\"html\", \"body\", \"#document\"].includes(el.localName)) {\n    return el.ownerDocument.body;\n  }\n  if (isHTMLElement(el) && isScrollParent(el)) {\n    return el;\n  }\n  return getScrollParent(getParent(el));\n}\nfunction getScrollParents(el, list = []) {\n  const parent = getScrollParent(el);\n  const isBody = parent === el.ownerDocument.body;\n  const win = parent.ownerDocument.defaultView || window;\n  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(parent) ? parent : []) : parent;\n  const parents = list.concat(target);\n  return isBody ? parents : parents.concat(getScrollParents(getParent(target)));\n}\n\n// src/is-editable-element.ts\nfunction isEditableElement(el) {\n  if (el == null || !isHTMLElement(el)) {\n    return false;\n  }\n  try {\n    const win = el.ownerDocument.defaultView || window;\n    return el instanceof win.HTMLInputElement && el.selectionStart != null || /(textarea|select)/.test(el.localName) || el.isContentEditable;\n  } catch {\n    return false;\n  }\n}\n\n// src/platform.ts\nvar isDom = () => typeof document !== \"undefined\";\nfunction getPlatform() {\n  const agent = navigator.userAgentData;\n  return agent?.platform ?? navigator.platform;\n}\nvar pt = (v) => isDom() && v.test(getPlatform());\nvar ua = (v) => isDom() && v.test(navigator.userAgent);\nvar vn = (v) => isDom() && v.test(navigator.vendor);\nvar isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;\nvar isMac = () => pt(/^Mac/) && !isTouchDevice();\nvar isIPhone = () => pt(/^iPhone/);\nvar isSafari = () => isApple() && vn(/apple/i);\nvar isFirefox = () => ua(/firefox\\//i);\nvar isApple = () => pt(/mac|iphone|ipad|ipod/i);\nvar isIos = () => isApple() && !isMac();\n\n// src/query.ts\nfunction queryAll(root, selector) {\n  return Array.from(root?.querySelectorAll(selector) ?? []);\n}\nfunction query(root, selector) {\n  return root?.querySelector(selector);\n}\n\n// src/raf.ts\nfunction nextTick(fn) {\n  const set = /* @__PURE__ */ new Set();\n  function raf2(fn2) {\n    const id = globalThis.requestAnimationFrame(fn2);\n    set.add(() => globalThis.cancelAnimationFrame(id));\n  }\n  raf2(() => raf2(fn));\n  return function cleanup() {\n    set.forEach((fn2) => fn2());\n  };\n}\nfunction raf(fn) {\n  const id = globalThis.requestAnimationFrame(fn);\n  return () => {\n    globalThis.cancelAnimationFrame(id);\n  };\n}\n\n// src/index.ts\nvar MAX_Z_INDEX = 2147483647;\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHphZy1qcy9kb20tcXVlcnkvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsc0NBQXNDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlDQUFpQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFxQ0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8vLi9ub2RlX21vZHVsZXMvQHphZy1qcy9kb20tcXVlcnkvZGlzdC9pbmRleC5tanM/Nzk1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXR0cnMudHNcbnZhciBkYXRhQXR0ciA9IChndWFyZCkgPT4ge1xuICByZXR1cm4gZ3VhcmQgPyBcIlwiIDogdm9pZCAwO1xufTtcbnZhciBhcmlhQXR0ciA9IChndWFyZCkgPT4ge1xuICByZXR1cm4gZ3VhcmQgPyBcInRydWVcIiA6IHZvaWQgMDtcbn07XG5cbi8vIHNyYy9pcy1odG1sLWVsZW1lbnQudHNcbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZT8ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIHR5cGVvZiB2YWx1ZT8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCI7XG59XG5cbi8vIHNyYy9jb250YWlucy50c1xuZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICBpZiAoIXBhcmVudCB8fCAhY2hpbGQpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQocGFyZW50KSB8fCAhaXNIVE1MRWxlbWVudChjaGlsZCkpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gcGFyZW50ID09PSBjaGlsZCB8fCBwYXJlbnQuY29udGFpbnMoY2hpbGQpO1xufVxudmFyIGlzU2VsZkV2ZW50ID0gKGV2ZW50KSA9PiBjb250YWlucyhldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC50YXJnZXQpO1xuXG4vLyBzcmMvY3JlYXRlLXNjb3BlLnRzXG52YXIgZ2V0RG9jdW1lbnQgPSAobm9kZSkgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxuICAgIHJldHVybiBub2RlO1xuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50ID8/IGRvY3VtZW50O1xufTtcbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKG1ldGhvZHMpIHtcbiAgY29uc3Qgc2NyZWVuID0ge1xuICAgIGdldFJvb3ROb2RlOiAoY3R4KSA9PiBjdHguZ2V0Um9vdE5vZGU/LigpID8/IGRvY3VtZW50LFxuICAgIGdldERvYzogKGN0eCkgPT4gZ2V0RG9jdW1lbnQoc2NyZWVuLmdldFJvb3ROb2RlKGN0eCkpLFxuICAgIGdldFdpbjogKGN0eCkgPT4gc2NyZWVuLmdldERvYyhjdHgpLmRlZmF1bHRWaWV3ID8/IHdpbmRvdyxcbiAgICBnZXRBY3RpdmVFbGVtZW50OiAoY3R4KSA9PiBzY3JlZW4uZ2V0RG9jKGN0eCkuYWN0aXZlRWxlbWVudCxcbiAgICBnZXRCeUlkOiAoY3R4LCBpZCkgPT4gc2NyZWVuLmdldFJvb3ROb2RlKGN0eCkuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIH07XG4gIHJldHVybiB7IC4uLnNjcmVlbiwgLi4ubWV0aG9kcyB9O1xufVxuXG4vLyBzcmMvZW52LnRzXG52YXIgaXNEb2N1bWVudCA9IChlbCkgPT4gZWwubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERTtcbmZ1bmN0aW9uIGdldERvY3VtZW50MihlbCkge1xuICBpZiAoaXNEb2N1bWVudChlbCkpXG4gICAgcmV0dXJuIGVsO1xuICByZXR1cm4gZWw/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3coZWwpIHtcbiAgcmV0dXJuIGVsPy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8/IHdpbmRvdztcbn1cblxuLy8gc3JjL2dldC1hY3RpdmUtZWxlbWVudC50c1xuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudChlbCkge1xuICBsZXQgYWN0aXZlRWxlbWVudCA9IGVsLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQ/LnNoYWRvd1Jvb3QpIHtcbiAgICBjb25zdCBlbDIgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoZWwyID09PSBhY3RpdmVFbGVtZW50KVxuICAgICAgYnJlYWs7XG4gICAgZWxzZVxuICAgICAgYWN0aXZlRWxlbWVudCA9IGVsMjtcbiAgfVxuICByZXR1cm4gYWN0aXZlRWxlbWVudDtcbn1cblxuLy8gc3JjL2dldC1ieS1pZC50c1xuZnVuY3Rpb24gaXRlbUJ5SWQodiwgaWQpIHtcbiAgcmV0dXJuIHYuZmluZCgobm9kZSkgPT4gbm9kZS5pZCA9PT0gaWQpO1xufVxuZnVuY3Rpb24gaW5kZXhPZklkKHYsIGlkKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVtQnlJZCh2LCBpZCk7XG4gIHJldHVybiBpdGVtID8gdi5pbmRleE9mKGl0ZW0pIDogLTE7XG59XG5mdW5jdGlvbiBuZXh0QnlJZCh2LCBpZCwgbG9vcCA9IHRydWUpIHtcbiAgbGV0IGlkeCA9IGluZGV4T2ZJZCh2LCBpZCk7XG4gIGlkeCA9IGxvb3AgPyAoaWR4ICsgMSkgJSB2Lmxlbmd0aCA6IE1hdGgubWluKGlkeCArIDEsIHYubGVuZ3RoIC0gMSk7XG4gIHJldHVybiB2W2lkeF07XG59XG5mdW5jdGlvbiBwcmV2QnlJZCh2LCBpZCwgbG9vcCA9IHRydWUpIHtcbiAgbGV0IGlkeCA9IGluZGV4T2ZJZCh2LCBpZCk7XG4gIGlmIChpZHggPT09IC0xKVxuICAgIHJldHVybiBsb29wID8gdlt2Lmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgaWR4ID0gbG9vcCA/IChpZHggLSAxICsgdi5sZW5ndGgpICUgdi5sZW5ndGggOiBNYXRoLm1heCgwLCBpZHggLSAxKTtcbiAgcmV0dXJuIHZbaWR4XTtcbn1cblxuLy8gc3JjL2dldC1ieS10ZXh0LnRzXG52YXIgZ2V0VmFsdWVUZXh0ID0gKGl0ZW0pID0+IGl0ZW0uZGF0YXNldC52YWx1ZXRleHQgPz8gaXRlbS50ZXh0Q29udGVudCA/PyBcIlwiO1xudmFyIG1hdGNoID0gKHZhbHVlVGV4dCwgcXVlcnkyKSA9PiB2YWx1ZVRleHQudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHF1ZXJ5Mi50b0xvd2VyQ2FzZSgpKTtcbnZhciB3cmFwID0gKHYsIGlkeCkgPT4ge1xuICByZXR1cm4gdi5tYXAoKF8sIGluZGV4KSA9PiB2WyhNYXRoLm1heChpZHgsIDApICsgaW5kZXgpICUgdi5sZW5ndGhdKTtcbn07XG5mdW5jdGlvbiBnZXRCeVRleHQodiwgdGV4dCwgY3VycmVudElkKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudElkID8gaW5kZXhPZklkKHYsIGN1cnJlbnRJZCkgOiAtMTtcbiAgbGV0IGl0ZW1zID0gY3VycmVudElkID8gd3JhcCh2LCBpbmRleCkgOiB2O1xuICBjb25zdCBpc1NpbmdsZUtleSA9IHRleHQubGVuZ3RoID09PSAxO1xuICBpZiAoaXNTaW5nbGVLZXkpIHtcbiAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gY3VycmVudElkKTtcbiAgfVxuICByZXR1cm4gaXRlbXMuZmluZCgoaXRlbSkgPT4gbWF0Y2goZ2V0VmFsdWVUZXh0KGl0ZW0pLCB0ZXh0KSk7XG59XG5cbi8vIHNyYy9nZXQtYnktdHlwZWFoZWFkLnRzXG5mdW5jdGlvbiBnZXRCeVR5cGVhaGVhZEltcGwoX2l0ZW1zLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGFjdGl2ZUlkLCBrZXksIHRpbWVvdXQgPSAzNTAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHNlYXJjaCA9IHN0YXRlLmtleXNTb0ZhciArIGtleTtcbiAgY29uc3QgaXNSZXBlYXRlZCA9IHNlYXJjaC5sZW5ndGggPiAxICYmIEFycmF5LmZyb20oc2VhcmNoKS5ldmVyeSgoY2hhcikgPT4gY2hhciA9PT0gc2VhcmNoWzBdKTtcbiAgY29uc3QgcXVlcnkyID0gaXNSZXBlYXRlZCA/IHNlYXJjaFswXSA6IHNlYXJjaDtcbiAgbGV0IGl0ZW1zID0gX2l0ZW1zLnNsaWNlKCk7XG4gIGNvbnN0IG5leHQgPSBnZXRCeVRleHQoaXRlbXMsIHF1ZXJ5MiwgYWN0aXZlSWQpO1xuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lcik7XG4gICAgc3RhdGUudGltZXIgPSAtMTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICBzdGF0ZS5rZXlzU29GYXIgPSB2YWx1ZTtcbiAgICBjbGVhbnVwKCk7XG4gICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBzdGF0ZS50aW1lciA9ICtzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdXBkYXRlKFwiXCIpO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKHNlYXJjaCk7XG4gIHJldHVybiBuZXh0O1xufVxudmFyIGdldEJ5VHlwZWFoZWFkID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5hc3NpZ24oZ2V0QnlUeXBlYWhlYWRJbXBsLCB7XG4gIGRlZmF1bHRPcHRpb25zOiB7IGtleXNTb0ZhcjogXCJcIiwgdGltZXI6IC0xIH0sXG4gIGlzVmFsaWRFdmVudDogaXNWYWxpZFR5cGVhaGVhZEV2ZW50XG59KTtcbmZ1bmN0aW9uIGlzVmFsaWRUeXBlYWhlYWRFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSAmJiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleTtcbn1cblxuLy8gc3JjL2dldC1jb21wdXRlZC1zdHlsZS50c1xudmFyIHN0eWxlQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWwpIHtcbiAgaWYgKCFzdHlsZUNhY2hlLmhhcyhlbCkpIHtcbiAgICBjb25zdCB3aW4gPSBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgICBzdHlsZUNhY2hlLnNldChlbCwgd2luLmdldENvbXB1dGVkU3R5bGUoZWwpKTtcbiAgfVxuICByZXR1cm4gc3R5bGVDYWNoZS5nZXQoZWwpO1xufVxuXG4vLyBzcmMvZ2V0LWV2ZW50LXRhcmdldC50c1xuZnVuY3Rpb24gZ2V0RXZlbnRUYXJnZXQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmNvbXBvc2VkUGF0aD8uKClbMF0gPz8gZXZlbnQudGFyZ2V0O1xufVxuXG4vLyBzcmMvZ2V0LXNjcm9sbC1wYXJlbnQudHNcbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsKSB7XG4gIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gd2luLmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudChlbCkge1xuICBpZiAoZWwubG9jYWxOYW1lID09PSBcImh0bWxcIilcbiAgICByZXR1cm4gZWw7XG4gIHJldHVybiBlbC5hc3NpZ25lZFNsb3QgfHwgZWwucGFyZW50RWxlbWVudCB8fCBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbCkge1xuICBpZiAoW1wiaHRtbFwiLCBcImJvZHlcIiwgXCIjZG9jdW1lbnRcIl0uaW5jbHVkZXMoZWwubG9jYWxOYW1lKSkge1xuICAgIHJldHVybiBlbC5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cbiAgaWYgKGlzSFRNTEVsZW1lbnQoZWwpICYmIGlzU2Nyb2xsUGFyZW50KGVsKSkge1xuICAgIHJldHVybiBlbDtcbiAgfVxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudChlbCkpO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50cyhlbCwgbGlzdCA9IFtdKSB7XG4gIGNvbnN0IHBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbCk7XG4gIGNvbnN0IGlzQm9keSA9IHBhcmVudCA9PT0gZWwub3duZXJEb2N1bWVudC5ib2R5O1xuICBjb25zdCB3aW4gPSBwYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIGNvbnN0IHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHBhcmVudCkgPyBwYXJlbnQgOiBbXSkgOiBwYXJlbnQ7XG4gIGNvbnN0IHBhcmVudHMgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gcGFyZW50cyA6IHBhcmVudHMuY29uY2F0KGdldFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50KHRhcmdldCkpKTtcbn1cblxuLy8gc3JjL2lzLWVkaXRhYmxlLWVsZW1lbnQudHNcbmZ1bmN0aW9uIGlzRWRpdGFibGVFbGVtZW50KGVsKSB7XG4gIGlmIChlbCA9PSBudWxsIHx8ICFpc0hUTUxFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIHdpbi5IVE1MSW5wdXRFbGVtZW50ICYmIGVsLnNlbGVjdGlvblN0YXJ0ICE9IG51bGwgfHwgLyh0ZXh0YXJlYXxzZWxlY3QpLy50ZXN0KGVsLmxvY2FsTmFtZSkgfHwgZWwuaXNDb250ZW50RWRpdGFibGU7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBzcmMvcGxhdGZvcm0udHNcbnZhciBpc0RvbSA9ICgpID0+IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICBjb25zdCBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuICByZXR1cm4gYWdlbnQ/LnBsYXRmb3JtID8/IG5hdmlnYXRvci5wbGF0Zm9ybTtcbn1cbnZhciBwdCA9ICh2KSA9PiBpc0RvbSgpICYmIHYudGVzdChnZXRQbGF0Zm9ybSgpKTtcbnZhciB1YSA9ICh2KSA9PiBpc0RvbSgpICYmIHYudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciB2biA9ICh2KSA9PiBpc0RvbSgpICYmIHYudGVzdChuYXZpZ2F0b3IudmVuZG9yKTtcbnZhciBpc1RvdWNoRGV2aWNlID0gKCkgPT4gaXNEb20oKSAmJiAhIW5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbnZhciBpc01hYyA9ICgpID0+IHB0KC9eTWFjLykgJiYgIWlzVG91Y2hEZXZpY2UoKTtcbnZhciBpc0lQaG9uZSA9ICgpID0+IHB0KC9eaVBob25lLyk7XG52YXIgaXNTYWZhcmkgPSAoKSA9PiBpc0FwcGxlKCkgJiYgdm4oL2FwcGxlL2kpO1xudmFyIGlzRmlyZWZveCA9ICgpID0+IHVhKC9maXJlZm94XFwvL2kpO1xudmFyIGlzQXBwbGUgPSAoKSA9PiBwdCgvbWFjfGlwaG9uZXxpcGFkfGlwb2QvaSk7XG52YXIgaXNJb3MgPSAoKSA9PiBpc0FwcGxlKCkgJiYgIWlzTWFjKCk7XG5cbi8vIHNyYy9xdWVyeS50c1xuZnVuY3Rpb24gcXVlcnlBbGwocm9vdCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20ocm9vdD8ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgPz8gW10pO1xufVxuZnVuY3Rpb24gcXVlcnkocm9vdCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHJvb3Q/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG4vLyBzcmMvcmFmLnRzXG5mdW5jdGlvbiBuZXh0VGljayhmbikge1xuICBjb25zdCBzZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBmdW5jdGlvbiByYWYyKGZuMikge1xuICAgIGNvbnN0IGlkID0gZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4yKTtcbiAgICBzZXQuYWRkKCgpID0+IGdsb2JhbFRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpKTtcbiAgfVxuICByYWYyKCgpID0+IHJhZjIoZm4pKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgc2V0LmZvckVhY2goKGZuMikgPT4gZm4yKCkpO1xuICB9O1xufVxuZnVuY3Rpb24gcmFmKGZuKSB7XG4gIGNvbnN0IGlkID0gZ2xvYmFsVGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGdsb2JhbFRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICB9O1xufVxuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBNQVhfWl9JTkRFWCA9IDIxNDc0ODM2NDc7XG5leHBvcnQge1xuICBNQVhfWl9JTkRFWCxcbiAgYXJpYUF0dHIsXG4gIGNvbnRhaW5zLFxuICBjcmVhdGVTY29wZSxcbiAgZGF0YUF0dHIsXG4gIGdldEFjdGl2ZUVsZW1lbnQsXG4gIGdldEJ5VGV4dCxcbiAgZ2V0QnlUeXBlYWhlYWQsXG4gIGdldENvbXB1dGVkU3R5bGUsXG4gIGdldERvY3VtZW50MiBhcyBnZXREb2N1bWVudCxcbiAgZ2V0RXZlbnRUYXJnZXQsXG4gIGdldFBhcmVudCxcbiAgZ2V0UGxhdGZvcm0sXG4gIGdldFNjcm9sbFBhcmVudCxcbiAgZ2V0U2Nyb2xsUGFyZW50cyxcbiAgZ2V0V2luZG93LFxuICBpbmRleE9mSWQsXG4gIGlzQXBwbGUsXG4gIGlzRG9tLFxuICBpc0VkaXRhYmxlRWxlbWVudCxcbiAgaXNGaXJlZm94LFxuICBpc0hUTUxFbGVtZW50LFxuICBpc0lQaG9uZSxcbiAgaXNJb3MsXG4gIGlzTWFjLFxuICBpc1NhZmFyaSxcbiAgaXNTZWxmRXZlbnQsXG4gIGlzVG91Y2hEZXZpY2UsXG4gIGl0ZW1CeUlkLFxuICBuZXh0QnlJZCxcbiAgbmV4dFRpY2ssXG4gIHByZXZCeUlkLFxuICBxdWVyeSxcbiAgcXVlcnlBbGwsXG4gIHJhZlxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@zag-js/element-size/dist/track-size.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@zag-js/element-size/dist/track-size.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trackElementSize: () => (/* binding */ trackElementSize)\n/* harmony export */ });\nfunction trackElementSize(element, callback) {\n  if (!element) {\n    callback(void 0);\n    return;\n  }\n  callback({ width: element.offsetWidth, height: element.offsetHeight });\n  const win = element.ownerDocument.defaultView ?? window;\n  const observer = new win.ResizeObserver((entries) => {\n    if (!Array.isArray(entries) || !entries.length)\n      return;\n    const [entry] = entries;\n    let width;\n    let height;\n    if (\"borderBoxSize\" in entry) {\n      const borderSizeEntry = entry[\"borderBoxSize\"];\n      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;\n      width = borderSize[\"inlineSize\"];\n      height = borderSize[\"blockSize\"];\n    } else {\n      width = element.offsetWidth;\n      height = element.offsetHeight;\n    }\n    callback({ width, height });\n  });\n  observer.observe(element, { box: \"border-box\" });\n  return () => observer.unobserve(element);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHphZy1qcy9lbGVtZW50LXNpemUvZGlzdC90cmFjay1zaXplLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQTBEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsR0FBRztBQUNILDhCQUE4QixtQkFBbUI7QUFDakQ7QUFDQTs7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLy4vbm9kZV9tb2R1bGVzL0B6YWctanMvZWxlbWVudC1zaXplL2Rpc3QvdHJhY2stc2l6ZS5tanM/MjFkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0cmFja0VsZW1lbnRTaXplKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIGNhbGxiYWNrKHZvaWQgMCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNhbGxiYWNrKHsgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgfSk7XG4gIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA/PyB3aW5kb3c7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IHdpbi5SZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyaWVzKSB8fCAhZW50cmllcy5sZW5ndGgpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XG4gICAgbGV0IHdpZHRoO1xuICAgIGxldCBoZWlnaHQ7XG4gICAgaWYgKFwiYm9yZGVyQm94U2l6ZVwiIGluIGVudHJ5KSB7XG4gICAgICBjb25zdCBib3JkZXJTaXplRW50cnkgPSBlbnRyeVtcImJvcmRlckJveFNpemVcIl07XG4gICAgICBjb25zdCBib3JkZXJTaXplID0gQXJyYXkuaXNBcnJheShib3JkZXJTaXplRW50cnkpID8gYm9yZGVyU2l6ZUVudHJ5WzBdIDogYm9yZGVyU2l6ZUVudHJ5O1xuICAgICAgd2lkdGggPSBib3JkZXJTaXplW1wiaW5saW5lU2l6ZVwiXTtcbiAgICAgIGhlaWdodCA9IGJvcmRlclNpemVbXCJibG9ja1NpemVcIl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICBjYWxsYmFjayh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gIH0pO1xuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcbiAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgdHJhY2tFbGVtZW50U2l6ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@zag-js/element-size/dist/track-size.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@zag-js/focus-visible/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@zag-js/focus-visible/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getInteractionModality: () => (/* binding */ getInteractionModality),\n/* harmony export */   setInteractionModality: () => (/* binding */ setInteractionModality),\n/* harmony export */   trackFocusVisible: () => (/* binding */ trackFocusVisible),\n/* harmony export */   trackInteractionModality: () => (/* binding */ trackInteractionModality)\n/* harmony export */ });\n/* harmony import */ var _zag_js_dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zag-js/dom-query */ \"(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs\");\n// src/index.ts\n\nvar hasSetup = false;\nvar modality = null;\nvar hasEventBeforeFocus = false;\nvar hasBlurredWindowRecently = false;\nvar handlers = /* @__PURE__ */ new Set();\nfunction trigger(modality2, event) {\n  handlers.forEach((handler) => handler(modality2, event));\n}\nvar isMac = typeof window !== \"undefined\" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;\nfunction isValidKey(e) {\n  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === \"Control\" || e.key === \"Shift\" || e.key === \"Meta\");\n}\nfunction onKeyboardEvent(event) {\n  hasEventBeforeFocus = true;\n  if (isValidKey(event)) {\n    modality = \"keyboard\";\n    trigger(\"keyboard\", event);\n  }\n}\nfunction onPointerEvent(event) {\n  modality = \"pointer\";\n  if (event.type === \"mousedown\" || event.type === \"pointerdown\") {\n    hasEventBeforeFocus = true;\n    const target = event.composedPath ? event.composedPath()[0] : event.target;\n    let matches = false;\n    try {\n      matches = target.matches(\":focus-visible\");\n    } catch {\n    }\n    if (matches)\n      return;\n    trigger(\"pointer\", event);\n  }\n}\nfunction isVirtualClick(event) {\n  if (event.mozInputSource === 0 && event.isTrusted)\n    return true;\n  return event.detail === 0 && !event.pointerType;\n}\nfunction onClickEvent(e) {\n  if (isVirtualClick(e)) {\n    hasEventBeforeFocus = true;\n    modality = \"virtual\";\n  }\n}\nfunction onWindowFocus(event) {\n  if (event.target === window || event.target === document) {\n    return;\n  }\n  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {\n    modality = \"virtual\";\n    trigger(\"virtual\", event);\n  }\n  hasEventBeforeFocus = false;\n  hasBlurredWindowRecently = false;\n}\nfunction onWindowBlur() {\n  hasEventBeforeFocus = false;\n  hasBlurredWindowRecently = true;\n}\nfunction isFocusVisible() {\n  return modality !== \"pointer\";\n}\nfunction setupGlobalFocusEvents() {\n  if (!(0,_zag_js_dom_query__WEBPACK_IMPORTED_MODULE_0__.isDom)() || hasSetup) {\n    return;\n  }\n  const { focus } = HTMLElement.prototype;\n  HTMLElement.prototype.focus = function focusElement(...args) {\n    hasEventBeforeFocus = true;\n    focus.apply(this, args);\n  };\n  document.addEventListener(\"keydown\", onKeyboardEvent, true);\n  document.addEventListener(\"keyup\", onKeyboardEvent, true);\n  document.addEventListener(\"click\", onClickEvent, true);\n  window.addEventListener(\"focus\", onWindowFocus, true);\n  window.addEventListener(\"blur\", onWindowBlur, false);\n  if (typeof PointerEvent !== \"undefined\") {\n    document.addEventListener(\"pointerdown\", onPointerEvent, true);\n    document.addEventListener(\"pointermove\", onPointerEvent, true);\n    document.addEventListener(\"pointerup\", onPointerEvent, true);\n  } else {\n    document.addEventListener(\"mousedown\", onPointerEvent, true);\n    document.addEventListener(\"mousemove\", onPointerEvent, true);\n    document.addEventListener(\"mouseup\", onPointerEvent, true);\n  }\n  hasSetup = true;\n}\nfunction trackFocusVisible(fn) {\n  setupGlobalFocusEvents();\n  fn(isFocusVisible());\n  const handler = () => fn(isFocusVisible());\n  handlers.add(handler);\n  return () => {\n    handlers.delete(handler);\n  };\n}\nfunction trackInteractionModality(fn) {\n  setupGlobalFocusEvents();\n  fn(modality);\n  const handler = () => fn(modality);\n  handlers.add(handler);\n  return () => {\n    handlers.delete(handler);\n  };\n}\nfunction setInteractionModality(value) {\n  modality = value;\n  trigger(value, null);\n}\nfunction getInteractionModality() {\n  return modality;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHphZy1qcy9mb2N1cy12aXNpYmxlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0RBQUs7QUFDWjtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldG8vLi9ub2RlX21vZHVsZXMvQHphZy1qcy9mb2N1cy12aXNpYmxlL2Rpc3QvaW5kZXgubWpzPzAwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgeyBpc0RvbSB9IGZyb20gXCJAemFnLWpzL2RvbS1xdWVyeVwiO1xudmFyIGhhc1NldHVwID0gZmFsc2U7XG52YXIgbW9kYWxpdHkgPSBudWxsO1xudmFyIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSBmYWxzZTtcbnZhciBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSBmYWxzZTtcbnZhciBoYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG5mdW5jdGlvbiB0cmlnZ2VyKG1vZGFsaXR5MiwgZXZlbnQpIHtcbiAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb2RhbGl0eTIsIGV2ZW50KSk7XG59XG52YXIgaXNNYWMgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5uYXZpZ2F0b3IgIT0gbnVsbCA/IC9eTWFjLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pIDogZmFsc2U7XG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGUpIHtcbiAgcmV0dXJuICEoZS5tZXRhS2V5IHx8ICFpc01hYyAmJiBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5rZXkgPT09IFwiQ29udHJvbFwiIHx8IGUua2V5ID09PSBcIlNoaWZ0XCIgfHwgZS5rZXkgPT09IFwiTWV0YVwiKTtcbn1cbmZ1bmN0aW9uIG9uS2V5Ym9hcmRFdmVudChldmVudCkge1xuICBoYXNFdmVudEJlZm9yZUZvY3VzID0gdHJ1ZTtcbiAgaWYgKGlzVmFsaWRLZXkoZXZlbnQpKSB7XG4gICAgbW9kYWxpdHkgPSBcImtleWJvYXJkXCI7XG4gICAgdHJpZ2dlcihcImtleWJvYXJkXCIsIGV2ZW50KTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRXZlbnQoZXZlbnQpIHtcbiAgbW9kYWxpdHkgPSBcInBvaW50ZXJcIjtcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIgfHwgZXZlbnQudHlwZSA9PT0gXCJwb2ludGVyZG93blwiKSB7XG4gICAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IHRydWU7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKClbMF0gOiBldmVudC50YXJnZXQ7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgbWF0Y2hlcyA9IHRhcmdldC5tYXRjaGVzKFwiOmZvY3VzLXZpc2libGVcIik7XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICAgIGlmIChtYXRjaGVzKVxuICAgICAgcmV0dXJuO1xuICAgIHRyaWdnZXIoXCJwb2ludGVyXCIsIGV2ZW50KTtcbiAgfVxufVxuZnVuY3Rpb24gaXNWaXJ0dWFsQ2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50Lm1veklucHV0U291cmNlID09PSAwICYmIGV2ZW50LmlzVHJ1c3RlZClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGV2ZW50LmRldGFpbCA9PT0gMCAmJiAhZXZlbnQucG9pbnRlclR5cGU7XG59XG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQoZSkge1xuICBpZiAoaXNWaXJ0dWFsQ2xpY2soZSkpIHtcbiAgICBoYXNFdmVudEJlZm9yZUZvY3VzID0gdHJ1ZTtcbiAgICBtb2RhbGl0eSA9IFwidmlydHVhbFwiO1xuICB9XG59XG5mdW5jdGlvbiBvbldpbmRvd0ZvY3VzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IHdpbmRvdyB8fCBldmVudC50YXJnZXQgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghaGFzRXZlbnRCZWZvcmVGb2N1cyAmJiAhaGFzQmx1cnJlZFdpbmRvd1JlY2VudGx5KSB7XG4gICAgbW9kYWxpdHkgPSBcInZpcnR1YWxcIjtcbiAgICB0cmlnZ2VyKFwidmlydHVhbFwiLCBldmVudCk7XG4gIH1cbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNGb2N1c1Zpc2libGUoKSB7XG4gIHJldHVybiBtb2RhbGl0eSAhPT0gXCJwb2ludGVyXCI7XG59XG5mdW5jdGlvbiBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCkge1xuICBpZiAoIWlzRG9tKCkgfHwgaGFzU2V0dXApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBmb2N1cyB9ID0gSFRNTEVsZW1lbnQucHJvdG90eXBlO1xuICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoLi4uYXJncykge1xuICAgIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICAgIGZvY3VzLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleWJvYXJkRXZlbnQsIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlib2FyZEV2ZW50LCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tFdmVudCwgdHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgdHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbldpbmRvd0JsdXIsIGZhbHNlKTtcbiAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyRXZlbnQsIHRydWUpO1xuICB9XG4gIGhhc1NldHVwID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHRyYWNrRm9jdXNWaXNpYmxlKGZuKSB7XG4gIHNldHVwR2xvYmFsRm9jdXNFdmVudHMoKTtcbiAgZm4oaXNGb2N1c1Zpc2libGUoKSk7XG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBmbihpc0ZvY3VzVmlzaWJsZSgpKTtcbiAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYWNrSW50ZXJhY3Rpb25Nb2RhbGl0eShmbikge1xuICBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCk7XG4gIGZuKG1vZGFsaXR5KTtcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IGZuKG1vZGFsaXR5KTtcbiAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNldEludGVyYWN0aW9uTW9kYWxpdHkodmFsdWUpIHtcbiAgbW9kYWxpdHkgPSB2YWx1ZTtcbiAgdHJpZ2dlcih2YWx1ZSwgbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRJbnRlcmFjdGlvbk1vZGFsaXR5KCkge1xuICByZXR1cm4gbW9kYWxpdHk7XG59XG5leHBvcnQge1xuICBnZXRJbnRlcmFjdGlvbk1vZGFsaXR5LFxuICBzZXRJbnRlcmFjdGlvbk1vZGFsaXR5LFxuICB0cmFja0ZvY3VzVmlzaWJsZSxcbiAgdHJhY2tJbnRlcmFjdGlvbk1vZGFsaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@zag-js/focus-visible/dist/index.mjs\n");

/***/ })

};
;