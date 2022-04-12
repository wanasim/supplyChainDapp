
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      // from: "0xbab69B1303FD3121285D7b9e1B8205680Ec832a7",
      network_id: 4,       // rinkeby's id
      gas: 5500000,        // rinkeby has a lower block limit than mainnet

    },
  },
compilers:{
  solc:{
    version:"^0.4.24"
  }
}
};