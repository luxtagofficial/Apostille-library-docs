# Ownership and conjoint ownership

### 1. 1-1 Ownership
 * 1. Init
 * 2. Create without Hash
 * 3. Own
 * 4. Announce and monitor it
 
 ```JS
 const seed = 'this is cool seed';
const generatorPK = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
const generatorAccount = Account.createFromPrivateKey(generatorPK, NetworkType.MIJIN_TEST);

const apostille = Apostille.init(seed, generatorAccount);

const asyncApotille = async () => {
    const initiator = new Initiator(generatorAccount);
    const firstData = 'this is cool firstData';

    await apostille.create(initiator, firstData).catch((err) => {
        console.log(err);
    });

    apostille.own([generatorAccount.publicAccount], 1, 1);

    apostille.announce().then(() => {
        apostille.monitor().onConfirmed().then((chanell) => {
            chanell.subscribe(
                (transaction) => {
                    console.log({transaction});
                },
                (err) => {
                    console.error(err);
                },
            );
        });
    });
};

asyncApotille();
```

### 2. Co-joint Ownership
 * 1. Init
 * 2. Create without Hash
 * 3. Own by 2 owner
 * 4. Announce and monitor it
 
 ```JS
 const seed = 'this is cool seed';
const generatorPK = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
const generatorAccount = Account.createFromPrivateKey(generatorPK, NetworkType.MIJIN_TEST);

const apostille = Apostille.init(seed, generatorAccount);

const asyncApotille = async () => {
    const initiator = new Initiator(generatorAccount);
    const firstData = 'this is cool firstData';

    await apostille.create(initiator, firstData).catch((err) => {
        console.log(err);
    });

    const secondOwnerPublicKey = 'EA01AB95C8B6006D9F77FD23249B4A27AAA130F7E066BA396AC29762FDDECAB6';
    const secondOwnerPublicAccount = PublicAccount.createFromPublicKey(secondOwnerPublicKey, NetworkType.MIJIN_TEST);
    apostille.own([generatorAccount.publicAccount, secondOwnerPublicAccount], 2, 1);

    apostille.announce().then(() => {
        apostille.monitor().onConfirmed().then((chanell) => {
            chanell.subscribe(
                (transaction) => {
                    console.log({transaction});
                },
                (err) => {
                    console.error(err);
                },
            );
        });
    });
};

asyncApotille();
 ```
