# Transfer ownership

## Transfer of full ownership

Now that we have a 1-1 ownership of an apostille, we can transfer the full rights of an apostille to a new owner.

```JS
const apostillePublicKey = 'E4A0080F882BB18E412D6C7D4A5A2FA4245132F5BAA83BAAAEB08923C88C140F';
const apostillePublicAccount = PublicAccount.createFromPublicKey(apostillePublicKey, NetworkType.MIJIN_TEST);
const apostille = new ApostillePublicAccount(apostillePublicAccount);

const myPrivateKey = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
const myAccount = Account.createFromPrivateKey(myPrivateKey, NetworkType.MIJIN_TEST);

const newOwnerPublicKey = 'D8CFE3FC7ECEE0DF051DBB7D05E97B50F53C9057DFF18489E8272FC0EE26F7EF';
const newOwnerPublicAccount = PublicAccount.createFromPublicKey(newOwnerPublicKey, NetworkType.MIJIN_TEST);

const quorumDelta = 0;
const minRemovalDelta = 0;

// Initiate a transfer of ownership transaction
const transferTransaction = apostille.transfer([newOwnerPublicAccount], [myAccount.publicAccount], quorumDelta, minRemovalDelta);

// I approve this transaction
apostilleHttp.addTransaction({
  initiator: new Initiator(myAccount),
  transaction: transferTransaction,
});

apostilleHttp.announceAll().subscribe((reply) => {
  console.log(reply);
});
```

Note that we use `ApostillePublicAccount` not `Apostille` here. This is because after the first assignment of ownership, we do not need the private key for the private apostille HD account.

::: danger
`quorum` and `minRemoval` are deltas, not the actual number, unlike in the Ownership example.
:::

## Transfer of partial ownership

It is possible to add or remove owners, however care must be taken when changing the total number of owners.

If the total number of owners remain the same after the update, it is usually safe to keep `quorumDelta` and `minRemovalDelta` to 0.