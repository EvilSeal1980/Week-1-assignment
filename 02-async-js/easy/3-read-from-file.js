// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

fs.readFile('/Users/evilseal/Course/Week-1-assignment/02-async-js/easy/file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  console.log('File contents:', data);

  // Perform an expensive operation here
  let counter = 0
  for (let i = 0; i < 1000000000; i++) {
    counter += 1;
  }
  console.log(counter);

  console.log('Expensive operation completed.');
});

let counter = 0
for (let i = 0; i < 100000; i++) {
  counter += 1;
}
console.log(counter);

console.log('Expensive operation completed.');

