import { AssetType, eEthereumNetwork, eMantleNetwork, IAaveConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
    strategyPtWstETH,
    strategyWstETH
} from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";

export const WSTETH_ARB_DEC_2023: IAaveConfiguration = {
  MarketId: "wstETH Arbitrum Dec2023",
  ATokenNamePrefix: "YB Arbitrum Dec2023",
  StableDebtTokenNamePrefix: "Stable YB Arbitrum Dec2023",
  VariableDebtTokenNamePrefix: "Variable YB Arbitrum Dec2023",
  SymbolPrefix: "ybArb2023",
  OracleQuoteUnit: [],
  OracleQuoteCurrencyAddress: [],
  OracleQuoteCurrency: [],
  ProviderId: 40,
  ReservesConfig: {
    WSTETH: strategyWstETH,
    PTWSTETH: strategyPtWstETH
  },
  ReserveAssets: {
    [eEthereumNetwork.arbitrum]: {
      WSTETH: "0x5979D7b546E38E414F7E9822514be443A4800529",
      PTWSTETH: "0xBB33e51bdC598D710FF59FdF523E80ab7c882C83"
    },
    [eEthereumNetwork.hardhat]: {
      WSTETH: "0x5979D7b546E38E414F7E9822514be443A4800529",
      PTWSTETH: "0xBB33e51bdC598D710FF59FdF523E80ab7c882C83"
    },
  },
  EModes: {
    // StableEMode: {
    //     id: "1",
    //     ltv: "9700",
    //     liquidationThreshold: "9800",
    //     liquidationBonus: "10100",
    //     label: "Stablecoins",
    //     assets: ["USDC", "CUSD", "SUSD"],
    // }
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.arbitrum]: {
      WSTETH: "0x43E56DAeA2121f7aef832e1A024015B0cC52CB95",
      PTWSTETH: "0xA40501FA541D4D828079C778E591Ce62A59D6b75"
    },
    [eEthereumNetwork.hardhat]: {
      WSTETH: "0x43E56DAeA2121f7aef832e1A024015B0cC52CB95",
      PTWSTETH: "0xA40501FA541D4D828079C778E591Ce62A59D6b75"
    }
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.arbitrum]: ZERO_ADDRESS
  },
  WrappedNativeTokenSymbol: "",
  IncentivesConfig: {
    enabled: {
      [eEthereumNetwork.arbitrum]: true
    },
    rewards: {
      [eEthereumNetwork.arbitrum]: {
        // REW: "",
      },
    },
    rewardsOracle: {
      [eEthereumNetwork.arbitrum]: {
        // REW: ZERO_ADDRESS,
      }
    },
    incentivesInput: {
      [eEthereumNetwork.arbitrum]: [],
    },
  },
  FlashLoanPremiums: {
    total: 0.0005e4,
    protocol: 0.0004e4,
  },
  RateStrategies: {
    rateStrategyVolatileOne,
    rateStrategyStableOne,
    rateStrategyStableTwo,
  },
  PythAggregator: {}
};


export default WSTETH_ARB_DEC_2023;

