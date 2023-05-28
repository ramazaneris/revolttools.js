import { Handler } from "revolthandler.js";
import { Client } from "revolt.js";
import "dotenv/config";

const client = new Client();
const handler = new Handler({
  client: client,
  prefix: "/",
  owners: ["01FCXFBQPYCBZWX40NSBYXYAWW"],
  path: "./test/commands/typescript",
});

client.loginBot(`${process.env.BOT_TOKEN}`);
client.on("ready", () => {
  handler.start();
});
