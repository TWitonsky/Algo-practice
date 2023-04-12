const {arrayToLL} = require('../algos/arrayToLL');
const {llToArray} = require('../algos/llToArray');
const {deleteDuplicates} = require('../algos/deleteDuplicates');

describe('deleteDuplicates tests:', () => {  
  it('should delete duplicates in a sorted list', () => {
    expect(deleteDuplicates([1,1,2])).toEqual([1,2]);
    expect(deleteDuplicates([1,2])).toEqual([1,2]);
    expect(deleteDuplicates([1,1,2,3,3,4])).toEqual([1,2,3,4]);
  });
});