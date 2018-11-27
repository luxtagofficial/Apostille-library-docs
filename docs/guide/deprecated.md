# Deprecated functions

## Version 1.0.0 ~ 6.1.6

### Initiator

Whether it's for creating, updating owning or transfering an ownership of an apostille all of these actions are in fact transactions that will be recorded on the blockchain and every transaction needs an initiator.

The  `Initiator` class in `apostille-library` is used to define the initiator of the transaction.

The initiator can either be a normal account or a [multisigniture account](https://nemtech.github.io/concepts/multisig-account.html)

#### Normal Account

```typescript
import { Account, NetworkType} from 'nem2-sdk';
import { Initiator } from 'apostille-library';

// a funny but valid private key
const pk = 'aaaaaaaaaaeeeeeeeeeebbbbbbbbbb5555555555dddddddddd1111111111aaee';
const myAccount = Account.createFromPrivateKey(pk, NetworkType.MIJIN_TEST);

const initiator = new Initiator(myAccount, NetworkType.MIJIN_TEST);
```
#### Multisignature Account

For a multisig account we need to provide the multisg public account and one of the cosignatories as an inititor of the transaction and we can also feed as many cosignatories as we want to sign the [aggregate transaction](https://nemtech.github.io/concepts/aggregate-transaction.html) made by the first account.

::: warning Definition of a multisig account
A m-n multisig account as an account that has n cosignitories and requires minimum m accounts to sign.
:::

##### 1-n Multisig

For a 1-n multisig we just provide one cosignatry which will be the only account needed to create an [aggregate complete](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-complete)

```typescript
import { Account, NetworkType} from 'nem2-sdk';
import { Initiator } from 'apostille-library';

// the account that will initiate the transaction
const cosignatoryPrivateKey = process.env.COSIGNATORY_0_PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(cosignatoryPrivateKey, NetworkType.MIJIN_TEST);

// the multisig account that transaction will be initiated from
const multisigPublicKey = '7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246';
const multAccount = PublicAccount.createFromPublicKey(multisigPublicKey, NetworkType.MIJIN_TEST);

const initiator = new Initiator(account, NetworkType.MIJIN_TEST, multAccount, true);
```

Note the last boolean argument is there to determine if the aggregate transaction from the multisig is complete or bonded this argument is compulsory the moment you provide a multisig account.

::: tip
for a 1-n relationship the initiator should always create an aggregate complete .
:::

##### m-n Multisig

While the 1-n relationship alwayse produces an aggregate complete transaction an m-n depends on how many cosignatory accounts do we have to initilize our initiator.

And as one would expect you can feed as many cosignatory account as you want to the initiator constructor.

```typescript
import { Account, NetworkType} from 'nem2-sdk';
import { Initiator } from 'apostille-library';

// the account that will initiate the transaction
const cosignatory0PrivateKey = process.env.COSIGNATORY_0_PRIVATE_KEY as string;
const account = Account.createFromPrivateKey(cosignatory0PrivateKey, NetworkType.MIJIN_TEST);

// the multisig account that transaction will be initiated from
const multisigPublicKey = '202B3861F34F6141E120742A64BC787D6EBC59C9EFB996F4856AA9CBEE11CD31';
const multAccount = PublicAccount.createFromPublicKey(multisigPublicKey, NetworkType.MIJIN_TEST);

// other cosignatories that will cosign the transaction created by the first cosignatory
const cosignatory2PrivateKey = process.env.COSIGNATORY_1_PRIVATE_KEY as string;
const cosignatory1 = Account.createFromPrivateKey(cosignatory1PrivateKey, NetworkType.MIJIN_TEST);
const cosignatory2PrivateKey = process.env.COSIGNATORY_2_PRIVATE_KEY as string;
const cosignatory2 = Account.createFromPrivateKey(cosignatory2PrivateKey, NetworkType.MIJIN_TEST);

const initiator = new Initiator(account, NetworkType.MIJIN_TEST, multAccount, false, [cosignatory1, cosignatory2]);
```
As we see in the example above we have created other cosignatories accounts that can cosign the transaction the first account and we feed it as an array of accounts to the initiator constructor, notice also that the `isComplete` parameter set to `false` which means the initiator will only create an [aggregate bonded](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) transaction and that more cosignatories will have to eventually sign the transaction once announced to the network.