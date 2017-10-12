
var word=(prompt("Escribe una palabra"));
 console.log(word.split(''));
 for(i=0;i<word.length;i++){

var cipher=(word.charCodeAt(i));
  console.log(cipher);

  var decipher=(cipher-65+33)% 26+65;
  console.log (decipher);
 }
