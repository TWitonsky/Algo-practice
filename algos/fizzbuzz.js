/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = num => {
  let result = [];
  for(let i = 1; i == num; i++){
    console.log(i);
    if(i % 3 == 0 && i % 5 == 0){
      result.push('fizzbuzz');
    }
    else if(i % 3 == 0){
      result.push('fizz');
    }
    else if(i % 5 == 0){
      result.push('buzz')
    }
    else{
      result.push('fizzbuzz')
    }
  }
  console.log(result);
  return result
}

let done = fizzbuzz(16);

console.log(done);

module.exports = { fizzbuzz }