// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startCounter() {
    let counter = 0;
    let loop = 0;
  
    function incrementCounter() {
      counter++;
      console.log(counter);

      if (loop <= 1) {
        setTimeout(incrementCounter, 1000);
      }
    }
  
    incrementCounter();
  }
  
  startCounter();
  






































































// (Hint: setTimeout)