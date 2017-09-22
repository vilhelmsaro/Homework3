const counterVolOfBox = function(height , width, length) {
  const calculate = (height * width * length) 
  return calculate; 
};


const nothig = function(){
	const meaning=("I have no idea what i got..")
	return meaning;
};


const norespond = function(GPUgeneration , RAMmemory , CPUgeneration){
  const LevelOfPc = (GPUgeneration + RAMmemory + CPUgeneration );
	console.log(LevelOfPc);
};

const fullName = function (firstname , lastname){
  const decision = (firstname + " " + lastname);
	return decision;
};


const wordCounter = function (string1 , string2, string3) {
	if (string1.length > string2.length && string1.length > string3.length){
		return string1;
	} else if (string2.length > string1.length && string2.length > string3.length){
		return string2;
	}
	else if (string3.length > string1.length && string3.length > string1.length){
		return string3;
	}
	else return "Panic, there are evens";
};
	
	
const numbers = function (num1 , num2){
	if (num1 === num2){
		return 0;
	} else if (num1 > num2){
		return 1;
	} else return -1;
};
	
  
const ThreeValues= function(input1 , input2 , input3){
  if ( !!input1 === true ) {
    return input1;
  } else if( !!input2 === true) {
  return input2;
  } else if (!!input3) {
    return input3;
  }
};