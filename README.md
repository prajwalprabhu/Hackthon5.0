# Hackthon5.0

- `front-js` : contains the front-end code .It is a react app ,it uses `ethers-js` and `metamask` for the transaction.And also communicates with a backend for

  - login
  - signup
  - dashboard

  uploading files ,haven't been implimented.

- `back` : contains the back-end code .It is a epress app ,
  I tried to use `neon-js` to connect it to my blockchain and get the transaction details, but It couldn't make it to work :| .
  All the data is stored like user name,password ,public_key , isCreator,isConsumer and posts in mongo-db in atlas

- `blockchain` :
  neon
  Smart contract to store and retrive the transaction details.
