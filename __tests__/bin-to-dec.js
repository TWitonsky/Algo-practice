const {binToDec} = require('../algos/bin-to-dec.js');

describe('binToDec test', ()=>{
  it('should convert string into a number', () => {
    expect(binToDec('101')).toEqual(5);
    expect(binToDec('10')).toEqual(2);
    expect(binToDec('0101')).toEqual(5);
  });
});
