import { APIEmbed, TextChannel } from "discord.js";
import { bot } from "../main.js";
import { Anime, animeToEmbed } from "../models/anime.js";

export async function sendMessage(
  channelId: string,
  message: string,
  embed?: APIEmbed
) {
  const channel = (await bot.channels.fetch(channelId)) as TextChannel;
  if (!channel) console.log("Culdn't send the message, channel not found");
  else
    return channel.send({
      content: message,
      embeds: embed ? [embed] : undefined,
    });
}

export async function sendAnimeEmbed(
  channelId: string,
  message: string,
  anime: Anime
) {
  const embed = animeToEmbed(anime);
  if (!embed) {
    console.log(
      `invalid embed data, couldn't send embed of anime: ${anime.title}`
    );
    return;
  }
  return sendMessage(channelId, message, embed);
}
