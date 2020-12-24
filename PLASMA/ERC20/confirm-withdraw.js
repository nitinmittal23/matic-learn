const utils = require("../../utils");

async function execute() {
  const { matic } = await utils.getMaticClient();
  const { from } = utils.getAccount();

  // Submit proof of burn on Main Chain
  const txHash = "0x750bbb035407a52470e2e8e69b0814acbf19179c5b25f53689ebf023c36b7c98";
  
  await matic.withdraw(txHash, { from, gas: "7000000" }).then((res) => {
    console.log("Confirm withdraw hash: ", res.transactionHash);
  });
}
// Withdraw process is completed, funds will be transfered to your account after challege period is over.
execute().then((_) => process.exit(0));