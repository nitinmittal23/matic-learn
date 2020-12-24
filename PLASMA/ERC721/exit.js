const utils = require("../../utils");

async function execute() {
  const { matic, network } = await utils.getMaticClient();
  const { from } = utils.getAccount();

  //const token = network.Main.Contracts.Tokens.RootERC721;
  const token = "0xA37a01F083BeF306727ea6a97C428FA9cD724634";
  await matic.processExits(token, { from, gas: 7000000 }).then((res) => {
    console.log("Exit hash: ", res.transactionHash);
  });
}

execute().then((_) => process.exit(0));