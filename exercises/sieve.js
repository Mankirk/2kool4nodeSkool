
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

  while( currentElement*n < 100 ) {
    var removalIndex = array.indexOf( currentElement * n );
    if( removalIndex ) {
      array.splice( removalIndex, 1 );
        console.log( "multiple of ", currentElement, ":", currentElement * n , " removed " )
    }

    n = n + 1;
    console.log( "arr",array )
  }

  console.log( "removed " + currentElement + "'s multiples " )
  //console.log( "remaining", array );
  return array;
}

const findPrimes = function( array ) {
  var currentElement = 2; // p from wikipedia
  var currentIndex = 0;

  // while ( currentElement * 2 < 100  ) {
  //   array = removeMultiples( array, currentElement );
  //   currentIndex = currentIndex + 1;
  //   currentElement = array[ currentIndex ];
  // }

  wo2 = removeMultiples( array, 2 );
  wo3 = removeMultiples( wo2, 3 );

  return wo3;
}

console.log( findPrimes( makeArray() ) )
