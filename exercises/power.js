
console.log( "Power problem" );

var base1 = 2;
var exponent1 = 3;

const power = function( base, exponent ) {
  var total = 1;
  var exponentIterator = exponent;

  while( exponentIterator > 0 ) {
    total = total * base;
    exponentIterator = exponentIterator - 1;
  }

  return total;
}

console.log( base1 + " to the power " + exponent1 + " is " + power( base1, exponent1 ) )
