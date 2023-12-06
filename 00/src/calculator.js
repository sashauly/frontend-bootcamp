function one(callback) {
  if (callback) {
    return callback(1);
  }
  return 1;
}
function two(callback) {
  if (callback) {
    return callback(2);
  }
  return 2;
}
function three(callback) {
  if (callback) {
    return callback(3);
  }
  return 3;
}
function four(callback) {
  if (callback) {
    return callback(4);
  }
  return 4;
}
function five(callback) {
  if (callback) {
    return callback(5);
  }
  return 5;
}
function six(callback) {
  if (callback) {
    return callback(6);
  }
  return 6;
}
function seven(callback) {
  if (callback) {
    return callback(7);
  }
  return 7;
}
function eight(callback) {
  if (callback) {
    return callback(8);
  }
  return 8;
}
function nine(callback) {
  if (callback) {
    return callback(9);
  }
  return 9;
}

function plus(a) {
  return (b) => a + b;
}

function minus(a) {
  return (b) => b - a;
}

function divide(a) {
  return (b) => b / a;
}

function mult(a) {
  return (b) => a * b;
}

module.exports = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  mult,
  divide,
};

// console.log(one(mult(three(plus(four()))))); // В итоге вернется 7
