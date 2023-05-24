import { Router, Get, Post } from "@discordx/koa";
import { Context } from "koa";
import { bot } from "../main.js";
import { TextChannel } from "discord.js";
import * as db from "./db.js";

@Router()
export class API {
  @Get("/")
  lobby(context: Context) {
    context.redirect("/library");
  }

  @Get("/library")
  async library(context: Context): Promise<void> {
    // console.log(await db.getAnimes());

    await context.render("library.pug", {
      title: "Biblioteca Anime",
      animes: await db.getAnimes(),
    });
  }

  @Get("/ppn")
  async ppnGet(context: Context): Promise<void> {
    await context.render("ppn.pug", { title: "pene pal nalu xd" });
  }

  @Post("/ppn")
  async ppn(context: Context): Promise<void> {
    const channel = (await bot.channels.fetch(
      "998707695332884481"
    )) as TextChannel;
    context.body = "error";
    if (channel == null) return;
    channel.send({
      embeds: [
        {
          description:
            "Pene pal <@513119118082179074> <:KEKW:849479430644826122>",
        },
      ],
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
