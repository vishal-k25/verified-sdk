import assert from 'assert';
import { Provider } from "../utils/index";
import { VerifiedWallet } from "../wallet/index";
import {Custody} from "../index";
import { ethers } from 'ethers';

describe("Base Sepolia() Custody Gassless Tests", () => {   
  const SECURITY_HOLDER_MNEMONICS =
    "omit floor sport lend knock alpha dumb three gentle hungry screen early";
  const sender = VerifiedWallet.importWallet(SECURITY_HOLDER_MNEMONICS);
  const provider = new ethers.providers.JsonRpcProvider("https://sepolia.base.org");
  const signer = sender.setProvider(provider);
  describe("Tests some functions on custody contract", () => {
    const custodyAddress = "0xB1ae3Fc5B16d3736bf0db20606fB9a10b435392c";
    const custodyContract = new Custody(
      signer,
      custodyAddress
    );
    it("it should create vault", async () => {
      const createVaultRes = await custodyContract.createVault("0x7665726966696564", "vltt");
      console.log("result: ", createVaultRes)
      assert(createVaultRes.response.status === 0);
    })

  });
});
