import '@openzeppelin/hardhat-upgrades';
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter"
import "@openzeppelin/hardhat-defender"
import "hardhat-openzeppelin-defender";
import 'solidity-docgen';
import "hardhat-contract-sizer";
import "hardhat-deploy";
import "hardhat-dependency-compiler";
import { DEFAULT_NAMED_ACCOUNTS, eEthereumNetwork, eMantleNetwork, getCommonNetworkConfig } from './helpers';

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? 'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const config: any = {
  docgen: {},
  defender: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY!,
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY!,
  },
  OpenzeppelinDefenderCredential: {
    apiKey: process.env.DEFENDER_TEAM_API_KEY!,
    apiSecret: process.env.DEFENDER_TEAM_API_SECRET_KEY!,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          }
        },
      },
      {
        version: "0.4.18"
      },
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          }
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          }
        },
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
          evmVersion: "berlin",
        },
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
        },
      },
    ],
  },
  mocha: {
    timeout: 100000000
  },
  networks: {
    hardhat: {
      isLive: false,
      live: false,
      allowUnlimitedContractSize: true,
    },
    [eEthereumNetwork.arbitrum]: {...getCommonNetworkConfig(
      eEthereumNetwork.arbitrum,
      42161,
      ),
      accounts : [PRIVATE_KEY],
      isLive: true,
    },
    [eMantleNetwork.mantle]: {...getCommonNetworkConfig(
      eMantleNetwork.mantle,
      5000,
      ),
      accounts : [PRIVATE_KEY],
      isLive: true,
    }
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    gasPrice: 1,
    coinmarketcap: process.env.CMC_API_KEY
  },
  etherscan:{
    apiKey: {
      arbitrumOne: 'S5IYYDM5KC14FZ7HR9NFCGDJVBUZ65UGMY'
    },
    // customChains: [
    //   {
    //     network: "arbitrum",
    //     chainId: 42161,
    //     urls: {
    //       apiURL: "https://api.arbiscan.io/api",
    //       browserURL: "https://arbiscan.io"
    //     }
    //   }
    // ]
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  namedAccounts: {
    ...DEFAULT_NAMED_ACCOUNTS,
  },
  dependencyCompiler: {
    paths: [
      "contracts/lend/aave-core-v3/contracts/protocol/configuration/PoolAddressesProviderRegistry.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/configuration/PoolAddressesProvider.sol",
      "contracts/lend/aave-core-v3/contracts/misc/AaveOracle.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/tokenization/AToken.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/tokenization/DelegationAwareAToken.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/tokenization/StableDebtToken.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/tokenization/VariableDebtToken.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/GenericLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/ValidationLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/ReserveLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/SupplyLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/EModeLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/BorrowLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/BridgeLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/FlashLoanLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/logic/CalldataLogic.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/pool/Pool.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/pool/L2Pool.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/pool/PoolConfigurator.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol",
      "contracts/lend/aave-core-v3/contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol",
      "contracts/lend/aave-core-v3/contracts/deployments/ReservesSetupHelper.sol",
      "contracts/lend/aave-core-v3/contracts/misc/AaveProtocolDataProvider.sol",
      "contracts/lend/aave-core-v3/contracts/misc/L2Encoder.sol",
      "contracts/lend/aave-core-v3/contracts/protocol/configuration/ACLManager.sol",
      "contracts/lend/aave-core-v3/contracts/dependencies/weth/WETH9.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/helpers/MockIncentivesController.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/helpers/MockReserveConfiguration.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/oracle/CLAggregators/MockAggregator.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/tokens/MintableERC20.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/flashloan/MockFlashLoanReceiver.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/tokens/WETH9Mocked.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/upgradeability/MockVariableDebtToken.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/upgradeability/MockAToken.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/upgradeability/MockStableDebtToken.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/upgradeability/MockInitializableImplementation.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/helpers/MockPool.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/helpers/MockL2Pool.sol",
      "contracts/lend/aave-core-v3/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol",
      "contracts/lend/aave-core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/oracle/PriceOracle.sol",
      "contracts/lend/aave-core-v3/contracts/mocks/tokens/MintableDelegationERC20.sol",
      "contracts/lend/aave-periphery-v3/contracts/misc/UiPoolDataProviderV3.sol",
      "contracts/lend/aave-periphery-v3/contracts/misc/WalletBalanceProvider.sol",
      "contracts/lend/aave-periphery-v3/contracts/misc/WrappedTokenGatewayV3.sol",
      "contracts/lend/aave-periphery-v3/contracts/misc/interfaces/IWETH.sol",
      "contracts/lend/aave-periphery-v3/contracts/misc/UiIncentiveDataProviderV3.sol",
      "contracts/lend/aave-periphery-v3/contracts/rewards/RewardsController.sol",
      "contracts/lend/aave-periphery-v3/contracts/rewards/transfer-strategies/StakedTokenTransferStrategy.sol",
      "contracts/lend/aave-periphery-v3/contracts/rewards/transfer-strategies/PullRewardsTransferStrategy.sol",
      "contracts/lend/aave-periphery-v3/contracts/rewards/EmissionManager.sol",
      "contracts/lend/aave-periphery-v3/contracts/mocks/WETH9Mock.sol",
      "contracts/lend/aave-periphery-v3/contracts/mocks/testnet-helpers/Faucet.sol",
      "contracts/lend/aave-periphery-v3/contracts/mocks/testnet-helpers/TestnetERC20.sol",
      "contracts/lend/aave-periphery-v3/contracts/treasury/Collector.sol",
      "contracts/lend/aave-periphery-v3/contracts/treasury/CollectorController.sol",
      "contracts/lend/aave-periphery-v3/contracts/treasury/AaveEcosystemReserveV2.sol",
      "contracts/lend/aave-periphery-v3/contracts/treasury/AaveEcosystemReserveController.sol",
      "@aave/safety-module/contracts/stake/StakedAave.sol",
      "@aave/safety-module/contracts/stake/StakedAaveV2.sol",
      "@aave/safety-module/contracts/proposals/extend-stkaave-distribution/StakedTokenV2Rev3.sol",
    ],
  },
};

export default config;