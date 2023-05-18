import { Router, Get } from "@discordx/koa";
import { Context } from "koa";

@Router()
export class API {
@Get("/ppn")
  async xd(context: Context): Promise<void> {
    context.state.info = { title: "pene pal nalu xd" };
    await context.render("ppn.pug", context.state.info);
  }
}