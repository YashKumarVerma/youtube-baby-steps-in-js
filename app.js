/**
 * load the express package to a constant
 */
const express = require("express");

/**
 * create an instance of express
 */
const app = express();

/**
 * The port to which the application must listen on
 */
const port = 3000;

/**
 * reply hello when "root" is accessed
 */
app.get("/", (incomingRequest, responseToBeSent) => {
  responseToBeSent.send("Hello World !");
});

/**
 * make application listen and respond (basically interact) on port 3000
 */
app.listen(port, () =>
  console.log(`My beast server is running on http://localhost:${port}`)
);
