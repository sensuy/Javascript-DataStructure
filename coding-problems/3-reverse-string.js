function reverseString(str) {
  // your code here
  // "Hi My name is Andrei"
  const arrayOfLetters = str.split("");

  for (let i = 0; i < arrayOfLetters.length / 2; i++) {
    const temp = arrayOfLetters[i];
    arrayOfLetters[i] = arrayOfLetters[arrayOfLetters.length - 1 - i];
    arrayOfLetters[arrayOfLetters.length - 1 - i] = temp;
  }
  return arrayOfLetters.join("");
}

console.log(reverseString("Hi My name is Andrei"));
