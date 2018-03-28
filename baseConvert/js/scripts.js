
// a function convert binary to decimle
solution:
// - loop through the binary string from the end and mutiply 2**i and add them all up

// aString: a binary string
// return: decimle number
var biToDe = function(aString){
  var result = 0;
  var len = aString.length;
  for(var i = 0; i < len; i++){
    debugger;
    result += aString[len - i - 1]*2**i;
  }
  return result;
};

alert(biToDe('11'));

// var convert = function(aString, base)
