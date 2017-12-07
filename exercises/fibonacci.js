
console.log( "Fibonacci Problem" );

const fibonacci = function() {
  let current = 0;
  let next = 1;
  let holdnext;

  for( var i = 1; i <= 10; i++ ) {
    console.log( current );
    holdnext = next;
    next = current + next;
    current = holdnext;

    // without holder
    //next = current + next;
    //current = next - curren;
  }
}

fibonacci();
