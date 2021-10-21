const { ethers } = require("hardhat");
const BreakToken = require("../artifacts/contracts/BreakToken.sol/BreakToken.json");
require("dotenv").config();

const main = async () => {
  const prov = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_API_KEY);
  const [signer] = await ethers.getSigners();
  const contractAddress = "0x774242b9ea55541A96833f61c872BeA5C2eF27bF";
  const contract = new ethers.Contract(contractAddress, BreakToken.abi, prov);
  const contractSigned = contract.connect(signer);
  const tx = await contractSigned.takeAlot();
};

main();
