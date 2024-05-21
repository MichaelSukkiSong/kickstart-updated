import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x1C6D2b6C8d2f48c8db1C508B37b3198a4b0e711f"
);

export default instance;
