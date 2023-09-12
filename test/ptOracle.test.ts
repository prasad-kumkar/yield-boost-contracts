import { ethers } from "hardhat";

describe("Testing oracles", function () {

	let owner: any, user1: any, user2: any, user3: any;

	before(async () => {
		// Contracts are deployed using the first signer/account by default
		[owner, user1, user2, user3] = await ethers.getSigners();
	});

	it("should deploy pt oracle for wsteth dec 2023", async function () {
        let SecondaryFeedFactory = await ethers.getContractFactory("SecondaryOracle");
        let secondaryFeed = await SecondaryFeedFactory.deploy(
            "0xb523AE262D20A936BC152e6023996e46FDC2A95D", // wstETH
            "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612", // ETH
        );

        console.log("wstETH price:", (await secondaryFeed.latestAnswer()).toString());
        
        let PtFeedFactory = await ethers.getContractFactory("PTPriceFeed");
        let ptFeed = await PtFeedFactory.deploy(
            "0x1f6Cee6740e1492C279532348137FF40E0f23D05",
            "0xC8fD1F1E059d97ec71AE566DD6ca788DC92f36AF",
            secondaryFeed.address
        );

        console.log("pt-wstETH price:", (await ptFeed.latestAnswer()).toString());
    });
});