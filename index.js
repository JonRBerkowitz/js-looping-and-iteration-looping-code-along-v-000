// Code your solutions in this file
function printBadges(ary) {
  for (let i = 0; i < ary.length; i++) {
    console.log(`Welcome ${ary[i]}! You are employee #${i + 1}.`);
  }
  return ary;
}
