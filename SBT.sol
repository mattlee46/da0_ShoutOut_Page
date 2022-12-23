// SPDX-License-Identifier: MIT
// Polygon測試鏈
// 合約地址：0x5D231b3E2e1Fcd7fda9169fC71a2e93CDC038180
// https://mumbai.polygonscan.com/address/0x5D231b3E2e1Fcd7fda9169fC71a2e93CDC038180


pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DA0IncentivizeBETA10 is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("DA0 incentivize BETA 10", "DA01") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://da0.g0v.tw/";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        require(from == address(0), "Err: token is SOUL BOUND");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}



