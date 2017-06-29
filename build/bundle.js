/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_js__ = __webpack_require__(1);
// issues
//  #lastOperator at global space does not work;
//  #divide anomalies ($understood: subsidiariy
//  functions to perform operations the reverse of their parent's conditions will behave abnormally)
//e.g if(a>b){alert(a)if(b>a{alert(a)})}
//
//

/*
error 400
def : when equals double in operators store consecutively
*/





// should objectify in future to have one source of truth,
// an imitation of what react does
let btns, btn, store = [0],
	operandA = [],
	operandB = [],
	operators = [],
	memoryA = [],
	history = [];

// this has various implementations for different browsers.
// don't really understand, an alernative would have been `.getElementsByClassName`, then `map`,

btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));
let operandAInit = operandA.length;


// should abstract logic to diff file.
const writeToMemory = () => {
	let frstOperand = Number(operandA.join(''));
	memoryA.push(frstOperand);
	__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* emptyContent */](operandA);
	console.log('memory store', memoryA);
	console.log('input second parameter');
}

// should abstract logic to diff file.
const getResult = (valueOne) => {
	let sndOperand = Number(operandA.join(''));
	if (operators[(operators.length - 2)] === "+") {
		console.log('second operand', sndOperand);
		let result = valueOne + sndOperand;
		validate(result);
	} else if (operators[(operators.length - 2)] === "-") {
		console.log('second operand', sndOperand);
		let result = valueOne - sndOperand;
		validate(result);
	} else if (operators[(operators.length - 2)] === "x") {
		console.log('second operand', sndOperand);
		let result = valueOne * sndOperand;
		validate(result.toFixed(2));
	} else if (operators[(operators.length - 2)] === "/") {
		console.log('second operand', sndOperand);
		let result = valueOne / sndOperand;
		validate(result.toFixed(2));
	}
}

// should abstract logic to diff file.
const ManageHistory = (result) => {
	history.push(Number(result));
	console.log(` History: {length: ${history.length}}, {values:${history}}`);
	for (const key of history) {
		if (typeof key === 'number' && history.length >= 10) {
			return history.splice(history.length - 1);
		}
	}
}


// should abstract logic to diff file.
const validate = (result) => {
	if (result) {
		console.log('answer', result);
		ManageHistory(result);
	} else {
		throw new ReferenceError('result is undefined,');
	}
}

//allows continuous arithmetic operations.
const continuum = () => {
	if (operators[operators.length - 2] === "=" || operators[operators.length - 2] === "x" || operators[operators.length - 2] === "+" || operators[operators.length - 2] === "-" || operators[operators.length - 2] === "/") {
		getResult(memoryA.push(history[history.length - 1]))
	}
}



//publishStore(operandA);
const publishStore = (array) => {
	if (array instanceof Array) {
		let initial = 0;
		do {
			console.log(array);
			initial++;
		} while (array.length - initial === 1 || initial - array.length === 1);
	}
}

//the brain box #cpu #processor

const btnLogic = (button) => {
	let btnVal = button.getAttribute('value');
	button.addEventListener('click', (e) => {
		e = e === undefined ? window.event : e;
		e.preventDefault();


		if (btnVal === null || btnVal === undefined) {
			let btnInner = button.innerHTML;
			if (btnInner) {
				operators.push('/');

				if (operators[operators.length - 1] === "/") {
					writeToMemory();
					continuum();
				}
			}
		} else {
			let numBtnVal = Number(btnVal);
			if (Number.isFinite(numBtnVal) && Number.isSafeInteger(numBtnVal)) {
				operandA.push(numBtnVal);
				console.log(operandA.length);
				publishStore(operandA);
			} else if (!Number.isFinite(numBtnVal)) {
				if (btnVal === ".") {
					operandA.push(btnVal);
					publishStore(operandA);
				} else {
					operators.push(btnVal);
					console.log(operators.length);
					console.log('operators store', operators);
				}
				if (operators[operators.length - 1] === "Del") {
					operandA.pop(operandAInit - 1);
					publishStore(operandA);
				} else if (operators[operators.length - 1] === "+" || operators[operators.length - 1] === "-" || operators[operators.length - 1] === "x") {
					continuum();
					writeToMemory();
				} else if (operators[operators.length - 1] === "C") {
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* emptyContent */](operandA);
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["b" /* logOut */](operandA);
				} else if (operators[operators.length - 1] === "=") {
					getResult(memoryA[0]);
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* emptyContent */](operandA, memoryA);
					console.log('memory should be empty', memoryA);
					console.log('operands store should be empty', operandA);
				}
			}
		}
	});
}





btn = btns.map((btn) => {
	btnLogic(btn)
});


document.getElementById('result').innerHTML = store[0];


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emptyContent; });
/* unused harmony export errorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logOut; });
	const emptyContent = (content, memory) => {
		let a = content || memory;
		a.splice(0);
		if (content && memory) {
			content.splice(0);
			memory.splice(0);
		}
	}


	const errorHandler = (errorCode) => {
		switch (errorCode) {
			case '400':
				logOut(`error ${errorCode}, bad request \n cannot have double equals consecutively`);
				break;
			default:
				logOut('error,Unknown type');
				break;
		}
	}

	const logOut = (para1) => {
		console.log(para1);
	}


	


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);