const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.burnERC721(
      // config.child.DERC721,
      // config.user.tokenId
      "0x7fF5d47edE3f538359Ee7e3084f12f3Cd5609123",
      "23"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
