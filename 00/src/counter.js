// Write the function of the Counter, which, for each call, will return the number 3 more than in the past.You can not use variables announced through VAR!

function makeCounter() {
  let count = -3;

  return () => {
    count += 3;
    return count;
  };
}

const counter = makeCounter();


module.exports = counter;

// counter(); // The function will return 0
// counter(); // The function will return 3
// counter(); // The function will return 6
// counter(); // The function will return 9
