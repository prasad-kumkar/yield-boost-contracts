import hardhatConfig from "./hardhat.config"

import dotenv from 'dotenv';
dotenv.config();

export default {
    ...hardhatConfig,
    networks: {
        ...hardhatConfig.networks,
        hardhat: {
            forking: {
                url: "https://endpoints.omniatech.io/v1/arbitrum/one/public"
            },
            chainId: 42161,
            live: true
        },
    },
}