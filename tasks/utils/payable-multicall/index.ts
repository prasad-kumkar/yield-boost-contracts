import hre, { ethers, upgrades } from 'hardhat';
import fs from 'fs';
import { _deploy as _deployEVM } from '../../../scripts/utils/helper';
import { _deploy as _deployDefender } from '../../../scripts/utils/defender';
import { BigNumber, Contract } from 'ethers';

export default async function main(value: BigNumber, isTest: boolean = false, _deploy = _deployEVM): Promise<Contract> {
    if (!isTest) console.log(`Deploying Router to ${hre.network.name} (${hre.network.config.chainId}) ...`);

    const deployments = JSON.parse(fs.readFileSync(process.cwd() + `/deployments/${hre.network.config.chainId}/deployments.json`, "utf8"));
    // deploy vault
    const args: any[] = [{value}];
    const router = await _deploy("PayableMulticall2", args, deployments) as Contract;
    if (!isTest) console.log(`PayableMulticall2 deployed at ${router.address} 🎉`);

    // save deployments file
    fs.writeFileSync(process.cwd() + `/deployments/${hre.network.config.chainId}/deployments.json`, JSON.stringify(deployments, null, 4));

    return {} as any //router;
}

main(ethers.utils.parseEther("0.0000001"))