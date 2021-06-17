import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class AppService {
  private readonly bot: Telegraf = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

  constructor() {}

  async sendMessageHandler(
    message: string,
  ): Promise<boolean | { message: string }> {
    try {
      await this.bot.telegram.sendMessage(
        process.env.TELEGRAM_CHANNEL_ID,
        '`' + message + '`',
        { parse_mode: 'MarkdownV2' },
      );

      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject('Something wrong happened.');
    }
  }
}
