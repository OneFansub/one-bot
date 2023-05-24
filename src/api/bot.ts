import { APIEmbed, TextChannel } from "discord.js";
import { bot } from "../main";
import { Anime, animeToEmbed } from "../models/anime";

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
