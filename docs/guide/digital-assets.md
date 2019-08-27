# Notarizing digital assets

## Introduction

Apostille offers two different types of standards:
- Public Apostille
- Private Apostille

If you want to notarize a digital document Public Apostille is the most straight forward way to do it, with Public Apostille you can create a [timestamped](https://en.wikipedia.org/wiki/Timestamp) finger print hash of a document and send it as transaction to a public sink address providing a proof of existence that is immutable and verifiable.

## Using Public Apostille

To start using public apostille, you would need the following items:
- Generator account
- File to apostille
- Apostille 'Sink' address
- Endpoint url

::: tip
For the sink address and endpoint url, `apostille-library` provides a list of defaults based on the `NetworkType`.
:::

::: warning Note
`MIJIN_TEST` doesn't have any official sink address yet, this is why we define our own sink for this example.
:::

We first create an apostille instance.

```typescript
import { Apostille, ApostilleHttp, HistoricalEndpoints, Initiator, KECCAK256, SHA256 } from 'apostille-library';
import { Account, Crypto, NetworkType, PublicAccount } from 'nem2-sdk';

// Create our own account
// const privateKey = 'aaaaaaaaaaeeeeeeeeeebbbbbbbbbb5555555555dddddddddd1111111111aaee';
// Or use a randomly generated account
const privateKey = Crypto.randomKey().toString('hex');

const network = NetworkType.MIJIN_TEST;
const owner = Account.createFromPrivateKey(privateKey, network);

// Demo Public Apostille Sink Address
const sinkPublicKey = SHA256.hash('PublicApostilleSinkAddress');
const sinkAddress = PublicAccount.createFromPublicKey(sinkPublicKey, network).address;

// Initialize public apostille
const fileName = 'top_secret.pdf';
const myPublicApostille = Apostille.initFromSeed(fileName, owner);
```
At this point we have initialized our public apostille. To notarize our `top_secret.pdf` file we need to sign the raw file data. This will be our proof that the document existed and that it has not been tampered with.

```typescript
// Simulate the file content
const fileContent = JSON.stringify('Public apostille is awesome !');

// Add fileHash to apostille account
const fileHash = new KECCAK256().signedHashing(fileContent, privateKey, network);
const apostilleTx = myPublicApostille.update(fileHash);

// Designate apostille as Public Apostille
const sinkTx = myPublicApostille.update(fileHash, sinkAddress);

// Add apostille metadata
const metadata = {
  filename: fileName,
  tags: ['apostille', 'sample', 'LuxTag'],
  description: 'Apostille file'
};
const metadataTx = myPublicApostille.update(JSON.stringify(metadata));

// Still not live yet!
```
Now we can prepare the apostille for announcing to the blockchain. We will use the provided `announceAll()` function.
```typescript
// Start a connection to the endpoint
const endpointUrl = HistoricalEndpoints[network];
const apostilleHttp = new ApostilleHttp(endpointUrl);

// Build apostille transaction
apostilleHttp.addTransaction({
  initiator: new Initiator(owner),
  transaction: apostilleTx,
});
apostilleHttp.addTransaction({
  initiator: new Initiator(myPublicApostille.HDAccount),
  transaction: sinkTx,
});
apostilleHttp.addTransaction({
  initiator: new Initiator(owner),
  transaction: metadataTx,
});

// Announce our new apostille to the world!
apostilleHttp.announceAll().subscribe(
  (result) => {
    console.log(result);
  },
);
```

## Hashing Functions

Currently `apostille-library` supports the following hash functions:
- MD5
- SHA1
- SHA256
- KECCAK256
- KECCAK512
- SHA3_256
- SHA3_512

::: warning Compatibility Note
in [NanoWallet](https://nem.io/downloads/) the SHA3 function is actually KECCAK this is why `apostille-library` will support both KECCAK and SHA3 for backward compatibility reasons. You can read more [here.](https://medium.com/@ConsenSys/are-you-really-using-sha-3-or-old-code-c5df31ad2b0)
:::


## Sink Address

Public apostille uses a public address (theoretically known to the public) as a sink for announcing the transaction containing the apostille hash this is where it's name "public" comes from.

`apostille-library`  has the following default sink address for different network types and that's to be compatible with NanoWallet

`MAIN_NET`: NCZSJHLTIMESERVBVKOW6US64YDZG2PFGQCSV23J

`TEST_NET` : TC7MCY5AGJQXZQ4BN3BOPNXUVIGDJCOHBPGUM2GE

`MIJIN_NET`: MCGDK2J46BODGGKMPIKCBGTBBIWL6AL5ZKLKQ56A
