// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BaseCounter {
    string public name = "Base Counter";
    uint256 public count;

    event CountIncremented(address indexed caller, uint256 newCount);

    function increment() external returns (uint256) {
        count += 1;
        emit CountIncremented(msg.sender, count);
        return count;
    }

    function reset() external {
        count = 0;
    }
}
