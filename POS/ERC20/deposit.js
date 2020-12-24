const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.depositERC20ForUser(
      // config.root.DERC20,
      // config.user.address,
      // config.user.amount
      "0xDA66EA28eF100B80aeBfeEb9aCf763a6b3e61eeA",
      config.user.address,
      "10000000000000000000"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
