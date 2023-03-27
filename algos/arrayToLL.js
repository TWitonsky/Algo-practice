/* 
Write an algorithm that converts an array to a linked list. Return the head node. 
*/
const { Node, LinkedList } = require('../linkedList');

const arrayToLL = (arr) => {
  let node, temp;
  for(let i=a.length-1; i >= 0; i--){
    if(!node){
      node = new Node(a[i]);
    }
    else {
      temp = new Node(a[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}

module.exports = { arrayToLL }