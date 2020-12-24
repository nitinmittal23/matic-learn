const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.approveERC20ForDeposit(
      // config.root.DERC20,
      // config.user.amount
      "0xDA66EA28eF100B80aeBfeEb9aCf763a6b3e61eeA",
      "100000000000000000000"
      
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
