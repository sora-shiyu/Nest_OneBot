import { Controller } from '@nestjs/common';
import { MsgPrivate, MsgGroup, poke } from '../app.decorator';
import { GroupMsg, pokeMsg, privateMsg } from './bot.dto';
import { ApiService } from '../api/api.service';
import Fs from 'fs';
@Controller()
export class BotController {
  constructor(private readonly api: ApiService) {}

  @MsgPrivate(1)
  MsgPrivate1(data: privateMsg) {
    this.api.send_private_msg(1980285552, data.message).then((res) => {
      console.log(res);
    });
  }

  // @MsgPrivate()
  // MsgPrivate2(data: privateMsg) {
  //   console.log('私聊处理2', data.message);
  // }

  // @MsgGroup()
  // MsgGroup1(data: GroupMsg) {}

  @poke(1)
  limitQQ(data: pokeMsg) {
    if (data.user_id !== 1980285552) {
      this.api.send_group_msg(data.group_id, '非法请求');
      return 0;
    }
  }

  @poke()
  poke(data: pokeMsg) {
    if (data.target_id === 3168241647) {
      const url = 'https://api.lolicon.app/setu/v2?proxy=false&num=2';
      this.api
        .Axios_get(url)
        .then((res) => {
          return res.data.map((v) => {
            return v.urls.original.replace('i.pximg.net', 'o.acgpic.net');
          });
        })
        .then((img_Url: Array<string>) => {
          img_Url.map((img_Url) => {
            this.api
              .Axios_get(img_Url, {
                responseType: 'arraybuffer',
                headers: {
                  referer: 'https://pixivic.com/',
                },
              })
              .then((res) => {
                const img_base64 = `base64://${Buffer.from(res).toString(
                  'base64',
                )}`;
                this.api.send_group_msg(
                  data.group_id,
                  `[CQ:image,file=${img_base64}]`,
                );
              });
          });
        });
    }
  }
}
