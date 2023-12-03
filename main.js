const { ethers } = require('ethers');

// Enter your Ethereum wallet address
const walletAddress = '0xYourWalletAddress';

// Create a provider (in this case, the Infura provider is used)
const provider = new ethers.providers.InfuraProvider('ropsten', 'YourInfuraApiKey');

// Get your wallet balance
async function getBalance() {
    try {
        const balance = await provider.getBalance(walletAddress);
        console.log(`Balance of ${walletAddress}: ${ethers.utils.formatEther(balance)} ETH`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to get the balance
getBalance();
