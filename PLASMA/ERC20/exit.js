const utils = require("../../utils");

async function execute() {
  const { matic, network } = await utils.getMaticClient();
  const { from } = utils.getAccount();

//   const token = network.Main.Contracts.Tokens.TestToken;
const token = "0xa265A76D295A2e46Dd3Ed3c5b52b7C3325BF8147";

  await matic.processExits(token, { from, gas: 7000000 }).then((res) => {
    console.log("Exit hash: ", res.transactionHash);
  });
}

execute().then((_) => process.exit(0));