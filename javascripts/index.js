let btns,btn,store = [0],operandA =[],operators = [],memory= [];

btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));  // this has various implementations for different browsers.


const btnLogic = (button) =>{
	let btnVal = button.getAttribute('value');
	button.addEventListener('click',(e)=>{
		e = e === undefined ? window.event : e;
		e.preventDefault();
		let operandAInit = operandA.length;
		if(btnVal === null || btnVal === undefined){
			//console.log(button.innerHTML);
		}else{
			//			  console.log(button.getAttribute('value'));
			let numBtnVal = Number(btnVal);
			if(Number.isFinite(numBtnVal) && Number.isSafeInteger(numBtnVal)){
				operandA.push(numBtnVal);
				console.log(operandA.length);
				console.log(operandA);
			}else if(!Number.isFinite(numBtnVal)){
				operators.push(btnVal);
				console.log(operators.length);
				//				console.log(operators);
				//use last value of array e.g (sameOperator[sameOperator.length - 1] === "Del") ?
				let sameOperator = operators.filter((operator)=> operator === "Del");
				if(sameOperator.length !== 0){
					switch(operators[0]){
						case 'Del':
							operandA.pop(operandAInit -1);
							console.log(operandA);
							break;
						default:
							console.log('Some default');
							break;	
					} 

				}
				let getDiffOperator = operators.filter((operator)=> operator !=="Del");
				if(getDiffOperator !== 0){
					switch(getDiffOperator[0]){
						case "+":
							let fstOperand = Number(operandA.join('')); 
							console.log('expecting second operand');  
							memory.push(fstOperand);
							operandA.splice(0);
							let sndOperand = Number(operandA.join(''));
							console.log(sndOperand);
							console.log(memory[0]+ sndOperand);
						break; 
					}
				}
			}
		}
	});
}



// const block						

btn = btns.map((btn)=>{btnLogic(btn)});

document.getElementById('result').innerHTML = store[0];