// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import '../proxy/BananaAccountProxy.sol';

interface IProxyCreationCallback {
    function proxyCreated(
        BananaAccountProxy proxy,
        address _singleton,
        bytes calldata initializer,
        uint256 saltNonce
    ) external;
}
