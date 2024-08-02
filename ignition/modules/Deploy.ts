import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployModule = buildModule("DeployModule", (m) => {
  
  const gameItems = m.contract("GameItems");
  const receiveToken = m.contract("ReceiveToken");

  return { gameItems, receiveToken };
});

export default DeployModule;
