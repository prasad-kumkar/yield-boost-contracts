import { AssetType, eEthereumNetwork, eMantleNetwork, IAaveConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
    strategyPtWstETH,
    strategyWstETH
} from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";

export const WSTETH_ARB_JUN_2024: IAaveConfiguration = {
  MarketId: "wstETH Arbitrum Jun2024",
  ATokenNamePrefix: "",
  StableDebtTokenNamePrefix: "",
  VariableDebtTokenNamePrefix: "",
  SymbolPrefix: "",
  OracleQuoteUnit: [],
  OracleQuoteCurrencyAddress: [],
  OracleQuoteCurrency: [],
  ProviderId: 40,
  ReservesConfig: {
    wstETH: strategyWstETH,
    pt_wstETH: strategyPtWstETH
  },
  ReserveAssets: {
    [eEthereumNetwork.arbitrum]: {
      wstETH: "0x5979D7b546E38E414F7E9822514be443A4800529",
      pt_wstETH: "0xBB33e51bdC598D710FF59FdF523E80ab7c882C83"
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
      // USDC: "0x1692Bdd32F31b831caAc1b0c9fAF68613682813b",
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


export default WSTETH_ARB_JUN_2024;