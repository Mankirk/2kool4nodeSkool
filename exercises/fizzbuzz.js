
console.log( "Fizz - Buzz Problem" );

const fizzbuzz = function() {
  for( var i = 0; i <= 30; i++ ) {
    if( i%5 === 0 && i%3 === 0 ){
      console.log( i, "fizz-buzz" )
    } else if( i%3 === 0 ) {
      console.log( i, "fizz" )
    } else if( i%5 === 0 ) {
      console.log( i, "buzz" )
    }
  }
}

fizzbuzz();
