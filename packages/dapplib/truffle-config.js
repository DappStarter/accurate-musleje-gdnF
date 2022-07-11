require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember push inflict glimpse fold slogan'; 
let testAccounts = [
"0x31c3ddc02db4bff6e1f6662baf7759af2b7834cb92a2035c0ce5ec4c1559ad08",
"0xca6d08334ca0ca078fb27f647bf5f6b7655fb87c11b650848be93b61f8ed739f",
"0xa2885c30cff0bd78f0f3a2525e08f7e28371aab5f1abf2c93fc310b0473ad035",
"0x9cbd3cbd0f6d6d59ee85292a7b055266a9a072ace34ffce188eba4b56fa2036f",
"0xc27b023ea2a866f4a4883447d3293c30b29aec9f4d9d8ac73fb43fbf02f59335",
"0xa233e4b2e2a4925bc06709f4613ecbeaebfe6f67fe9980c005d6b0d6a9706101",
"0x93f60483715ee394739a8226bb865044ab6965689625b91281761916dfcc05d4",
"0x82951e71e35d669f6507b082fec71f37ba1ac85d55a151873ab79f2216da0cb6",
"0x53d6d4e057f96f79ff559ef73c0920cf1fb3683e78f652039ddead41a2fc78ee",
"0xeef700b46c3ba8a0fc81d891668358005c9cac3360373daaa56ff5413d234875"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


