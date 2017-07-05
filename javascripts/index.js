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



import * as action from './actions.js';

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

action.logOut(logs[0].state);
// should abstract logic to diff file.
const writeToMemory = () => {
	let frstOperand = Number(operandA.join(''));
	memoryA.push(frstOperand);
	publishStore(memoryA);
	action.emptyContent(operandA);
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
	action.logOut(`History: {length: ${history.length}}, {values:${history}}`);
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
		action.logOut(` specialOps: ${specialOps}`);
		//operandA.join() below is left  as a fallback for future modification 
		let nxtOperand = Number(operandA.join('')) || Number(memoryA[1]);
		if (operators[operators.length - 2] === "+") {
			let modiOperand = specialOps[0] + nxtOperand;
			handleSpecialOps(modiOperand);
			action.logOut(logs[0].state);
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
		action.emptyContent(specialOps);
		specialOps.push(value);
		action.logOut(`populated specialOps / answer: ${specialOps}`);
		action.logOut('input next operand or terminate continuous arithmetic operations by pressing =');
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
			action.logOut(array);
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
				action.logOut(operandA.length);
				publishStore(operandA);
			} else if (!Number.isFinite(numBtnVal)) {
				if (btnVal === ".") {
					operandA.push(btnVal);
					publishStore(operandA);
				} else {
					operators.push(btnVal);
					action.logOut(operators.length);
					console.log('operators store', operators);
				}
				if (operators[operators.length - 1] === "Del") {
					operandA.pop(operandAInit - 1);
					publishStore(operandA);
				} else if (operators[operators.length - 1] === "+" || operators[operators.length - 1] === "-" || operators[operators.length - 1] === "x") {

					writeToMemory();
					continuum();
				} else if (operators[operators.length - 1] === "C") {
					action.emptyContent(operandA);
					action.logOut(operandA);
				} else if (operators[operators.length - 1] === "=") {
					setLogs();
					if (logs[0].state === "singular") {
						getResult(memoryA[0]);
						action.emptyContent(operandA, memoryA);
						console.log('memory should be empty', memoryA);
						console.log('operands store should be empty', operandA)
					} else {
						continuum();
						action.logOut('from the start up continnum');
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
