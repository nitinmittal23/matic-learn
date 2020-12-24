const utils = require("../../utils");

async function execute() {
    const { matic, network } = await utils.getMaticClient();
    const { from } = utils.getAccount();

    //   const token = network.Main.Contracts.Tokens.RootERC721;
    //   const tokenId = "0";
    const token = "0xA37a01F083BeF306727ea6a97C428FA9cD724634";
    const tokenId = "1923";

    // approve
    await matic.approveERC20TokensForDeposit(token, tokenId).then((res) => {
        console.log("approve hash: ", res.transactionHash);
    });

    await matic.safeDepositERC721Tokens(token, tokenId, { from }).then((res) => {
        console.log("desposit hash: ", res.transactionHash);
    });
}

execute().then((_) => process.exit(0));