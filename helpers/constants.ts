import { parseEther, parseUnits } from "ethers/lib/utils";
import {
  eEthereumNetwork,
  eMantleNetwork,
} from "./types";

// const {
//   version: coreVersion,
// }: {
//   version: string;
// } = require("@aave/core-v3/package.json");
// const {
//   version: peripheryVersion,
// }: {
//   _resolved: string;
//   version: string;
// } = require("@aave/periphery-v3/package.json");

export const V3_CORE_VERSION = "0.0.1";
export const V3_PERIPHERY_VERSION = "0.0.1";

export const PERCENTAGE_FACTOR = "10000";
export const HALF_PERCENTAGE = "5000";
export const oneEther = parseEther("1");
export const oneRay = parseUnits("1", 27);
export const MAX_UINT_AMOUNT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";
export const AAVE_REFERRAL = "0";

export const WRAPPED_NATIVE_TOKEN_PER_NETWORK: { [network: string]: string } = {
  [eEthereumNetwork.main]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  [eMantleNetwork.mantleTestnet] : "0x5b156dca04f775046064032e1f5e45fd1fcca1e0",
  [eMantleNetwork.mantle]: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
  [eEthereumNetwork.arbitrum]: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  [eEthereumNetwork.hardhat]: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"
};

export const ZERO_BYTES_32 =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export const MOCK_CHAINLINK_AGGREGATORS_PRICES: { [key: string]: string } = {
  AAVE: parseUnits("300", 8).toString(),
  WETH: parseUnits("4000", 8).toString(),
  ETH: parseUnits("4000", 8).toString(),
  DAI: parseUnits("1", 8).toString(),
  USDC: parseUnits("1", 8).toString(),
  USDT: parseUnits("1", 8).toString(),
  WBTC: parseUnits("60000", 8).toString(),
  BTC: parseUnits("60000", 8).toString(),
  USD: parseUnits("1", 8).toString(),
  LINK: parseUnits("30", 8).toString(),
  CRV: parseUnits("6", 8).toString(),
  BAL: parseUnits("19.70", 8).toString(),
  REW: parseUnits("1", 8).toString(),
  EURS: parseUnits("1.126", 8).toString(),
  ONE: parseUnits("0.28", 8).toString(),
  WONE: parseUnits("0.28", 8).toString(),
  WAVAX: parseUnits("86.59", 8).toString(),
  WFTM: parseUnits("2.42", 8).toString(),
  WMATIC: parseUnits("1.40", 8).toString(),
  SUSD: parseUnits("1", 8).toString(),
  SUSHI: parseUnits("2.95", 8).toString(),
  GHST: parseUnits("2.95", 8).toString(),
  AGEUR: parseUnits("1.126", 8).toString(),
  JEUR: parseUnits("1.126", 8).toString(),
  DPI: parseUnits("149", 8).toString(),
  CUSD: parseUnits("1", 18).toString(),
  FUSD: parseUnits("1", 18).toString(),
  CETH: parseUnits("4000", 18).toString(),
  CBTC: parseUnits("60000", 18).toString(),
  CDOGE:  parseUnits("0.078", 18).toString(),
  FEUR:  parseUnits("1.07", 18).toString(),
  FGBP: parseUnits("1.24", 18).toString(),
  FCNY: parseUnits("0.14", 18).toString(),
  MNT:parseUnits("4000", 8).toString(),
};

export const chainlinkAggregatorProxy: Record<string, string> = {
  main: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  tenderly: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  [eEthereumNetwork.sepolia]: "0x6c60d915c7a646860dba836ffcb7f112b6cfdc76",
};

export const chainlinkEthUsdAggregatorProxy: Record<string, string> = {
  main: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  tenderly: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  [eEthereumNetwork.sepolia]: "0x6c60d915c7a646860dba836ffcb7f112b6cfdc76",
};

export const ETHEREUM_SHORT_EXECUTOR =
  "0xEE56e2B3D491590B5b31738cC34d5232F378a8D5";

export const EMPTY_STORAGE_SLOT =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export const POOL_ADMIN: Record<string, string> = {
  [eEthereumNetwork.main]: ETHEREUM_SHORT_EXECUTOR,
  [eMantleNetwork.mantleTestnet]: "0xBf59B84c9a7aD688D87ABe3357f70039C1540006",
  [eMantleNetwork.mantle]: "0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C",
  [eEthereumNetwork.arbitrum]: "0xc98f11daaac76d3ef368fdf54fbba34ffd951976",
  [eEthereumNetwork.hardhat]: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
};

export const EMERGENCY_ADMIN: Record<string, string> = {
  [eEthereumNetwork.main]: ETHEREUM_SHORT_EXECUTOR,
  [eMantleNetwork.mantleTestnet]:"0xBf59B84c9a7aD688D87ABe3357f70039C1540006",
  [eMantleNetwork.mantle]: "0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C",
  [eEthereumNetwork.arbitrum]: "0xc98f11daaac76d3ef368fdf54fbba34ffd951976",
  [eEthereumNetwork.hardhat]: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
};

export const DEFAULT_NAMED_ACCOUNTS = {
  deployer: {
    default: 0,
  },
  aclAdmin: {
    default: 0,
  },
  emergencyAdmin: {
    default: 0,
  },
  poolAdmin: {
    default: 0,
  },
  addressesProviderRegistryOwner: {
    default: 0,
  },
  treasuryProxyAdmin: {
    default: 1,
  },
  incentivesProxyAdmin: {
    default: 1,
  },
  incentivesEmissionManager: {
    default: 0,
  },
  incentivesRewardsVault: {
    default: 0,
  },
};

export const GOVERNANCE_BRIDGE_EXECUTOR: { [key: string]: string } = {
  [eMantleNetwork.mantleTestnet]: "0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772",
  [eMantleNetwork.mantle]: "0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C",
  [eEthereumNetwork.arbitrum]: "0xc98f11daaac76d3ef368fdf54fbba34ffd951976"
};

export const MULTISIG_ADDRESS: { [key: string]: string } = {
  [eMantleNetwork.mantleTestnet]: "0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58",
  [eMantleNetwork.mantle]: "0x6CeEBBFF9FaA802990f58659c1Ff227B4534570C",
  [eEthereumNetwork.arbitrum]: "0xc98f11daaac76d3ef368fdf54fbba34ffd951976"
};
