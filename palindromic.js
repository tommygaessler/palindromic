function palindromic(word)
{
  word = word.toLowerCase().replace(' ','');
  
  if (word.split("").reverse().join("") === word)
  {
    return true;
  }
  return false;
}
console.log(palindromic('rAcecar'));
