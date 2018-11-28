# Verification and Auditing

## Verification

The verification methods provided are to check if the hash conforms to apostille standards and to ensure the integrity of the file contents.

To check if the hash is an apostille hash
``` js
import { Verifier } from 'apostille-library';

// Some hashed payload
const unknownHash;

// Returns true if it conforms to apostille format, false otherwise
console.log(Verifier.isApostille(unknownHash));
```

To determine if the hash is public or private apostille
``` js
import { Verifier } from 'apostille-library';

const apostilleHash;

// Returns true if public apostille, false otherwise
Verifier.isPublicApostille(apostilleHash);

// Returns true if private apostille, false otherwise
Verifier.isPrivateApostille(apostilleHash);
```

## Public Apostille

To audit public apostille, we need the apostille hash and the file contents.

The apostille hash is found in `hashedFileContent` from the [Using Public Apostille](./digital-assets.html#using-public-apostille) example.

``` js
const apostilleHash = hashedFileContent.message;
const fileContent = CryptoJS.enc.Utf8.parse('Public apostille is awesome !');

// Returns true
Verifier.verifyPublicApostille(apostilleHash, fileContent);
```

## Private Apostille

The procedure is similar in private apostille. However, we also need the public account of the signer of the hash.

In the [Coloring](./real-assets.html#coloring) example, we use the apostille account to sign the payload.

```js
const fileContent = CryptoJS.enc.Utf8.parse('A certificate for my LAMY 2000');
apostilleHttp.getCreationTransaction(apostillePublicAccount.publicAccount).then((creationTransaction) => {
    const apostilleHash = creationTransaction.message;
    Verifier.verifyPrivateApostille(apostillePublicAccount, fileContent, apostilleHash);
})
```
