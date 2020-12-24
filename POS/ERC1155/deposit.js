const config = require("../../config");
const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.depositSingleERC1155ForUser(
      // config.root.DERC1155,
      // config.user.address,
      // config.user.tokenId,
      // config.user.amount
      "0x0AADAAB1E1927c3ea9B2DAA031234C3108bC8fC4",
      "0x724A3c801ae0E84fbEA630D72f4675220429EA00",
      "19",
      "10000000000000000000"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
