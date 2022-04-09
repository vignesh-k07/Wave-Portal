 require("@nomiclabs/hardhat-waffle");

 module.exports = {
   solidity: "0.8.4",
   networks: {
     rinkeby: {
       url: process.env.API_URL,
       accounts: [process.env.PRIVATE_KEY]
     },
   },
 };