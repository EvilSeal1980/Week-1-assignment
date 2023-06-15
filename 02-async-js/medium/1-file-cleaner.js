// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

const { x } = require("tar");

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

function FileCleaner(s) {
    let s1 = s.trim().split(/\s+/);
    let s2 = s1.filter(x => x !== " ");
    s2 = s2.join(" ");
    return s2;
}

let string = "hello     world    my    name   is       raman";
console.log(FileCleaner(string)); 