const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(transactions, previousHash = ''){
        this.previousHash = previousHash;
        this.transactions = transactions;
        this.timestamp = new Date().getTime();
        this.nonce = 0; // Used for proof of work
        this.hash = this.calculateHash(); 
        //this.merkleRoot = 0;//calculateMerkleRoot();
    }

    //Hash combines the values of the timestamp, index, transactions, and the previous hash. It then gets the hash for that value.
    calculateHash(){
       
        return SHA256(this.previousHash + JSON.stringify(this.transactions) + this.timestamp + this.nonce).toString();
    }

    mineBlock(difficulty){
        console.log("mining block...");
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);

    }

    hasValidTransactions(){
        for(const tx of this.transactions){
            if(!rx.isValid()) return false;
        }
        
        return true;
    }


}

module.exports = Block;