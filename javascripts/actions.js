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


	export {
		emptyContent,
		errorHandler,
		logOut,
	}
