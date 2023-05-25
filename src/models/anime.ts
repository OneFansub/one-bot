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
  Anime = "Anime",
  Movie = "Movie",
  OVA = "OVA",
  ONA = "ONA",
  Airing = "Airing",
  Finished = "Finished",
  Web_dl = "Web_dl",
  Web_rip = "Web_rip",
  BD = "BD",
  JAV = "JAV",
  Dub = "Dub",
}
