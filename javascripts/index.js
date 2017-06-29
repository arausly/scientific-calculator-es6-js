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



import * as action from './actions.js'

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
					action.emptyContent(operandA);
					action.logOut(operandA);
				} else if (operators[operators.length - 1] === "=") {
					getResult(memoryA[0]);
					action.emptyContent(operandA, memoryA);
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
