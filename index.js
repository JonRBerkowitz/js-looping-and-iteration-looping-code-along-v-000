// Code your solutions in this file
function printBadges(ary) {
  for (let i = 0; i < ary.length; i++) {
    console.log(`Welcome ${ary[i]}! You are employee #${i + 1}.`);
  }
  return ary;
}

function tailsNeverFails() {
  let i = 0;
  function flip() {
    return Math.random();
  }
  function counter() {
    return i++;
  }
  while flip() => 0.5 {
    flip();
  }
}
