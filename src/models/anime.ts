import {
  APIEmbed,
  APIEmbedField,
  EmbedBuilder,
  TimestampStyles,
  time,
} from "discord.js";

export interface Anime {
  title: string;
  sumary?: string;
  credits?: [{ name: string; value: string }];
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

export function animeToEmbed(anime: Anime): APIEmbed {
  const embedData: APIEmbed = {
    title: anime.title,
    description: "**Sinopsis: **" + anime.sumary,
    url: anime.downloadLink,
    image: { url: anime.imageLink ?? "" },
    author: { name: "BeatZ-Anime" },
  };

  const embedFields = buildEmbedFields(anime);

  const a = EmbedBuilder.from(embedData)
    .setColor(anime.primaryColor)
    .setFields(embedFields)
    .setFooter({ text: tagsToString(anime.tags) })
    .setTimestamp(anime.createdAt ? Date.parse(anime.createdAt) : null)
    .toJSON();
  // ^ runs validators
  console.log(a);

  return a;
}

function buildEmbedFields(anime: Anime) {
  const embedFields: APIEmbedField[] = [];

  if (anime.updatedAt)
    embedFields.push({
      name: "**Actualizado:**",
      value: time(new Date(anime.updatedAt), TimestampStyles.LongDate),
      inline: true,
    });

  embedFields.push({
    name: "<:channel:1111421070038278226> **Episodios:**",
    value: anime.episodes ?? "",
    inline: true,
  });

  if (anime.credits) embedFields.push(...creditsToEmbedFields(anime.credits));

  let anilists = "";
  if (anime.anilistLink) anilists += `• **[AniList](${anime.anilistLink})**`;
  if (anime.malLink) anilists += `\n• **[MyAnimeList](${anime.malLink})**`;

  if (anilists != "")
    embedFields.push({ name: "Info:", value: anilists, inline: true });

  if (anime.downloadLink)
    embedFields.push({
      name: "Descarga:",
      value: `• **[Link carpeta](${anime.downloadLink})**`,
    });

  return embedFields;
}

function creditsToEmbedFields(credits: [{ name: any; value: string }]) {
  return credits.map((field) => {
    return { name: field.name, value: field.value, inline: true };
  });
}

function tagsToString(tags: AnimeTag[] | undefined) {
  return "🏷️: " + (tags ? tags.join(" • ") : "");
}
