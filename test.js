const { Handler } = require("revolthandler.js");
const { Client } = require("revolt.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new Client();
const handler = new Handler({
  client: client,
  prefix: "/",
  owners: ["01FCXFBQPYCBZWX40NSBYXYAWW"],
  path: "./commands/javascript",
});

client.loginBot(`${process.env.BOT_TOKEN}`);
client.on("ready", () => {
  handler.start();
});
