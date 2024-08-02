import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) throw new Error("Missing Private Key in .env");

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
      },
      {
        version: "0.8.0",
      }
    ],
  },
  defaultNetwork: "calypso-testnet",
  networks: {
    "calypso-testnet": {
      url: "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
      accounts: [PRIVATE_KEY]
    }
  }
};

export default config;
