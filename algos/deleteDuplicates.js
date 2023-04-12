/*
Leetcode Problem 83 - Remove Duplicates from a sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

const deleteDuplicates = (head) => {
  let temp = head;
  while(temp.next != null && temp != null){
    if(temp.val == head.next.val){
      temp.next = temp.next.next;
    }
    else{
     temp = temp.next
    }
  }
  return head;
};



module.exports = { deleteDuplicates };