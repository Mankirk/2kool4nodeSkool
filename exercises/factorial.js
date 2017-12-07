
console.log( "Factorial problem" )

const factorial = function( number ) {
  var total = 1;
  var currentNumber = number

  while( currentNumber > 0 ) {
    console.log( "currentNumber: " + currentNumber );
    total = total * currentNumber;
    currentNumber = currentNumber - 1;
  }

  return total
}

var n = 5;

console.log( "Factorial of " + n + " is: " + factorial( n ) )
