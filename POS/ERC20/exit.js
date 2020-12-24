const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0xfeaefb196c531830ea7d9f4d7cd616a2cef696675342848c9ddef51acad6b547";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC20(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
