/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { getList } from './app.decorator';
import { BotService } from './bot/bot.service';

@Controller()
export class AppController {
  constructor(private readonly bot: BotService) {}
  @Post()
  async getAllMessage(@Body() Body: any): Promise<string> {
    const { meta_event_type, post_type, sub_type } = Body;
    if (meta_event_type !== 'heartbeat') {
      getList().map((v) => {
        if (v.post_type === post_type && v[Body[`${post_type}_type`]] !== []) {
          const type =
            post_type !== 'notice'
              ? v[Body[`${post_type}_type`]]
              : v[Body[`${post_type}_type`]][sub_type];
          for (let i = 0; i < type.length; i++) {
            if (this.bot[type[i].key](Body) === 0) return;
          }
        }
      });
    } else {
      // console.log('心跳');
    }
    return '';
  }
}
