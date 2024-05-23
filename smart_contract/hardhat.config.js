require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_KEY =
  "https://eth-sepolia.g.alchemy.com/v2/IXl98pd2tIB5lzo6JkXfgLVe0MmftWom";
const PRIVATE_KEY =
  "f84f28305451e17ee99be53d485d897a4aacf7fa3871c7717e8057a951242970";

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
