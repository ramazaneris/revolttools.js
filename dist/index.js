const Colors = {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    green: "#00FF00",
    cyan: "#00FFFF",
    blue: "#0000FF",
    magenta: "#FF00FF",
  };
  
  class EmbedBuilder {
    icon_url;
    url;
    title;
    description;
    media;
    colour;
  
    constructor() {
      return this;
    }
  
    setIconUrl(icon_url) {
      this.icon_url = icon_url;
      return this;
    }
  
    setUrl(url) {
      this.url = url;
      return this;
    }
  
    setTitle(title) {
      this.title = title;
      return this;
    }
  
    setDescription(description) {
      this.description = description;
      return this;
    }
  
    setMedia(media) {
      this.media = media;
      return this;
    }
  
    setColour(color) {
      this.colour = Colors[color] || color;
      return this;
    }
  
    toJson() {
      return this;
    }
  }
  
  module.exports = { EmbedBuilder };
  