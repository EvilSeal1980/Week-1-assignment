// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const filePath = '/Users/evilseal/Course/Week-1-assignment/02-async-js/easy/file.txt';
const content = 'Hello world!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File write operation completed.');

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
