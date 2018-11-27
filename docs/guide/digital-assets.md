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

We need to first initialize the public apostille by calling the `PublicApostille` constructor

```typescript
import { NetworkType } from 'nem2-sdk';
import { ApostilleHttp, PublicApostille, KECCAK256, HistoricalEndpoints, Sinks } from 'apostille-library';

// Create our own account
const privateKey = 'aaaaaaaaaaeeeeeeeeeebbbbbbbbbb5555555555dddddddddd1111111111aaee';
const networkType = NetworkType.MIJIN_TEST;
const account = Account.createFromPrivateKey(privateKey, networkType);

// Default sink address and endpoint url
// const sinkAddress = Address.createFromRawAddress(Sinks[networkType]);
const sinkAddress = Address.createFromRawAddress('SCKPEZ-5ZAPYO-PXVF6U-YLHINF-CLYZHO-YCIO3P-KGVV');
const endpointUrl = HistoricalEndpoints[networkType];

// Start a connection to the endpoint
const apostilleHttp = new ApostilleHttp(endpointUrl);

// Initialize public apostille
const fileName = 'top_secret.pdf';
const myPublicApostille = new PublicApostille(fileName, sinkAddress);
```
At this point we have initialized our public apostille. To notarize our `top_secret.pdf` file we need to sign the raw file data. This will be our proof that the document existed and that it has not been tampered with.

```typescript
// Simulate the file content
const fileContent = CryptoJS.enc.Utf8.parse('Public apostille is awesome !');

const hashedFileContent = myPublicApostille.update(fileContent, new KECCAK256());
// Still not live yet!

// Sign with my account and announce to the blockchain
const signedApostille = account.sign(hashedFileContent);
apostilleHttp.announce(signedApostille).then((reply) => {
  console.log(reply);
});
```
Note that the update function accepts a `hashFunction` argument which will be used to create an apostille hash (which is a hash of the document plus a magical byte).

Currently `apostille-library` supports the following hash functions:
- MD5
- SHA-1
- SHA256
- KECCAK-256
- KECCAK-512

::: tip Note
Support for SHA3 should land soon in the library.
:::

::: warning Compatibility Note
in [NanoWallet](https://nem.io/downloads/) the SHA3 function is actually KECCAK this is why `apostille-library` will support both KECCAK and SHA3 for backward compatibility reasons. You can read more [here.](https://medium.com/@ConsenSys/are-you-really-using-sha-3-or-old-code-c5df31ad2b0)
:::


## Sink Address

Public apostille uses a public address (theoretically known to the public) as a sink for announcing the transaction containing the apostille hash this is where it's name "public" comes from.

`apostille-library`  has the following default sink address for different network types and that's to be compatible with NanoWallet

`MAIN_NET`: NCZSJHLTIMESERVBVKOW6US64YDZG2PFGQCSV23J

`TEST_NET` : TC7MCY5AGJQXZQ4BN3BOPNXUVIGDJCOHBPGUM2GE

`MIJIN_NET`: MCGDK2J46BODGGKMPIKCBGTBBIWL6AL5ZKLKQ56A
