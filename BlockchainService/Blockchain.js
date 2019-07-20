const Block = require("./Block");
const Transaction = require("./Transaction");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 1;
    this.pendingTransactions = [];
    this.miningReward = 50;
  }

  createGenesisBlock() {
    return new Block("Genesis Block", "0");
  }

  getLatesatBlock() {
    return this.chain[this.chain.length - 1];
  }

  getChain() {
    return this.chain;
  }

  getPendingTransactions() {
    return this.pendingTransactions;
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  getDifficulty() {
    return this.difficulty;
  }

  setMiningReward(miningReward) {
    this.miningReward = miningReward;
  }

  getMiningReward() {
    return this.MiningReward;
  }

  minePendingTransactions(miningRewardAddress) {
    const rewardTx = new Transaction(
      this.miningReward,
      null,
      miningRewardAddress
    );
    this.pendingTransactions.push(rewardTx);
    console.log(JSON.stringify(this.pendingTransactions));
    let block = new Block(this.pendingTransactions);
    block.mineBlock(this.difficulty);

    console.log("Block successfully mined!");
    this.chain.push(block);

    this.pendingTransactions = [];
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress)
      throw new Error("Transaction must incule to and from addresses!");
    if (!transaction.isValid())
      throw new Error("Cannot add invalid transaction!");

    if (transaction.amount <= 0) {
      throw new Error("Transaction amount should be higher than 0");
    }

    if (transaction.amount > this.getBalance(transaction.fromAddress)) {
      throw new Error("Not enough Jaycoins!!!");
    }

    this.pendingTransactions.push(transaction);
  }

  getBalance(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }

    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.hasValidTransactions()) return false;
      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }
}

module.exports = new Blockchain();
