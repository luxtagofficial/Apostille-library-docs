# Ownership

The benefit of using private apostille standard is the ability to assign ownership to the apostille.

By assigning ownership, the private key of the HD account is invalidated on the blockchain and can no longer be used to initate any transactions.

### Assigning a 1-1 Ownership

```typescript{4}
const ownerPublicKey = 'E15CAB00A5A34216A8A29034F950A18DFC6F4F27BCCFBF9779DC6886653B7E56';
const ownerPublicAccount = PublicAccount.createFromPublicKey(ownerPublicKey);

const ownershipTransaction = apostille.associate([ownerPublicAccount], 1, 1);

// Announce
apostilleHttp.announce(ownershipTransaction).then((reply) => {
  console.log(reply);
});
```

::: warning
Note that the first argument for `associate` is an array of owners (eventhough we only have one).
:::

### M-N Ownership

::: tip M-N Ownership
A m-n ownership denotes the asset having a total of `N` owners and requires the signatures of a at least `M` owners to initiate any transactions.
:::

It is also possible to assign a M-N ownership. All you need is the public keys of all the owners and the apostille.

```typescript
const ownerPublicKeys = [<Array of public keys with length N>]

const ownershipTransaction = apostille.associate(ownerPublicKeys, M, M);

// Announce
apostilleHttp.announce(ownershipTransaction).then((reply) => {
  console.log(reply);
});
```
