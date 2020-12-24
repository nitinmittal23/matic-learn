const utils = require("../../utils");

async function execute() {
    const { matic, network } = await utils.getMaticClient();
    const { from } = utils.getAccount();

    // provide the burn tx hash
    const txHash = "0x7404051d863364970e87ab14e4c7347afea02b2f6cb6d63c03f613895a6e5ba6";
    
    await matic.withdrawNFT(txHash, { from, gas: "2000000" }).then((res) => {
        console.log("Confirm withdraw hash: ", res.transactionHash);
    });
}
// Withdraw process is completed, funds will be transfered to your account after challege period is over.
execute().then((_) => process.exit(0));