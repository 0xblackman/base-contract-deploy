async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const BaseCounter = await ethers.getContractFactory("BaseCounter");
  const counter = await BaseCounter.deploy();
  await counter.deployed();

  console.log("BaseCounter deployed to:", counter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
