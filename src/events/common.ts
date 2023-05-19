import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class Example {
  @On()
  messageDelete([message]: ArgsOf<"messageDelete">, client: Client): void {
    console.log("Message Deleted", client.user?.username, message.content);
  }
  @On()
  messageUpdate(
    [oldMessage, newMessgae]: ArgsOf<"messageUpdate">,
    client: Client
  ): void {
    console.log(
      "Message Edited by ",
      oldMessage.member?.displayName,
      oldMessage.content,
      "to: ",
      newMessgae.content
    );
  }
}
