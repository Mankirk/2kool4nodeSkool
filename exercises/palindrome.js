console.log( "Palindrome Problem" );

const word = "aerisirea";

const checkPalindrome = function( word ) {
  for( var i=0; i < word.length; i++ ) {
    console.log( "pair ", word[i], word[ (word.length - 1 ) - i ] )
    if( word[i] !== word[ (word.length -1 ) - i ] ) {
      return word + " is not a palindrome";
    }
  }

  return word + " is palindrome";
}

console.log( checkPalindrome( word ) );
