
const { uuid } = require('uuid');

// multi-wallet-bal.js
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-project-id');

async function getBalances(walletAddresses) {
    const balances = {};
    const promises = walletAddresses.map(async address => {
        const balance = await web3.eth.getBalance(address);
        balances[address] = web3.utils.fromWei(balance, 'ether');
    });
    await Promise.all(promises);
    return balances;
}

module.exports = getBalances;


module.exports = { getBalances };
