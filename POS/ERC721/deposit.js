const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.depositERC721ForUser(
      // config.root.DERC721,
      // config.user.address,
      // config.user.tokenId
      "0x9386F086E3B2A9376701Cc4054C9D28cB5e29592",
      config.user.address,
      "23"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
