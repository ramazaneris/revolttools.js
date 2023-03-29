import { EmbedBuilder } from "../../../dist/index";

export default {
  name: "getembed",
  code(msg: any, args: any, client: any) {
    let emb = new EmbedBuilder();
    emb.setColour("orange").setDescription("Heyyo").setTitle("Cool title");
    console.log(emb);
    msg.reply({ content: "wait", embeds: [emb] });
  },
};
