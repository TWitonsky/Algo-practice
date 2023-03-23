/*  Leetcode problem 14 - Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

function should handle 0 <= strs.length
*/

const longestCommonPrefix = (strs) => {
  if(strs.length === 0 ) return '';
  //set the result to the first item and then will take things off
  let result = strs[0];
  for(let i = 1; i <strs.length; i++){
    while(strs[i].indexOf(result) != 0){
      result = result.substring(0, result.length - 1);
    }
  }
  return result;
}


let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs)); //Output: "fl"


let strs2 = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs2)); //Output: ''

module.exports = {longestCommonPrefix};