
console.log( "Min-Max problem" )

const numberArray = [ -4, 54, 196, 2, -53, 8, 21 ];

const findMax = function( numberArray ) {
  var candidate = -2000;

  for( var i = 0 ; i < numberArray.length ; i++ ) {
    if( numberArray[ i ] > candidate ) {
      candidate = numberArray[ i ];
    }
  }
  return candidate;
}

const findMin = function( numberArray ) {
  var candidate = 2000;

  for( var i = 0 ; i < numberArray.length ; i++ ) {
    if( numberArray[ i ] < candidate ) {
      candidate = numberArray[ i ];
    }
  }
  return candidate;
}

console.log(
             "Max is: " + findMax( numberArray ) + " " +
             "Min is: " + findMin( numberArray )
           )
