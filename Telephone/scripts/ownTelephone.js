const { ethers } = require("hardhat");
const OwnTelephone = require("../artifacts/contracts/OwnTelephone.sol/OwnTelephone.json");
require("dotenv").config();

const main = async () => {
  const prov = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_API_KEY);
  const [signer] = await ethers.getSigners();
  const contractAddress = "0x287Ec31d707492e8fF58735e77cD5a4D7057D658";
  const contract = new ethers.Contract(contractAddress, OwnTelephone.abi, prov);
  const contractSigned = contract.connect(signer);
  const tx = await contractSigned.ownTelephone("0xba5c9233d6e44586E849F69F819997399Df704F0");
};

main();
