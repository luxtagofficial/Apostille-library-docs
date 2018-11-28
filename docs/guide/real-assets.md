# Notarizing transferable assets

## Introduction

To create a transferable apostille, we will use the private apostille standard.

### Initialize a private apostille object
```typescript
import { Apostille } from 'apostille-library';

const seed = 'This is awesome seed';
const creatorPK = '89DB20331691B1C5C86E0A9CBC41B886A958EF83DDA21281BFBC70C7695B1B3D';
const creatorAccount = Account.createFromPrivateKey(creatorPK, NetworkType.MIJIN_TEST);

const apostille  = Apostille.init(seed, creatorAccount);
```

### Hierarchical Deterministic (HD) account

The `Apostille.init()` method will generate a HD account that will represent the apostilled asset on the blockchain.

You can view the HD account details using `apostille.HDAccount`.

### Coloring
Once we have initialized the private apostille account, we will need to color the HD account to "apostille" it.

In this example, we will color the HD account with the hash of the file contents of a document.

```typescript
// Simulate our file contents
const fileContent = CryptoJS.enc.Utf8.parse('A certificate for my LAMY 2000');
const apostillePublicAccount = apostille.apostillePublicAccount;

const fingerprintTransaction = apostillePublicAccount.update(fileContent);
const signedTransaction = apostillePublicAccount.sign(fingerprintTransaction, apostille.HDaccount, new KECCAK256());

// Announce to timestamp it on the blockchain
apostilleHttp.announce(signedApostille).then((reply) => {
  console.log(reply);
});
```

### Monitor
It is important to monitor transactions on the apostille account. This principle is true for any blockchain applications.

For up to date information on how to monitor transactions on NEM Catapult click [here.](https://nemtech.github.io/guides/account/receiving-transactions-from-an-account.html)
