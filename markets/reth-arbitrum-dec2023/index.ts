import { AssetType, eEthereumNetwork, eMantleNetwork, IAaveConfiguration, TransferStrategy } from "../../helpers/types";
import { ZERO_ADDRESS } from "../../helpers";
import {
    strategyPtRETH,
    strategyRETH
} from "./reservesConfig";
import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";

export const RETH_ARB_DEC_2023: IAaveConfiguration = {
  MarketId: "rETH Arbitrum Dec2023",
  ATokenNamePrefix: "",
  StableDebtTokenNamePrefix: "",
  VariableDebtTokenNamePrefix: "",
  SymbolPrefix: "",
  OracleQuoteUnit: [],
  OracleQuoteCurrencyAddress: [],
  OracleQuoteCurrency: [],
  ProviderId: 40,
  ReservesConfig: {
    wstETH: strategyRETH,
    pt_wstETH: strategyPtRETH
  },
  ReserveAssets: {
    [eEthereumNetwork.arbitrum]: {
      rETH: "0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8",
      pt_rETH: "0x685155D3BD593508Fe32Be39729810A591ED9c87"
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


export default RETH_ARB_DEC_2023;

