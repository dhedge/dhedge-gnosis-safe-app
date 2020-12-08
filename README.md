# dHEDGE App For Gnosis Safe

At current version it allows to invest and withdraw from pools. It is deployed here, so you can use it even before it gets merged into Gnosis:

`https://gnosis-safe.io/app/#/safes/${your-wallet-address}/apps?appUrl=https://dhedge-gnosis-app.web.app/`

First select a pool you want to interact with:

<img width="1061" alt="Screenshot 2020-12-03 at 2 48 56 pm" src="https://user-images.githubusercontent.com/246085/101434990-ad790d00-395f-11eb-8636-b44314667a9d.png">

Then select the amount of sUSD to invest (or amount of pool tokens to return and withdraw):

<img width="846" alt="Screenshot 2020-12-03 at 2 50 30 pm" src="https://user-images.githubusercontent.com/246085/101435008-b2d65780-395f-11eb-8336-c9b4a7275d48.png">

You will notice two transactions for investing (sUSD `approve` and `deposit` calls) and one for withdrawing:

<img width="517" alt="Screenshot 2020-12-03 at 2 50 39 pm" src="https://user-images.githubusercontent.com/246085/101435005-b1a52a80-395f-11eb-8883-51fe6d79bfa4.png">

And finally, it should appear in the transaction screen waiting for confirmations/execution:

<img width="1090" alt="Screenshot 2020-12-03 at 2 52 28 pm" src="https://user-images.githubusercontent.com/246085/101435001-b10c9400-395f-11eb-91a3-51d9382c7000.png">
