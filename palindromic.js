function palindromic(word)
{
  var ogWord = word.toLowerCase();
  console.log("Original Word: " + ogWord);

  var makeArray = word.split("");
  console.log("Array Made: " + makeArray);

  var reverseArray = makeArray.reverse();
  console.log("Array Reversed: " + reverseArray);

  var joinArray = reverseArray.join("").toLowerCase();
  console.log("Array Joined into String: " + joinArray);

  if (ogWord === joinArray)
  {
    return true;
  }

  return false;
}
console.log(palindromic('rAcecar'));
