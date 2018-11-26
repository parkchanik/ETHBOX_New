var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "record legend civil caught fade alien hybrid rhythm mad cereal chapter ritual";

var accessToken = "1179051cc5664515b5869513a4a9f3ff";
0x5af562Cb7934856e922440DDcEc15E5a76870F1e
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
    ,ropsten: {
      host: 'localhost',
      port: 7545,
      network_id: '3', // Match any network id
      from: '0xbbf0f5b41b1d39394d57d6c39e2c94725cdbf59a',
      gas: 2000000,
      /*
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + accessToken,1)
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
      //from: fromAddress
      */
    },
    live: {
      host: "https://mainnet.infura.io/JetGLiRlFbGMg881pVTc",
      netword_id: "*"
    }

  }
};
