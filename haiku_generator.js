//MODULE 


//we will use the exports object (how we'll define our module's interface, aka
//the things it makes visable in the larger application)

//make these function part of our module's interface so other files can use them. 
function createHaiku(structure){
	console.log("this should log a haiku with the structure" + structure); 
}

//set module.exports obj to a custom obj that references createHaiku. 
//
module.exports = {
	createHaiku: createHaiku,
}

//same as above for exporting 
// module.exports.createHaiku = createHaiku; 

//---------------------------------------------------------------



