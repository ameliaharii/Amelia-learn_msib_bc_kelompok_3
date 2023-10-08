require("@nomicfoundation/hardhat-toolbox");
require('hardhat-ethernal');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  hardhat: {
    url: "http://localhost:8545",
    accounts: ["0x5f5bae3daa10df8bc6df024b8d1b73c714a324de3731adb83107a615a333e4ea"]
  },
  mumbai_testnet: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: ["0x5f5bae3daa10df8bc6df024b8d1b73c714a324de3731adb83107a615a333e4ea"]
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  //ethernal: {
  //  apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJlYmFzZVVzZXJJZCI6IlJpSzRJcWRsd2lRUVhJQUlDckxzYTNPb0cyTDIiLCJhcGlLZXkiOiJFRDFaS0ExLVZFQjRLWkItTVZCRTVHQi1LSkQxRDIyXHUwMDAxIiwiaWF0IjoxNjk2NzUwNzc2fQ.CuigyGv4PLUuu0LmP1uySt4Q8qoMl34ZPgoqS_Qw7eE"
  //}  
};

//1;46;25