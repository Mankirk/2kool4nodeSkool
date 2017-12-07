
console.log( "Average problem" );

var numbersArray = [ 0, 100, 40, 60, 10, 90 ];

const averaginator = function( numbers ) {
   var sum = 0;

   for( var i = 0 ; i < numbers.length; i++ ) {
      sum = sum + numbers[ i ];
   }

   return sum/numbers.length;
}

console.log( "Average for " + numbersArray + " is " + averaginator( numbersArray ) )
