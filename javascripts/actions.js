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


	export {
		emptyContent,
		errorHandler,
		logOut,
	}
