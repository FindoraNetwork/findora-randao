import { ethers } from 'hardhat';

async function main() {
  try {
    const randao = await ethers.deployContract('Randao');

    await randao.waitForDeployment();

    console.log(`Randao deployed to ${randao.target}`);
  } catch (err) {
    console.log('Randao deploy error: ', err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
