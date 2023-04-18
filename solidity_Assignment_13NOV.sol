pragma solidity ^0.8.0;

contract ArrayRemoval {
    uint[] public data;

    function remove(uint index) public {
        require(index < data.length, "Index out of bounds");

        for (uint i = index; i < data.length - 1; i++) {
            data[i] = data[i + 1];
        }
        data.pop();
    }
}
