const utils = require("../../utils");

async function execute() {
    const { matic, network } = await utils.getMaticClient();
    const { from } = utils.getAccount();

    // burning erc721 tokens are also supported
    // const token = network.Matic.Contracts.Tokens.RootERC721;
    const token = "0xADC009770457406481927F879A6Af07e0b5295a9";

    // or provide the tokenId in case of an erc721
    const tokenId = "1923";
    await matic.startWithdrawForNFT(token, tokenId, { from }).then((res) => {
        console.log("Burn hash: ", res.transactionHash);
    });
}

execute().then((_) => process.exit(0));