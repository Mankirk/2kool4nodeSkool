
console.log( "Sieve of Eratostenes" );

const makeArray = function() {
  var numbers = [];

  for( var i = 2; i<=100; i++ ) {
    numbers.push( i );
  }

  return numbers
}

const removeMultiples = function( array, currentElement ) {
  var n = 2;

  while( currentElement*n <= 100 ) {
    var removalIndex = array.indexOf( currentElement * n );
    if( removalIndex !== -1 ) {
      array.splice( removalIndex, 1 );
    }

    n = n + 1;
  }

  return array;
}

const findPrimes = function( array ) {
  var currentElement = 2; // p from wikipedia
  var currentIndex = 0;

  while ( currentElement * 2 <= 100  ) {
    array = removeMultiples( array, currentElement );
    currentIndex = currentIndex + 1;
    currentElement = array[ currentIndex ];
  }

  return array;
}

console.log( findPrimes( makeArray() ) )
