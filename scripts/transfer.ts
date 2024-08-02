import dotenv from "dotenv";
import { abi as GameItemsABI } from "../ignition/deployments/chain-974399131/artifacts/DeployModule#GameItems.json";
import { abi as ReceiveTokenABI } from "../ignition/deployments/chain-974399131/artifacts/DeployModule#ReceiveToken.json";
import addresses from "../ignition/deployments/chain-974399131/deployed_addresses.json";
import { JsonRpcProvider, Contract, Wallet } from "ethers";
dotenv.config();

async function main() {

    const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY || PRIVATE_KEY === undefined) throw new Error("Missing Private key in .env");

    const provider = new JsonRpcProvider("https://testnet.skalenodes.com/v1/giant-half-dual-testnet");
    const myWallet = new Wallet(PRIVATE_KEY, provider);
    const gameItemsContract = new Contract(addresses["DeployModule#GameItems"], GameItemsABI, myWallet);
    const receiveTokenContract = new Contract(addresses["DeployModule#ReceiveToken"], ReceiveTokenABI, myWallet);

    const tokenId = await gameItemsContract.tokenId();
    const mint = await gameItemsContract.mint(BigInt(1));
    await mint.wait(1)
    console.log(`NFT with Token Id: ${tokenId} minted successfully`);
    const transfer = await gameItemsContract.safeTransferFrom(myWallet.address, await receiveTokenContract.getAddress(), tokenId, BigInt(1), "0x");
    await transfer.wait(1);
    console.log("Transfer Success", transfer);

    console.log("Balance After: ", await gameItemsContract.balanceOf(receiveTokenContract.target, tokenId));

}

main()
    .catch((err) => {
        console.error(err);
        process.exitCode = 1;
    })