
console.log( "Longest word problem" )

const string = "She sells seashells by the sea shore";

const longestWord = function( string ) {
  const splitString = string.split( " " );
  let longest = "a";

  for( var i = 0; i<splitString.length; i++ ) {
    if( splitString[ i ].length > longest.length ) {
      longest = splitString[i];
    }
  }

  return "Longest word is: " + longest;
}

console.log( longestWord( string )  )
