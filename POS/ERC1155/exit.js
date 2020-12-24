const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0xa7206adf9555819d34cbff0d7904600d9a95866c6c9fc94f6f409d45f32fea0b";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitSingleERC1155(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
