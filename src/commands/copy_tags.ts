import {
  ApplicationCommandOptionType,
  ChannelType,
  CommandInteraction,
  ForumChannel,
  channelMention,
  formatEmoji,
} from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
export class CopyForumTags {
  @Slash({
    description: "copies tags from a forum channel to another",
    name: "copy-forum-tags",
  })
  async originForum(
    @SlashOption({
      description: "forum to get the tags from",
      type: ApplicationCommandOptionType.Channel,
      name: "origin-forum",
      required: true,
    })
    originForum: ForumChannel,
    @SlashOption({
      description: "forum to add the tags to",
      type: ApplicationCommandOptionType.Channel,
      name: "target-forum",
      required: true,
    })
    targetForum: ForumChannel,

    interaction: CommandInteraction
  ): Promise<void> {
    if (
      originForum.type != ChannelType.GuildForum &&
      targetForum.type != ChannelType.GuildForum
    ) {
      interaction.reply("channels must be of type Forum");
      return;
    }
    const tags = originForum.availableTags;
    targetForum.setAvailableTags(tags);

    const tagsString = await Promise.all(
      tags.map(async (tag) => {
        let tagString = "";
        if (tag.emoji) {
          const emoji = await interaction.guild?.emojis.fetch(tag.emoji.id!);
          const animated: boolean = emoji?.animated ? true : false;
          tagString += formatEmoji(tag.emoji.id!, animated) + " ";
        }
        tagString += tag.name;
        return tagString;
      })
    );

    interaction.reply(
      "### Copying tags from " +
        channelMention(originForum.id) +
        " to " +
        channelMention(targetForum.id) +
        "\n" +
        tagsString.join(", ")
    );
  }
}

