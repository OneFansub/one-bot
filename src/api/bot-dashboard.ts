import { Router, Get, Post } from "@discordx/koa";
import { Context } from "koa";
import { bot } from "../main.js";
import { TextChannel } from "discord.js";

@Router()
export class API {
  @Get("/ppn")
  async xd(context: Context): Promise<void> {
    context.state.info = { title: "pene pal nalu xd" };
    await context.render("ppn.pug", context.state.info);
  }

  @Post("/ppn")
  async ppn(context: Context): Promise<void> {
    const channel = (await bot.channels.fetch(
      "998707695332884481"
    )) as TextChannel;
    context.body = "error";
    if (channel == null) return;
    channel.send({
      embeds: [{ description: "Pene pal <@513119118082179074> <:KEKW:849479430644826122>" }],
    });

    context.body = "ok";
  }

  @Post("/sendMessage")
  async sendMessage(context: Context): Promise<void> {
    const body: any = context.request.body;

    const channel = (await bot.channels.fetch(body.channel)) as TextChannel;
    context.body = "error";
    if (channel == null) return;
    channel.send(body.message);
    context.body = "ok";
  }
}
