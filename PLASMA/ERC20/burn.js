const utils = require("../../utils");

async function execute() {
  const { matic, network } = await utils.getMaticClient();
  const { from } = utils.getAccount();

//   const token = network.Matic.Contracts.Tokens.TestToken;
//   const amount = matic.web3Client.web3.utils.toWei("5.678");
const token = "0xeEe9e28e76694f274643981D48B1524371588b79";
const amount = "100000000000000000000";

  await matic.startWithdraw(token, amount, { from }).then((res) => {
    console.log("Burn hash: ", res.transactionHash);
  });
}

execute().then((_) => process.exit(0));