# Verification and auditing

```JS
const apostPublicKey = 'E4A0080F882BB18E412D6C7D4A5A2FA4245132F5BAA83BAAAEB08923C88C140F';
const apostPublicAccount = PublicAccount.createFromPublicKey(apostPublicKey, NetworkType.MIJIN_TEST);

const apostilleAccount = new ApostilleAccount(apostPublicAccount);

apostilleAccount.getCreationTransaction().then((creationTransaction) => {
    const signer = creationTransaction.signer;
    const payload = creationTransaction.message.payload;
    const data = 'I am awesome';

    // signer could be undefined
    if (signer) {
       console.log(`Apostille is ${Verifier.verifyPrivateApostille(signer, data, payload)}`);
    } else {
        console.log('Signer not found');
    }
});
```
