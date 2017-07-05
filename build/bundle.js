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
error 401
def:memory buffer full
*/





// should objectify in future to have one source of truth,
// an imitation of what react does
let btns, btn, store = [0],
	operandA = [],
	specialOps = [],
	operators = [],
	memoryA = [],
	logs = [{
		state: "continuous"
	}], // states being, "singular" and "continuous"
	history = [];

// this has various implementations for different browsers.
// don't really understand, an alernative would have been `.getElementsByClassName`, then `map`,

btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));
let operandAInit = operandA.length;

__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](logs[0].state);
// should abstract logic to diff file.
const writeToMemory = () => {
	let frstOperand = Number(operandA.join(''));
	memoryA.push(frstOperand);
	publishStore(memoryA);
	__WEBPACK_IMPORTED_MODULE_0__actions_js__["b" /* emptyContent */](operandA);
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
	__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](`History: {length: ${history.length}}, {values:${history}}`);
	for (const key of history) {
		if (typeof key === 'number' && history.length >= 10) {
			return history.splice(history.length - 1);
		}
	}
}


// should abstract logic to diff file.
const validate = (result) => {
	if (result || result === null || result === 0) {
		console.log('answer', result);
		ManageHistory(result);
	} else {
		throw new ReferenceError('result is undefined,');
	}
}

const continuum = () => {
	if (operators[operators.length - 2] === "+" || operators[operators.length - 2] === "-" || operators[operators.length - 2] === "x" || operators[operators.length - 2] === "/" || operators[operators.length] === "="){
		specialOps.push(memoryA[0]);
		__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](` specialOps: ${specialOps}`);
		//operandA.join() below is left  as a fallback for future modification 
		let nxtOperand = Number(operandA.join('')) || Number(memoryA[1]);
		if (operators[operators.length - 2] === "+") {
			let modiOperand = specialOps[0] + nxtOperand;
			handleSpecialOps(modiOperand);
			__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](logs[0].state);
		} else if (operators[operators.length - 2] === "-") {
			let modiOperand = specialOps - nxtOperand;
			handleSpecialOps(modiOperand);
		} else if (operators[operators.length - 2] === "/") {
			let modiOperand = specialOps / nxtOperand;
			handleSpecialOps(modiOperand);
		} else if (operators[operators.length - 2] === "x") {
			let modiOperand = specialOps * nxtOperand;
			handleSpecialOps(modiOperand);
		}else if(operators[operators.length] === "="){
			  handleEqual();
		}
	}
}

//const handleEqual =()=>{
//	if(operators[operators.length - 1] === "=" || operators[operators.length - 2] === "="){
//		if(operandA.length !==0 || history.length !== 0 || memoryA.length !==0 || specialOps.length !==0){
//			  switch(operandA.length){
//					  case 0:
//					    if(memoryA.length !==0){
//							operandA.push(memoryA[memoryA.length - 1]);
//						}else if(history.length !==0){
//							operandA.push(history[history.length - 1]);
//						}
//					  break;
//				     default:
//					  let newMem = memoryA.push(Number(operandA.join('')));
//					  getResult(newMem);
//					 break;
//			  }
//		}
//	}
//}

const handleSpecialOps = (value) => {
	if (specialOps) {
		__WEBPACK_IMPORTED_MODULE_0__actions_js__["b" /* emptyContent */](specialOps);
		specialOps.push(value);
		__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](`populated specialOps / answer: ${specialOps}`);
		__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */]('input next operand or terminate continuous arithmetic operations by pressing =');
	} else {
		throw new error("special operand store not found");
	}

}

// changes the status of logs to control the flow of arithmetic operation.
//singular meaning a simple arithmetic operation, continuous meaning a series of arithmetic operation
//
const setLogs = () => {
	if (((operators[operators.length - 3] === "-" || operators[operators.length - 3] === "+" || operators[operators.length - 3] === "/" || operators[operators.length - 3] === "x") && (operators[operators.length - 2] === "-" || operators[operators.length - 2] === "+" || operators[operators.length - 2] === "/" || operators[operators.length - 2] === "x")) && operators[operators.length - 1] === "=") {
		logs[0].state = "continuous";
	} else {
		logs[0].state = "singular";
	}
}

//publishStore(operandA);
const publishStore = (array) => {
	if (array instanceof Array) {
		let initial = 0;
		do {
			__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](array);
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
				__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](operandA.length);
				publishStore(operandA);
			} else if (!Number.isFinite(numBtnVal)) {
				if (btnVal === ".") {
					operandA.push(btnVal);
					publishStore(operandA);
				} else {
					operators.push(btnVal);
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](operators.length);
					console.log('operators store', operators);
				}
				if (operators[operators.length - 1] === "Del") {
					operandA.pop(operandAInit - 1);
					publishStore(operandA);
				} else if (operators[operators.length - 1] === "+" || operators[operators.length - 1] === "-" || operators[operators.length - 1] === "x") {

					writeToMemory();
					continuum();
				} else if (operators[operators.length - 1] === "C") {
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["b" /* emptyContent */](operandA);
					__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */](operandA);
				} else if (operators[operators.length - 1] === "=") {
					setLogs();
					if (logs[0].state === "singular") {
						getResult(memoryA[0]);
						__WEBPACK_IMPORTED_MODULE_0__actions_js__["b" /* emptyContent */](operandA, memoryA);
						console.log('memory should be empty', memoryA);
						console.log('operands store should be empty', operandA)
					} else {
						continuum();
						__WEBPACK_IMPORTED_MODULE_0__actions_js__["a" /* logOut */]('from the start up continnum');
						getResult(specialOps[0]);
					}
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emptyContent; });
/* unused harmony export errorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logOut; });
//	const emptyContent = (content, memory) => {
//		let a = content || memory;
//		a.splice(0);
//		if (content && memory) {
//			content.splice(0);
//			memory.splice(0);
//		}
//	}
	


	//update, 
	//refactored empty content function using,
	//restparameters. can take an infinite amount of parameters
	const emptyContent = (...content) =>{
		if(Array.isArray(content)){
			for(const value of content){
				value.splice(0)
			}
		}else{
			throw new TypeError('parameters must be in an array')
		}
	}


	const errorHandler = (errorCode) => {
		switch (errorCode) {
			case '400':
				logOut(`error ${errorCode}, bad request \n cannot have double equals consecutively`);
				break;
			default:
				logOut('error,Unknown type of error please report github.com/arausly');
				break;
		}
	}
 
	const logOut = (...para1) => {
		if (Array.isArray(para1)) {
			for (const index of para1) {
				console.log(index);
			}
		} else {
			throw new Error("parameters must be an array");
		}
	}


	


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);