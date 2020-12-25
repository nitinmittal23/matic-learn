pragma solidity 0.6.6;

// https://github.com/maticnetwork/pos-portal/blob/master/contracts/tunnel/BaseChildTunnel.sol
import {BaseChildTunnel} from "./BaseChildTunnel.sol";

contract ChildTunnel is BaseChildTunnel {
    uint256 public sum;

    function _processMessageFromRoot(bytes memory message) internal override {
        uint256 number = abi.decode(message, (uint256));
        sum = 0;
        for (; number > 0; number--) {
            sum += number;
        }
    }

    function sendSumToRoot() external {
        _sendMessageToRoot(abi.encode(sum));
    }
}