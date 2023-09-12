// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../dependencies/chainlink/AggregatorInterface.sol";
import "@pendle/core-v2/contracts/oracles/PendlePtOracle.sol";

contract PTPriceFeed is AggregatorInterface {
    address public immutable market;
    address public immutable ptOracle;
    address public immutable underlyingFeed;
    uint32 public immutable twapDuration = 60 seconds;

    constructor(address _ptOracle, address _market, address _underlyingFeed) {
        ptOracle = _ptOracle;
        market = _market;
        underlyingFeed = _underlyingFeed;
    }

    function latestAnswer() public view returns (int256){
        int256 ptRate = int256(PendlePtOracle(ptOracle).getPtToAssetRate(market, twapDuration));
        int256 assetPrice = AggregatorInterface(underlyingFeed).latestAnswer();
        return (assetPrice * ptRate) / (10 ** 18);
    }

    function latestTimestamp() public view returns (uint256){
        return block.timestamp;
    }

    function latestRound() external view returns (uint256){
        return 0;
    }

    function getAnswer(uint256 roundId) external view returns (int256){
        return latestAnswer();
    }

    function getTimestamp(uint256 roundId) external view returns (uint256){
        return latestTimestamp();
    }
}