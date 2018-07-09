# Notarizing digital assets

## Introduction

Apostille offers two different types of standards:
- Public Apostille
- Private Apostille

If you want to notarize a digital document Public Apostille is the most straight forward way to do it, with Public Apostille you can create a [timestamped](https://en.wikipedia.org/wiki/Timestamp) finger print hash of a document and send it as transaction to a public sink address providing a proof of existence that is immutable and can be verified.

## Using Public Apostille

We need to first initialize the Public Apostille by calling the `PublicApostille` constructor

```typescript
import { NetworkType } from 'nem2-sdk';
import { Initiator, PublicApostille, KECCAK256 } from 'apostille-library';

// ... here you create your initiator
// refer to the Getting Started section

const fileName = 'top_secret.pdf';
const myPublicApostille = new PublicApostille(initiator, fileName, NetworkType.MIJIN_TEST);

```
At this point we initialized our Public Apostille to notarize the so called `top_secret.pdf` document next step is to get the raw file data.

```typescript
// Simulate the file content
const fileContent = CryptoJS.enc.Utf8.parse('Public apostille is awesome !');

myPublicApostille.update(fileContent, new KECCAK256());
```
notice that the update function accepts another argument `hashFunction` which will be used to create an apostille hash which is a hash of the document plus a magical byte.
`apostille-library` supports different hash functions:
- MD5
- SHA-1
- SHA256
- KECCAK-256
- KECCAK-512

::: tip Note
Support for SHA3 should land soon in the library.
:::

::: warning Compatibility Note
in [NanoWallet](https://nem.io/downloads/) the SHA3 function is actually KECCAK this is why `apostille-library` will support both KECHAK and SHA3 for backward compatibility reasons. you can [read more](https://medium.com/@ConsenSys/are-you-really-using-sha-3-or-old-code-c5df31ad2b0)
:::

## Sink Address

Public apostille uses a public address (theoretically known to the public) as a sink for announcing the transaction containing the apostille hash this is where it's name "public" comes from.

`apostille-library`  has the following default sink address for different network types and that's to be compatible with NanoWallet

`MAIN_NET`: NCZSJHLTIMESERVBVKOW6US64YDZG2PFGQCSV23J

`TEST_NET` : TC7MCY5AGJQXZQ4BN3BOPNXUVIGDJCOHBPGUM2GE

`MIJIN_NET`: MCGDK2J46BODGGKMPIKCBGTBBIWL6AL5ZKLKQ56A

however this can easily be overwetted by providing your sink address when instantiating a public apostille through the `publicApostill` class.

```typescript
import { NetworkType } from 'nem2-sdk';
import { Initiator, PublicApostille } from 'apostille-library';

// ... here you create your initiator
// refer to the Getting Started section

const fileName = 'top_secret.pdf';
const mySinkAddress = SCGDK2J46BODGGKMPIKCBGTBBIWL6AL5ZKLKQ56A;
const myPublicApostille = new PublicApostille(initiator, fileName, NetworkType.MIJIN_TEST, mySinkAddress);
```

::: warning Note
`MIJIN_TEST` doesn't have any official sink address yet, this is why you should provide a sink address in the `PublicAccount` class constructor.
:::


