var webpack  = require('webpack');
var path = require('webpack');

module.exports ={
	entry:['./javascripts/index'],
	
	output:{
		path:__dirname + '/build', 
		filename:'bundle.js'
	},
	
   module:{
	   loaders:[
		   {
			   test:/^.js$/,
			   loader:['babel-loader'],
			   exclude:/node_modules/
		   }
	   ]
   }
}