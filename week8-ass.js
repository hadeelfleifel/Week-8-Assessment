// es5
//q1:
function Animal(){
	this.animalName='Lussy';
	this.type='Dog';
	this.newAnimalName=function(){
		return console.log(this.animalName)
	}
	// this.createElement=function(){
	// 	return $('body').append({this.type})//jQuery
	// 	}
	}

	const anim = new Animal();
	anim.newAnimalName();
	anim.createElement();



//es6
//q2

class shape{
    constructor(){
	this.height='13CM'
	this.length='12CM'
	this.area='256CM2'
	}
    getteArea=()=>{
		return console.log(this.area)
	}
}
var newShap= new shape();
newShap.getteArea();



//es6+arrowfun
//q3

// arr=['hello','hi','hadeel']
filterArray =(arr)=>{
	let array=arr.filter(x => { return x.length<=4})
	return (array)
}
console.log(filterArray(['Food','Pasta','Pizza','Eat']));


