let btns,btn,store = [0],operandA =[],operandB = [],operator = [];

btns = Array.prototype.slice.call(document.querySelectorAll('.btn'));  // this has various implementations for different browsers.
btn = btns.map((button)=>{
	let btnVal = button.getAttribute('value');
	button.addEventListener('click',(e)=>{
		if(!e){
			e === window.event;
		}
		e.preventDefault();
		if(btnVal === null || btnVal === undefined){
			//			   console.log(button.innerHTML);


		}else{
			//			  console.log(button.getAttribute('value'));
			let numBtnVal = Number(btnVal);
			if(Number.isFinite(numBtnVal) && Number.isSafeInteger(numBtnVal)){
				operandA.push(numBtnVal);

				console.log(operandA.length);
			}else if(!Number.isFinite(numBtnVal)){
				operator.push(btnVal);
				console.log(operator.length);
			}
		}
	}); 
	});


document.getElementById('result').innerHTML = store[0];