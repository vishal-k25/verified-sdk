const { Provider } = require("../utils/index");
const { VerifiedWallet } = require("../wallet/index");
const { SecuritiesFactory, contractAddress } = require("../index");
const { ethers } = require("ethers");

const testSecurityFactoryIssueProduct = async () => {
  GEORLI_INFURA_API_KEY = "95c1322d7c0e44de9ea77cc9eea18534";
  SECURITY_HOLDER_MNEMONICS =
    "correct galaxy various swap chair assault blue improve ivory pear infant oak";
  const sender = VerifiedWallet.importWallet(SECURITY_HOLDER_MNEMONICS);
  const signer = sender.setProvider(
    Provider.infuraProvider("goerli", GEORLI_INFURA_API_KEY)
  );
  const securityFactoryAddress = contractAddress[5]["SecuritiesFactory"];
  console.log("add: ", securityFactoryAddress);
  const securityFactoryContract = new SecuritiesFactory(
    signer,
    securityFactoryAddress
  );
  const zeroAddress = "0x0000000000000000000000000000000000000000";
  const BTCShortBytes = "0x425443";
  const currency = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"; //usdc
  const defaultBytes =
    "0x4346440000000000000000000000000000000000000000000000000000000000";
  const indiaBytes =
    "0x496e646961000000000000000000000000000000000000000000000000000000";
  const restrictions = [];
  const abiCoder = ethers.utils.defaultAbiCoder;
  const encodedArray = abiCoder.encode(["bytes32[]"], [restrictions]);
  await securityFactoryContract
    .issueSecurity(
      zeroAddress,
      defaultBytes,
      BTCShortBytes,
      BTCShortBytes,
      currency,
      sender.address,
      sender.address,
      encodedArray,
      indiaBytes,
      false
    )
    .then((res) => {
      console.log("Security Issued Succesfully with hash: ", res.response.hash);
    })
    .catch((err) => {
      console.error("issueSecurity failed with error: ", err);
    });
};

testSecurityFactoryIssueProduct();
