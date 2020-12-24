const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.burnSingleERC1155(
      // config.child.DERC1155,
      // config.user.tokenId,
      // config.user.amount
      "0x36E1CAA079f24c7Ed5DaDd56EEa82bb4B081b484",
      "19",
      "10000000000000000000"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
