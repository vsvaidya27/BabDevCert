//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract vending {
    int public toys = 100;

    // function setNumtoys(address owner, int _toys) public {
    //     require(owner == msg.sender);
    //     toys = _toys;
    // }

    function getToy() public returns (int) {
        return --toys;
    }
}
