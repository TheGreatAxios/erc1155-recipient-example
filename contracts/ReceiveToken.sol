// contracts/ReceiveToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract ReceiveToken is ERC1155Holder {
    function checkBalance(address _erc1155, uint256 _tokenId) public view returns(uint256){
        IERC1155 erc1155 = IERC1155(_erc1155);
        uint balance = erc1155.balanceOf(msg.sender, _tokenId);
        return balance;
    }

    // function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes memory data) public virtual returns (bytes4) {
    //     return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    // }
}
