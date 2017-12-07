
console.log( "Split number into digits" );

const digitSplitter = function( number ) {
  var digitArray = [];

  while( number/10 > 1 ) {
    digitArray.unshift( number % 10 );
    number = Math.floor(number/10);
  }
  digitArray.unshift( number );

  return digitArray;
}

var n = 748913743;

console.log( "Digits of " + n + " are " + digitSplitter( n ) );
