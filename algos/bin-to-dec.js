/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

1 -> 1
10 -> 2
100 -> 4
1000 -> 8
10000 -> 16


For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
  let result = 0;
  let count = 0
  for(let i = binString.length - 1; i >= 0; i--){
    if(binString[i] == 1){
      result += Math.pow(2, count); 
    }
    count++;
  }
  return result;
}



module.exports = {binToDec};