import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.API_KEY);

bot.on("message", async (ctx) => {
    const message = await ctx.message;
    if (message.new_chat_member || message.left_chat_member) {
        ctx.telegram.deleteMessage(message.chat.id, message.message_id);
    }
});

bot.launch();
console.log("Bot running 🤖");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
