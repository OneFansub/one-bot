import {
  ApplicationCommandOptionType,
  ChannelType,
  CommandInteraction,
  ForumChannel,
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
      originForum.type === ChannelType.GuildForum &&
      targetForum.type === ChannelType.GuildForum
    ) {
      const tags = originForum.availableTags;
      targetForum.setAvailableTags(tags);

      const tagsString = tags.map(
        (tag) => tag.name + " " + formatEmoji(tag.emoji!.id!)
      );
      interaction.reply("tags copied: " + tagsString);
    } else {
      interaction.reply("channels must be of type Forum");
    }
  }
}
