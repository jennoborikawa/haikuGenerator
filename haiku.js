//var fs references the module.exports object that require('fs') returns
//require aka import the module's exports.
var fs = require('fs');

//fs.readFileSync('./cmudict.txt') returns a buffer object 
//buffers: instances of the Buffer class in node, which is designed to handle 
//raw binary data; each buffer corresponds to some raw memory allocated outside v8.
//buffers act sort of like arrays of ints, but aren't resizable and have 
//many methods specifically for binary data. 
//integers in a buffer represent a byte and so are limited to values 0-255 inclusive. (2^8-1)

// console.log( fs.readFileSync('./cmudict.txt') );

//require function takes a file path as its parameter and executes the code; 
//then returns that file's module.exports. 
var haiku = require('./haiku_generator'); 
//module.exports.createHaiku(structure); the function we want is on the module.exports obj. 


//read the file, turn to a string, then save as cmudictFile var
var cmudictFile = readCmudictFile('./cmudict.txt'); 

function readCmudictFile(file){
	return fs.readFileSync(file).toString(); 
}

//i want an object of arrays ow to 
var arrData = []; 


function formatData(data){
	var lines = data.toString().split("\n"), 
		lineSplit
	lines.forEach(function(line){
		lineSplit = line.split("  "); 
		var singleArrData =[]; 
		//get the word in the array 
		singleArrData.push(lineSplit[0]); 

		//get the syllable number in the array 
		function syllableCounterFunc (phonemeLayout){
			var count = phonemeLayout.match(/\d/g); 
			singleArrData.push(count.length); 
		}
		syllableCounterFunc(lineSplit[1]); 


		arrData.push(singleArrData); 
		// console.log(arrData); 
		// console.log("Word: " + lineSplit[0] + " Phoneme Layout: " + lineSplit[1]); 
		console.log(arrData); 
	}); 
}
formatData(cmudictFile); 



//1) identify syllables- 
//if str has a number, increase syllableCounter 
//lineSplit[1]











// haiku.createHaiku([5,7,5]); 


