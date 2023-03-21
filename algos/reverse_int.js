/*
Given an integer x, return x with it's digits reversed. 

i.e. 

reverseInt(592) --> 295

reverseInt(-12) --> -21
*/

function reverseInt(x){
  let negative = Math.sign(x);

  Math.abs(x);
  //puts its to string, splits each part, reverses it, rejoins.
  let result = x.toString().split('').reverse().join('');
  //The above wont get the - so need to times it by a -1 or 1, Javascript math.sign does that
  result * negative;

  return result;
};

console.log(reverseInt(592)); //--> 295

console.log(reverseInt(-12)); // --> -21

module.exports = {reverseInt};