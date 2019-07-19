const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const key = ec.genKeyPair();

export const publicKey = key.getPublic("hex");
export const privateKey = key.getPrivate("hex");

console.log("Private key: " + privateKey);
console.log("Public key: " + publicKey);
