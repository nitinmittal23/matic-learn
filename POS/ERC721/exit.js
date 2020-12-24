const utils = require("../../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0x195c7ed993e8710210743894b0f40bca605c8db1998e3255c8cfd0291629ffad";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC721(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));
