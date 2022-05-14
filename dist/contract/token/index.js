"use strict";
// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const Token_json_1 = require("../../abi/payments/Token.json");
var FUNCTIONS;
(function (FUNCTIONS) {
    FUNCTIONS["TRANSFERFROM"] = "transferFrom";
    FUNCTIONS["BALANCE"] = "balanceOf";
    FUNCTIONS["GETISSUER"] = "getIssuer";
})(FUNCTIONS || (FUNCTIONS = {}));
class TokenContract extends index_1.VerifiedContract {
    constructor(signer, bondCurrencyAddress) {
        const chainId = signer.provider._network.chainId.toString();
        const address = bondCurrencyAddress;
        super(address, JSON.stringify(Token_json_1.abi), signer);
        this.contractAddress = address;
    }
    /**
     * Lend by purchasing bond token against other cash token  [callable by client]
     * _sender is address of bond token redeemed,
     * _receiver is bond token address,
     * _tokens is amount of tokens redeemed
     * @param (address _sender, address _receiver, uint256 _tokens)
    * @returns bool
    */
    async transferFrom(_senderAddress, _recieverAddress, _tokens, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, _senderAddress);
        await this.validateInput(index_1.DATATYPES.ADDRESS, _recieverAddress);
        await this.validateInput(index_1.DATATYPES.NUMBER, _tokens);
        return this.callContract(FUNCTIONS.TRANSFERFROM, _senderAddress, _recieverAddress, _tokens, options);
    }
    /* Request bond token balance of wallet
    */
    async balanceOf(_wallet, options) {
        await this.validateInput(index_1.DATATYPES.ADDRESS, _wallet);
        return this.callContract(FUNCTIONS.BALANCE, _wallet, options);
    }
    /* Get address of issuer of token
    */
    async getIssuer() {
        return this.callContract(FUNCTIONS.GETISSUER);
    }
}
exports.default = TokenContract;