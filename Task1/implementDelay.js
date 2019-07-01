var foo = function () { //let!!!
  alert("bingo!");
};

function bar() {
  alert("Wow!");
}

/**
 * Solution
 */

Function.prototype.delay = function (time) {
  let timeout = setTimeout(() => {
    clearTimeout(timeout);
    this();
  }, time)
}

/**
 * Call function
 */

foo.delay(300); // после 0.3s: "bingo!"
bar.delay(600); // после 0.6s: "Wow!"


