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

app.get("/user", (req, res) => {
  res.send("Hello User !");
});

/**
 * using params to get data from url
 */
app.get("/user/:username", (request, response) => {
  // response.send("Hello " + username + " !");
  response.json({
    message: `Hello ${request.params.username}`,
  });
});

app.get("/user/:username/:age", (request, response) => {
  // response.send("Hello " + username + " !");
  response.send(
    `Hello ${request.params.username} ! I know that you are ${request.params.age} years old !`
  );
});

/**
 * make application listen and respond (basically interact) on port 3000
 */
app.listen(port, () =>
  console.log(`My beast server is running on http://localhost:${port}`)
);
