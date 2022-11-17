/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY="9ARlMT7r31q130-NMRLZwaOZK5fntANr";
const GOERLI_PRIVATE_KEY="552cc33572ba0e15e4cd32a1568f28af1551f7524be4b0c532e5ec93728e8cf9";
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLI_PRIVATE_KEY}`],
    }
  }
};
