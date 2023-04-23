// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck

import { VerifiedContract, DATATYPES } from '../index';
import { VerifiedWallet } from "../../wallet";
import { abi, networks } from '../../abi/payments/Rates.json';

enum FUNCTIONS {
    SETFEETO = 'setFeeTo',
    GETFEE = 'getFee',
    SETFEETOSETTER = 'setFeeToSetter',
    SETCUSTODIAN = 'setCustodian',
    GETFEETOSETTER = 'getFeeToSetter',
    GETCUSTODIAN = 'getCustodian'
}

export default class Rates extends VerifiedContract {

    public contractAddress: string
    
    constructor(signer: VerifiedWallet, contractNetworkAddress: string) {
        
        const address = contractNetworkAddress
        super(address, JSON.stringify(abi), signer)

        this.contractAddress = address
    }

    public async setFeeTo(_feeTo: string, _fee: string, _feeType: string, options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _feeTo)
        await this.validateInput(DATATYPES.NUMBER, _fee)
        await this.validateInput(DATATYPES.STRING, _feeType)
        return this.callContract(FUNCTIONS.SETFEETO, _feeTo, _fee, this.sanitiseInput(DATATYPES.BYTE32, _feeType), options)
    }

    public async setFeeToSetter(_feeToSetter: string, options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _feeToSetter)
        return this.callContract(FUNCTIONS.SETFEETOSETTER, _feeToSetter, options)
    }

    public async setCustodian(_custodian: string, options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _custodian)
        return this.callContract(FUNCTIONS.SETCUSTODIAN, _custodian, options)
    }

    public async getFee(_feeType: string, options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.STRING, _feeType)
        return this.callContract(FUNCTIONS.GETFEE, this.sanitiseInput(DATATYPES.BYTE32, _feeType), options)
    }

    public async getFeeToSetter(){
        return this.callContract(FUNCTIONS.GETFEETOSETTER)
    }

    public async getCustodian(){
        return this.callContract(FUNCTIONS.GETCUSTODIAN)
    }

}