const SHA256 = require("crypto-js/sha256");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction{
    constructor(amount, fromAddress, toAddress){
        this.Hash = this.calculateHash();
        this.amount = amount;
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.timestamp = new Date().getTime();

    }

    calculateHash(){
        return SHA256(this.amount + this.fromAddress + this.timestamp + this.toAddress).toString();
    }

    signTransaction(signingKey){

        if(signingKey.getPublic('hex') !== this.fromAddress)
            throw new Error('You cant sign transactions for other wallets!');

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    }

    isValid(){
        if(this.fromAddress === null) return true;

        if(!this.signature || this.signature.length === 0)
            throw new Error('You cant sign transactions for other wallets!');
        
        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }

}

module.exports = Transaction;