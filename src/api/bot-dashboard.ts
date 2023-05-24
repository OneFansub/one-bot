import { Router, Get, Post } from "@discordx/koa";
import { Context } from "koa";
import * as bot from "./bot.js";
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

  @Post("/sendMessage")
  async sendMessage(context: Context): Promise<void> {
    const body: any = context.request.body;

    context.body = "error";
    bot.sendMessage(body.channel, body.message);
    context.body = "ok";
  }

  @Get("/ppn")
  async ppnGet(context: Context): Promise<void> {
    await context.render("ppn.pug", { title: "pene pal nalu xd" });
  }

  @Post("/ppn")
  async ppn(context: Context): Promise<void> {
    context.body = "error";
    bot.sendMessage("998707695332884481", "", {
      description: "Pene pal <@513119118082179074> <:KEKW:849479430644826122>",
    });
    context.body = "ok";
  }
}
