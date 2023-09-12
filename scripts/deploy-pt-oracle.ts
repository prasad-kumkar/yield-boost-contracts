import { ethers } from "hardhat";

async function main(ptOracle: string, market: string, underlyingFeed: string) {
    let PtFeedFactory = await ethers.getContractFactory("PTPriceFeed");
    let ptFeed = await PtFeedFactory.deploy(
        ptOracle,
        market,
        underlyingFeed
    );

    console.log("pt-wstETH price:", (await ptFeed.latestAnswer()).toString());
    console.log("PT Feed deployed to:", ptFeed.address);
    return;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main("0x1f6Cee6740e1492C279532348137FF40E0f23D05", "0xC8fD1F1E059d97ec71AE566DD6ca788DC92f36AF", "0x43E56DAeA2121f7aef832e1A024015B0cC52CB95").catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
