import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  const factory = await ethers.getContractFactory("VerixaRegistry");

  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("✅ VerixaRegistry deployed to:");
  console.log(await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
