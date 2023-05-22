export interface Anime {
  createdAt?: string;
  updatedAt?: string;
  primaryColor?: number;
  downloadLink?: string;
  title?: string;
  tags?: AnimeTag[];
  episodes?: string;
  sumary?: string;
  imageLink?: string;
  discordMessageLink?: string;
}

export enum AnimeTag {
  Anime,
  Movie,
  OVA,
  ONA,
  Airing,
  Finished,
  Web_dl,
  Web_rip,
  BD,
  JAV,
  Dub,
}
