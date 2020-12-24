const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.burnERC20(
      // config.child.DERC20,
      // config.user.amount
      "0x5eA715d5c10F3e34B5252D54Fef901e25a4717A4",
      "10000000000000000000"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
