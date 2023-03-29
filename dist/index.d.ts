const Colors = {
  white: "#FFFFFF",
  black: "#000000",
  red: "#FFA500",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#00FF00",
  cyan: "#00FFFF",
  blue: "#0000FF",
  magenta: "#FF00FF",
};

type ColorOptions = keyof typeof Colors | HexToString;

type HexToString = `#${string}`;

interface EmbedOptions {
  icon_url?: string;
  url?: string;
  title?: string;
  description?: string;
  media?: string;
  color?: ColorOptions;
}

export class EmbedBuilder {
  icon_url?: string;
  url?: string;
  title?: string;
  description?: string;
  media?: Media;
  color?: string;

  constructor() {
    return this;
  }

  setIconUrl(icon_url: string): this {
    this.icon_url = icon_url;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  setMedia(media: string): this {
    this.media = media;
    return this;
  }

  setColour(color:ColorOptions): this {
    this.color = Colors[color] || color;
    return this;
  }

  toJson(): EmbedOptions {
    return {
      icon_url: this.icon_url,
      url: this.url,
      title: this.title,
      description: this.description,
      media: this.media,
      color: this.color,
    };
  }
}

