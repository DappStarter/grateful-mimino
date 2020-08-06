require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember pudding hope enter orange genuine'; 
let testAccounts = [
"0x31449ff5905836f60bc7fe742d9faccc4055b6461689f16856e57828a6c19605",
"0x5dd8f01c8834bdad14fdcec59950756673fe4a68e0058b13c880d4547f692a5c",
"0xab99d8aa725e966da454add787ea51655a01b0dea3029a3852abe5a0216f39e9",
"0x54915d90f5cd1d1f38a4e0b755a7bffa25c2fd8865b139e29c1b7106b614fc83",
"0xee7a0eaf5d5f2921443a5d5b797f85b3e212f0c567a133e83480d55ada709d00",
"0x666273f20366e9b8e88d80b9455926190981f93f3ecc99f7529bf31f444ee301",
"0x5f7e92858c65fb4f7d8ca581e963771fc6a7673b8347a4ef3a9dc48144edec23",
"0x058b3ffd84d1cf65d03f14d6a0b13d51fb4f7a1677ebbe1eab9a18398586ec9f",
"0x8bdd0bea92d359838e7700b0d7889ef4f39a368b5823340299dd1e4c99d5cde9",
"0x13199a1b60ad66339734bcafecf086a5422bb1d8a157fe22257b9a237950e021"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
