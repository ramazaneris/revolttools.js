# revolthandler.js

## Description

Simple toolkit for revolt.js

## Table of contents

- [About](#about)
- [Example Usage](#example)
  - [EmbedBuilder](#example-embed-builder)

## About

Simple toolkit for revolt.js

## Badges

[![NPM Downloads](https://img.shields.io/npm/dt/revolttools.js.svg?style=flat-square)](https://www.npmjs.com/package/revolttools.js)

## Install

> npm i revolttools.js

## Example

🟢 The examples are provided with [revolthandler.js](https://www.npmjs.com/package/revolthandler.js)

### Example Embed Builder

CommonJS

```js
//"./commands/general/ping.js"
const { EmbedBuilder } = require("revolttools.js");

exports.default = {
  name: "ping",
  description: "Ping!", //description :P
  //Be careful
  code(message, args, client) {
    let emb = new EmbedBuilder()
      .setDescription("Hello world!")
      .setTitle("pong")
      .setColour("red")//supports hex codes
      .setUrl("https://www.npmjs.com/package/revolttools.js")
      .setIconUrl(""); //You can add an picture in front of the title
      .setMedia("")//You can add an big picture
    message.channel.sendMessage({ embeds: [emb] });

  /*And you can get output as a json with console.log(emb.toJson())*/
  },
};
```

EsModule

```ts
import { EmbedBuilder } from "revolttools.js";

export default {
  name:"ping",
  description:"Ping!"
  code(message:any,args:string[],client:any){
    let emb = new EmbedBuilder()
      .setDescription("Hello world!")
      .setTitle("pong")
      .setColour("red")//supports hex codes
      .setUrl("https://www.npmjs.com/package/revolttools.js")
      .setIconUrl(""); //You can add an picture in front of the title
      .setMedia("")//You can add an big picture
    message.channel.sendMessage({ embeds: [emb] });

  /*And you can get output as a json with console.log(emb.toJson())*/F
  }
}
```

- [Come to my server](https://rvlt.gg/zrmFWtJz)

# Will add new features in the future

# revolttools.js
