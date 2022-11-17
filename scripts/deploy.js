const { ethers } = require("hardhat");

// deploying via testnets
async function main(){
    // const [deployer] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("myNFT");
    const token = await MyNFT.deploy();
    console.log("Token Address : ",token.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
