const Colors = {
  yellow: "#FFFF00",
  "yellow-green": "#9ACD32",
  green: "#00FF00",
  "blue-green": "#0D98BA",
  blue: "#0000FF",
  "blue-violet": "#8A2BE2",
  violet: "#F800FF",
  "red-violet": "#C71585",
  red: "#FF0000",
  "red-orange": "#FF5349",
  orange: "#FFA500",
  "yellow-orange": "#FFAE42",
  white: "#FFFFFF",
  "light-gray": "#D3D3D3",
  gray: "#808080",
  "dark-gray": "#A9A9A9",
  black: "#000000",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  blurple: "#5865F2",
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
  media?: string;
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

  setColour(color: ColorOptions): this {
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
