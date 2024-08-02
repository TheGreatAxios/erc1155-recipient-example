// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameItems is ERC1155 {
    uint256 public tokenId = 1;

    constructor() public ERC1155("https://game.example/api/item/{id}.json") {
        _mint(msg.sender, tokenId, 1, "");
    }

    function mint(uint amount) public {
        _mint(msg.sender, tokenId, amount, "");
        tokenId++;
    }
}