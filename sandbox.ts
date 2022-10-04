
// creating a const name mario, this is now a string
const character = 'luigi';

// can now output const to console
console.log(character);

// interacting with dom using the query selector just like in vanilla js
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

// sudo tsc filename.ts -w  
// this sets up watch command to live re-compile when file saved w/ changes