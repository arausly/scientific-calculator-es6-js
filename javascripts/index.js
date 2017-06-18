let btns,btn,store = [0],operandA =[],operandB = [],operator = [];

btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));  // this has various implementations for different browsers.


const btnLogic = (button) =>{
	let btnVal = button.getAttribute('value');
	button.addEventListener('click',(e)=>{
		e = e === undefined ? window.event : e;
		e.preventDefault();
		store.push()
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
				operator.push(btnVal);
				console.log(operator.length);
				if(operator.length === 1){
					let operandAInit = operandA.length;
					if(operandAInit){
						switch(operator[0]){
							case 'Del':
								operandA.pop(operandAInit -1);
								console.log(operandA);
								break;
							default:
								console.log('Some default');
								break;	
						}
					}else if(!operandAInit){
						operandA.splice(operandAInit - 1);
						operandB.push(btnVal);
						console.log(operandB.length);
					}
				}
			}
		}
	}); 
}

// const block						

btn = btns.map((btn)=>{btnLogic(btn)});

document.getElementById('result').innerHTML = store[0];