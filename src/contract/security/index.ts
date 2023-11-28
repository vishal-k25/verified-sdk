// SPDX-License-Identifier: BUSL-1.1
// @ts-nocheck

import { VerifiedContract, DATATYPES } from '../index';
import { VerifiedWallet } from "../../../wallet";
import { abi, networks } from '../../abi/securities/Security.json';

enum FUNCTIONS {
    WHITELIST = 'whiteList',
    TRANSFER = 'transfer',
    APPROVE = 'approve',
    TRANSFERFROM = 'transferFrom',
    INCREASEALLOWANCE = 'increaseAllowance',
    DECREASEALLOWANCE = 'decreaseAllowance',
    FREEZE = 'freeze',
    UNFREEZE = 'unfreeze',
    FROZEN = 'frozen',
    BURN = 'burn',
    BURNALL = 'burnAll',
    SCHEDULE = 'scheduleSnapshot',
    RESCHEDULE = 'rescheduleSnapshot',
    UNSCHEDULE = 'unscheduleSnapshot',
    CREATERESOLUTION = 'createResolution',
    COUNTVOTES = 'countVotes',
    PAYOUTPRORATA = 'payoutProrata',
    PAYOUT = 'payout',
    PAUSE = 'pause',
    UNPAUSE = 'unpause'
}

export default class Security extends VerifiedContract {
    
    public contractAddress: string
    
    constructor(signer: VerifiedWallet, tokenAddress: string) {

        const address = tokenAddress
        super(address, JSON.stringify(abi), signer)

        this.contractAddress = address
    }
    
    public async whiteList(
                            _spender: string,
                            _amount: string, 
                            options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _spender)
        await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.WHITELIST, _spender, _amount, options)
    }

    public async transfer(
                            _recipient: string,
                            _amount: string, 
                            options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _recipient)
        await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.TRANSFER, _recipient, _amount, options)
    }

    public async approve(
                    _spender: string,
                    _amount: string, 
                    options?: { gasPrice: number, gasLimit: number }): any {
        await this.validateInput(DATATYPES.ADDRESS, _spender)
        await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.APPROVE, _spender, _amount, options)
    }

    public async transferFrom(
                    _spender: string,
                    _recipient: string,
                    _amount: string, 
                    options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _spender)
                await this.validateInput(DATATYPES.ADDRESS, _recipient)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.TRANSFERFROM, _spender, _recipient, _amount, options)
    }

    public async increaseAllowance(
                        _spender: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _spender)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.INCREASEALLOWANCE, _spender, _amount, options)
    }

    public async decreaseAllowance(
                        _spender: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _spender)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.DECREASEALLOWANCE, _spender, _amount, options)
    }

    public async freeze(
                        _holder: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _holder)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.FREEZE, _holder, _amount, options)
    }

    public async unfreeze(
                        _holder: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _holder)
        return this.callContract(FUNCTIONS.UNFREEZE, _holder, options)
    }

    public async frozen(
                        _account: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _holder)
        return this.callContract(FUNCTIONS.FROZEN, _account, options)
    }

    public async burn(
                        _holder: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.ADDRESS, _holder)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.BURN, _holder, _amount, options)
    }

    public async burnAll(       
                        options?: { gasPrice: number, gasLimit: number }): any {
        return this.callContract(FUNCTIONS.BURNALL, options)
    }

    public async schedule(
                        _time: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
        return this.callContract(FUNCTIONS.SCHEDULE, _time, options)
    }

    public async reschedule(
                        _oldtime: string,
                        _newtime: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _oldtime)
                await this.validateInput(DATATYPES.NUMBER, _newtime)
        return this.callContract(FUNCTIONS.RESCHEDULE, _oldtime, _newtime, options)
    }

    public async unschedule(
                        _time: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
        return this.callContract(FUNCTIONS.UNSCHEDULE, _time, options)
    }

    public async createResolution(
                    _time: string,
                    _votes: string,
                    _ipfslink: string, 
                    options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
                await this.validateInput(DATATYPES.BOOLEAN, _votes)
                await this.validateInput(DATATYPES.STRING, _ipfslink)        
        return this.callContract(FUNCTIONS.CREATERESOLUTION, _time, _votes, _ipfslink, options)
    }

    public async countVotes(
                        _time: string,
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
        return this.callContract(FUNCTIONS.COUNTVOTES, _time, options)
    }

    public async payoutProrata(
                        _time: string,
                        _wallet: string,
                        _token: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
                await this.validateInput(DATATYPES.ADDRESS, _wallet)
                await this.validateInput(DATATYPES.ADDRESS, _token)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.PAYOUTPRORATA, _time, _wallet, _token, _amount, options)
    }

    public async payout(
                        _time: string,
                        _holder: string,
                        _wallet: string,
                        _token: string,
                        _amount: string, 
                        options?: { gasPrice: number, gasLimit: number }): any {
                await this.validateInput(DATATYPES.NUMBER, _time)
                await this.validateInput(DATATYPES.ADDRESS, _holder)
                await this.validateInput(DATATYPES.ADDRESS, _wallet)
                await this.validateInput(DATATYPES.ADDRESS, _token)
                await this.validateInput(DATATYPES.NUMBER, _amount)        
        return this.callContract(FUNCTIONS.PAYOUT, _time, _holder, _wallet, _token, _amount, options)
    }

    public async pause(       
                        options?: { gasPrice: number, gasLimit: number }): any {
        return this.callContract(FUNCTIONS.PAUSE, options)
    }

    public async unpause(       
                        options?: { gasPrice: number, gasLimit: number }): any {
        return this.callContract(FUNCTIONS.UNPAUSE, options)
    }
    
}