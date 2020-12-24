const utils = require('../../utils')

async function execute() {
    const { matic, network } = await utils.getMaticClient()
    const { from } = utils.getAccount()

    // const token = network.Main.Contracts.Tokens.TestToken
    // const amount = matic.web3Client.web3.utils.toWei('1.567')
    const token = "0xa265A76D295A2e46Dd3Ed3c5b52b7C3325BF8147";
    const amount = "100000000000000000000"

    // approve
    await matic.approveERC20TokensForDeposit(token, amount).then((res) => {
        console.log("approve hash: ", res.transactionHash)
    })

    // deposit
    await matic.depositERC20ForUser(token, from, amount).then((res) => {
        console.log("deposit hash: ", res.transactionHash)
    })
}
execute().then(_ => process.exit(0))