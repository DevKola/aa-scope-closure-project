/***********************************************************************
Write a function named interrupter that accepts a single parameter `i  `:
  `interrupter(interruptingWord)`
The interrupter function should return a function.
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  // Your code here
  function sentenceAdd(str) {
    const output = [];
    const strCpy = str.split(" ");
    let last = strCpy[strCpy.length - 1];
    for (let i = 0; i < strCpy.length - 1; i++) {
      const el = strCpy[i];
      output.push(el, interruptingWord);
    }
    output.push(last);
    return output.join(" ");
  }
  return sentenceAdd;
}

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"

//Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
