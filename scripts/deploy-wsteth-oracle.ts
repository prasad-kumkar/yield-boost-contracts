import { ethers } from "hardhat";

async function main(wstethFeed: string, ethFeed: string) {
  let SecondaryFeedFactory = await ethers.getContractFactory("SecondaryOracle");
    let secondaryFeed = await SecondaryFeedFactory.deploy(wstethFeed, ethFeed);
    console.log("wstETH price:", (await secondaryFeed.latestAnswer()).toString());
    console.log("wstETH Feed deployed to:", secondaryFeed.address);
    return;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main("0xb523AE262D20A936BC152e6023996e46FDC2A95D", "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612").catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
