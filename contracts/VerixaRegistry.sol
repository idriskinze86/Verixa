// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract VerixaRegistry {
    struct Record {
        address owner;
        uint256 timestamp;
    }

    mapping(bytes32 => Record) public records;

    event Registered(
        bytes32 indexed hash,
        address indexed owner,
        uint256 timestamp
    );

    function register(bytes32 hash) external {
        require(records[hash].owner == address(0), "Hash already registered");

        records[hash] = Record({
            owner: msg.sender,
            timestamp: block.timestamp
        });

        emit Registered(hash, msg.sender, block.timestamp);
    }

    function verify(
        bytes32 hash
    ) external view returns (
        bool exists,
        address owner,
        uint256 timestamp
    ) {
        Record memory record = records[hash];

        if (record.owner == address(0)) {
            return (false, address(0), 0);
        }

        return (
            true,
            record.owner,
            record.timestamp
        );
    }
}