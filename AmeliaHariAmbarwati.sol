// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

contract AmeliaHariAmbarwati {
    uint umur = 21;
    string alamat = "Surabaya";
    string private _email = "ameliahariambarwati@gmail.com";

    struct Blockchain {
        string nama;
        uint chain_id;
    }

    Blockchain[] public blockchains;

    function getEmail() public view returns (string memory) {
        return _email;
    }

    function addBlockchain(string memory _nama, uint _chain_id) public {
        blockchains.push(Blockchain(_nama, _chain_id));
    }

    function changeEmail(string memory email) public returns (string memory) {
        _email = email;
        return email;
    }
}