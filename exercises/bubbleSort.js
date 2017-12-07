
console.log( "Bubble Sort" );

var numberArray = [ 4, 6, 48, -2, 12, 1, 3, 41 ];

const bubbleSort = function( numberArray ) {
  const numbers = numberArray;

   for( var i = 0; i < numbers.length; i ++ ) {
     for( var j = 0; j <= i  ; j++ ) {
       if( numbers[ j ] > numbers[ j + 1 ] ) {

         var temp = numbers[ j ];
         numbers[ j ] = numbers[ j + 1 ];
         numbers[ j + 1 ] = temp;
       }
     }
   }

   return numbers;
}

console.log( "unsorted: " + numberArray );
console.log( "sorted: " + bubbleSort( numberArray ) );
