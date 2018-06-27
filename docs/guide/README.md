# Introduction

[NEM](https://nemtech.github.io/getting-started/what-is-nem.html) Apostille is a standard that enables a very versatile blockchain notorization and certification system. It is used for a variety of use cases including the following: 

- proof of existence for real world and digital assets, 
- certificates of ownership, authenticity and operation for IOT devices, 
- use the blockchain to show chain-of-custody and/or supply chain projects,
- providing on-chain certificates, diplomas, land titles, ID where the entire certificate is represented on the blockchain and is transferable and updatable. 

and more...

## How It Works

The key innovation of Apostille is the realization that every item can be given its own private key, and that private key can be used to make a container address ([account](https://nemtech.github.io/concepts/account.html)) to record data about the item, have value sent to and from the item, and taking advantage of NEM's advanced multisig be used to even transfer ownership of the item's container on-chain from person to person.  

This is an evolutionary leap from other blockchain notarization applications which often just record a fingerprint or hash of a document to show that it exists. 

Also, due to the nature of NEM's architecture, few if any other blockchains can reproduce the utility unlocked by the NEM Apostille Standard.

## Features

- supports Catapult
- Supports [nem2-sdk](https://nemtech.github.io/guides/overview.html)
- support public and private Apostille
- custom sink for public Apostille
- support of encrypted messages
- update function for private Apostille
- ownership transfer for private Apostille
- support multisig accounts
- Supports different hash functions
  - MD5
  - SHA-1
  - SHA256
  - KECCAK-256
  - KECCAK-512
  - SHA3-256
  - SHA3-512


## To Do

Apostille-library is still a work in progress. There are a few things that it currently does not support but are planned:

- auditing and verification of the Apostilles
- create .nty file for NanoWallet
- Supports for SHA3-256 and SHA3-512 hash functions

Contributions are welcome!
