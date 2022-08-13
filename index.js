// Import express and the file containing our route definitions
const express = require("express");
const app = express();
const routes = require("./src/routes");

// Import Twilio and initialize the client.
// IMPORTANT: Remember to set environment variables for your Account SID and Auth Token.
const twilio = require("twilio");
const accountSid = "ACa7e94b4cfdfe77171e498c9b11f48404";
const authToken = "6319df634ea7b069b544c1e1f06a4c6a";
const client = twilio(accountSid, authToken);

// Configure the express application
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// Start the server
app.listen(port, () => {
  /*
  This is an example of string interpolation via Template Literals.
  This is an easier way of building strings than we've seen in the JS Test Lab. Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  */
  console.log(`Your Express application is running on port ${port}`);
});
