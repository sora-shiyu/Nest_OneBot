import { Controller } from '@nestjs/common';
import { MsgPrivate, MsgGroup, poke } from '../app.decorator';
import { GroupMsg, pokeMsg, privateMsg } from './bot.dto';
import { ApiService } from '../api/api.service';
import Fs from 'fs';
@Controller()
export class BotController {
  constructor(private readonly api: ApiService) {}

  @MsgPrivate(1)
  async MsgPrivate1(data: privateMsg) {
    const url =
      'https://tva2.sinaimg.cn/large/0072Vf1pgy1foxk6pmjkjj31kw0w0b0v';
    this.api.Axios_get(url, { responseType: 'arraybuffer' }).then((res) => {
      const img_base64 = `base64://${Buffer.from(res).toString('base64')}`;
      this.api.send_private_msg(1980285552, `[CQ:image,file=${img_base64}}]`);
    });

    //
  }

  // @MsgPrivate()
  // MsgPrivate2(data: privateMsg) {
  //   console.log('私聊处理2', data.message);
  // }

  @MsgGroup()
  MsgGroup1(data: GroupMsg) {
    const text = '[CQ:at,qq=3168241647] 转发';
    if (data.message.indexOf(text) !== -1) {
      const resList = data.message.replace(text, '').trim().split(' ');
      this.api.send_group_forward_msg(data.group_id, {
        type: 'node',
        data: {
          name: resList[0],
          uin: resList[1],
          content: [
            {
              type: 'text',
              data: { text: resList[2] },
            },
          ],
        },
      });
    }
  }

  @poke()
  poke(data: pokeMsg) {
    if (data.target_id === 3168241647) {
      this.api.send_group_msg(data.group_id, '#随机色图');
    }
  }
}
