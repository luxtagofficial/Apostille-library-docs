# Transfer of ownership

 * 1. declare Apostille Account, Current Owner Account and NewOwner Public Account
 * 2. Create without Hash
 * 3. Announce and monitor it
 
 ```JS
 const apostPublicKey = 'E4A0080F882BB18E412D6C7D4A5A2FA4245132F5BAA83BAAAEB08923C88C140F';
const apostPublicAccount = PublicAccount.createFromPublicKey(apostPublicKey, NetworkType.MIJIN_TEST);

const apostilleAccount = new ApostilleAccount(apostPublicAccount);

const ownerPK = 'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730';
const ownerAccount = Account.createFromPrivateKey(ownerPK, NetworkType.MIJIN_TEST);

const newOwnerPublicKey = 'D8CFE3FC7ECEE0DF051DBB7D05E97B50F53C9057DFF18489E8272FC0EE26F7EF';
const newOwnerPublicAccount = PublicAccount.createFromPublicKey(newOwnerPublicKey, NetworkType.MIJIN_TEST);

apostilleAccount.transfer([ownerAccount], true, [newOwnerPublicAccount], [ownerAccount.publicAccount], 1, 1);
```
