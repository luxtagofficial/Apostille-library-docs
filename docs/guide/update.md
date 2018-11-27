# Updating a notarized assets
### 1. Using Account class
 * 1. Init
 * 2. Create without Hash
 * 3. Update
 * 4. Announce and monitor it

```JS

const seed = 'this is cool seed';
const generatorPK = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
const generatorAccount = Account.createFromPrivateKey(generatorPK, NetworkType.MIJIN_TEST);

const apostille = Apostille.init(seed, generatorAccount);

const asyncApotille = async () => {
    const initiator = new Initiator(generatorAccount);
    const firstData = 'this is cool firstData';
    const secondData = 'second data is cool as well';

    await apostille.create(initiator, firstData).catch((err) => {
        console.log(err);
    });

    await apostille.update(initiator, secondData).catch((err) => {
        console.log(err);
    });

    apostille.announce().then(() => {
        apostille.monitor().onConfirmed().then((chanell) => {
            chanell.subscribe(
                (transaction) => {
                    console.log({transaction});
                },
                (err) => {
                    console.error(err);
                });
        });
    });
};

asyncApotille();
```

### 2. Using Apostille Account class
 * 1. PublicKey of the multisig provided
 * 2. Create without Hash
 * 3. Update
 * 4. Announce and monitor it
 
 ```JS
 const apostPublicKey = 'D8CFE3FC7ECEE0DF051DBB7D05E97B50F53C9057DFF18489E8272FC0EE26F7EF';
const apostPublicAccount = PublicAccount.createFromPublicKey(apostPublicKey, NetworkType.MIJIN_TEST);

const apostilleAccount = new ApostilleAccount(apostPublicAccount);

const asyncApotille = async () => {
    const generatorPK = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
    const generatorAccount = Account.createFromPrivateKey(generatorPK, NetworkType.MIJIN_TEST);
    const initiator = new Initiator(generatorAccount);

    const firstData = 'this is cool firstData';
    const secondData = 'second data is cool as well';

    await apostilleAccount.create(initiator, firstData).catch((err) => {
        console.log(err);
    });

    await apostilleAccount.update(initiator, secondData).catch((err) => {
        console.log(err);
    });

    apostilleAccount.announce().then(() => {
        apostilleAccount.monitor().onConfirmed().then((chanell) => {
            chanell.subscribe(
                (transaction) => {
                    console.log({transaction});
                },
                (err) => {
                    console.error(err);
                });
        });
    });
};

asyncApotille();
 ```
