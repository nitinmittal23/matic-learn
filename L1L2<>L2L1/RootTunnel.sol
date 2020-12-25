pragma solidity 0.6.6;

// https://github.com/maticnetwork/pos-portal/blob/master/contracts/tunnel/BaseRootTunnel.sol
import {BaseRootTunnel} from "./BaseRootTunnel.sol";

contract RootTunnel is BaseRootTunnel {
    uint256 public sum;
    uint256 public sumFromChildChain;

    function _processMessageFromChild(bytes memory message) internal override {
        (uint256 n) = abi.decode(message, (uint256));
        sumFromChildChain = n;
    }

    function calculateSumOnChildChain(uint256 number) external {
        _sendMessageToChild(abi.encode(number));
    }

    // reference function to do full calculation on ethereum
    function calculateSum(uint256 number) external {
        sum = 0;
        for (; number > 0; number--) {
            sum += number;
        }
    }
}