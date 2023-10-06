// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract Perpustakaan {
    address public admin; // Alamat admin
    struct Buku {
        string isbn;
        string judul;
        uint256 tahun;
        string penulis;
    }
    
    mapping(string => Buku) public bukuData;
    
    event BukuDitambahkan(string isbn);
    event BukuDiperbarui(string isbn);
    event BukuDihapus(string isbn);
    
    modifier hanyaAdmin() {
        require(msg.sender == admin, "Hanya admin yang bisa melakukan ini");
        _;
    }
    
    constructor() {
        admin = msg.sender; // Set admin saat kontrak dibuat
    }
    
    function tambahBuku(string calldata _isbn, string calldata _judul, uint256 _tahun, string calldata _penulis) external hanyaAdmin {
        require(bytes(bukuData[_isbn].isbn).length == 0, "Buku dengan ISBN tersebut sudah ada");
        
        Buku memory buku = Buku({
            isbn: _isbn,
            judul: _judul,
            tahun: _tahun,
            penulis: _penulis
        });
        
        bukuData[_isbn] = buku;
        emit BukuDitambahkan(_isbn);
    }
    
    function perbaruiBuku(string calldata _isbn, string calldata _judul, uint256 _tahun, string calldata _penulis) external hanyaAdmin {
        require(bytes(bukuData[_isbn].isbn).length != 0, "Buku dengan ISBN tersebut tidak ditemukan");
        
        bukuData[_isbn].judul = _judul;
        bukuData[_isbn].tahun = _tahun;
        bukuData[_isbn].penulis = _penulis;
        
        emit BukuDiperbarui(_isbn);
    }
    
    function hapusBuku(string calldata _isbn) external hanyaAdmin {
        require(bytes(bukuData[_isbn].isbn).length != 0, "Buku dengan ISBN tersebut tidak ditemukan");
        
        delete bukuData[_isbn];
        emit BukuDihapus(_isbn);
    }
    
    function getDataBuku(string calldata _isbn) external view returns (string memory, string memory, uint256, string memory) {
        require(bytes(bukuData[_isbn].isbn).length != 0, "Buku dengan ISBN tersebut tidak ditemukan");
        
        Buku memory buku = bukuData[_isbn];
        return (buku.isbn, buku.judul, buku.tahun, buku.penulis);
    }
}
