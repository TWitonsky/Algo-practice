const { longestCommonPrefix } = require('../algos/longest-common-prefix');

describe('longest common prefix tests:', () => {
  it('it should come up with the longest commen prefix', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
    expect(longestCommonPrefix(["dog","racecar","trash"])).toEqual('');
  });

});