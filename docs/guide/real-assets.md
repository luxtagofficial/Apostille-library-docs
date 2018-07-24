# Notarizing real life assets

### Initialize apostille object
```JS
import {Apostille} from 'apostille-library';

const seed = 'This is awesome seed';
const creatorPK = '89DB20331691B1C5C86E0A9CBC41B886A958EF83DDA21281BFBC70C7695B1B3D';
const creatorAccount = Account.createFromPrivateKey(pk, NetworkType.MIJIN_TEST);

const apostille  = new Apostille(seed, creatorAccount);

```

### Create
Create apostille is a function to create an instance of apostille where you can send raw data, and if you provided the hash function it will hash the data

```JS
// create first transaction
const rawData = 'be calm';
const initAccount = new Initiator(merchantAccount);

apostille.create(initAccount, rawData, [], new SHA256()).catch((err) => {
   console.error(err) ;
});
```

### Announce
After create Announce all transactions to the network.

```JS
apostille.announce().then(() => {
  	console.log('announced')
}).catch((err) => {
    console.error(err);
});

```

### Monitor
You can monitor the transaction of apostille account, for example to monitor onConfirmed method after announce the transaction
```JS
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
}).catch((err) => {
    console.error(err);
});
```
