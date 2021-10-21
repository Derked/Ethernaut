const { ethers } = require("hardhat")

async function main() {

	const [deployer] = await ethers.getSigners();
	console.log("Deploying contract with account: ", deployer.address);

	const hackContract = await ethers.getContractFactory('OwnTelephone');	
	const deployedHackContract = await hackContract.deploy();

	console.log('Deployed Hack to address: ', deployedHackContract.address);

};

 
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
