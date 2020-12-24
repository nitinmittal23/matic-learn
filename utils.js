const MaticPOSClient = require("@maticnetwork/maticjs").MaticPOSClient;
const config = require("./config");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Matic = require("@maticnetwork/maticjs").default;
const bn = require("bn.js");
const SCALING_FACTOR = new bn(10).pow(new bn(18));
const Network = require("@maticnetwork/meta/network");


const getMaticPOSClient = () => {
  return new MaticPOSClient({
    network: "testnet", // For mainnet change this to mainnet
    version: "mumbai", // For mainnet change this to v1
    parentProvider: new HDWalletProvider(
      config.user.privateKey,
      config.root.RPC
    ),
    maticProvider: new HDWalletProvider(
      config.user.privateKey,
      config.child.RPC
    ),
    parentDefaultOptions: { from: config.user.address }, // optional, can also be sent as last param while sending tx
    maticDefaultOptions: { from: config.user.address }, // optional, can also be sent as last param while sending tx
  });
};

async function getMaticClient(_network = "testnet", _version = "mumbai") {
  const network = new Network(_network, _version);
  const { from } = getAccount();
  const matic = new Matic({
    network: _network,
    version: _version,
    parentProvider: new HDWalletProvider(
      config.user.privateKey,
      config.root.RPC
    ),
    maticProvider: new HDWalletProvider(
      config.user.privateKey,
      config.child.RPC
    ),
    parentDefaultOptions: { from },
    maticDefaultOptions: { from },
  });
  await matic.initialize();
  return { matic, network };
}

function getAccount() {
  if (!config.user.privateKey || !config.user.address) {
    throw new Error("Please set the PRIVATE_KEY/FROM env vars");
  }
  return { privateKey: config.user.privateKey, from: config.user.address };
}

module.exports = {
  SCALING_FACTOR,
  getMaticPOSClient,
  getMaticClient,
  getAccount
};
