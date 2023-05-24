export interface Anime {
  title: string;
  sumary?: string;
  credits?: [{ name: any; value: string }];
  episodes?: string;
  primaryColor: `#${string}`;
  tags?: AnimeTag[];
  imageLink?: string;
  downloadLink?: string;
  discordMessageLink?: string;
  malLink?: string;
  anilistLink?: string;
  createdAt?: string;
  updatedAt?: string;
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
