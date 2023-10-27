import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-abi-exporter';
import '@typechain/hardhat';

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
          balance: '1000000000000000000000000000000000',
        },
      ],
      blockGasLimit: 100000000000000,
      gasPrice: 1000000,
      chainId: 2152,
      initialBaseFeePerGas: 1000000,
      mining: {
        auto: false,
        interval: 3000,
      },
    },
    local: {
      url: 'http://127.0.0.1:8545',
      accounts: [
        '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
      ],
      chainId: 2152,
    },
    testnet: {
      url: 'https://prod-testnet.prod.findora.org:8545',
      accounts: [
        '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
      ],
      chainId: 2153,
    },
    mainnet: {
      url: 'https://prod-mainnet.prod.findora.org:8545',
      accounts: [
        '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
      ],
      chainId: 2152,
    },
    gscmain: {
      url: 'https://gsc-mainnet.prod.findora.org:8545',
      accounts: [
        '0x8ea5974517769211efd4af5814ea1600ba888b7786f7df5e26dc3d6bab6822bc',
      ],
      chainId: 1204,
    },
    hyprtest: {
      url: 'http://testnet-proposer0.hypr.network:8545',
      accounts: [
        '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
      ],
    },
    gsc: {
      url: 'http://gsc-mainnet-us-west-2-full-001-open.prod.findora.org:8545',
      chainId: 1204,
      accounts: [
        '0x8ea5974517769211efd4af5814ea1600ba888b7786f7df5e26dc3d6bab6822bc',
        '0xb501fc5879f214ee8be2832e43955ac0f19e20d1f7e33436d6746ac889dc043d',
      ],
    },
  },
  paths: {
    sources: './contracts/',
    tests: './test',
    cache: './build/cache',
    artifacts: './build/artifacts',
  },
  abiExporter: {
    path: './build/abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
  },
  gasReporter: {
    enabled: true,
    showMethodSig: true,
    maxMethodDiff: 10,
    gasPrice: 127,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  typechain: {
    outDir: './build/types',
    target: 'ethers-v6',
  },
};

export default config;
