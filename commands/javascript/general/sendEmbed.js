const { EmbedBuilder } = require("../../../dist/index");

exports.default = {
  name: "getembed",
  code(msg, args, client) {
    let emb = new EmbedBuilder();
    emb.setColour("orange").setDescription("Heyyo").setTitle("Cool title");
    console.log(emb);
    msg.reply({ content: "wait", embeds: [emb] });
  },
};
