import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}
  private BASE_API = '';
  private async get(url: string, params?: any): Promise<any> {
    // const res = this.httpService
    //   .get(this.BASE_API + url, {
    //     headers: {
    //       Authorization: '1980285552',
    //     },
    //   })
    //   .pipe(
    //     map((res) => {
    //       return res.data;
    //     }),
    //   );
    // return res;
    return (
      await this.httpService
        .get(this.BASE_API + url, {
          headers: {
            Authorization: '1980285552',
          },
          params,
        })
        .toPromise()
    ).data;
  }
  /**
   * 发送私聊信息
   * @param user_id 对方QQ号
   * @param message 要发送的内容
   * @param group_id 主动发起临时会话群号(机器人本身必须是管理员/群主)
   * @returns message_id  消息 ID
   */
  async send_private_msg(user_id: number, message: string, group_id?: number) {
    return await this.get('send_private_msg', { user_id, message, group_id });
  }
  /**
   * 发送群聊信息
   * @param group_id 群号
   * @param message 要发送的内容
   * @returns message_id  消息 ID
   */
  async send_group_msg(group_id: number, message: string) {
    return await this.get('send_group_msg', { group_id, message });
  }

  /**
   * 发送合并转发 ( 群 )
   * @param group_id 群号
   * @param message 要发送的内容
   * @returns message_id  消息 ID
   */
  async send_group_forward_msg(group_id: number, messages: any): Promise<void> {
    return await this.get('send_group_forward_msg', { group_id, messages });
    // return await this.apiService.send_group_forward_msg(647196450, {
    //   type: 'node',
    //   data: {
    //     name: '火花',
    //     uin: '1457947026',
    //     content: [
    //       {
    //         type: 'text',
    //         data: { text: '....' },
    //       },
    //     ],
    //   },
    // });
  }
  /**
   * 撤回消息
   * @param message_id 消息id
   * @returns 无
   */
  async delete_msg(message_id: number) {
    this.get('delete_msg', { message_id });
  }
  /**
   * 取登录信息
   * @returns 登录信息
   */
  async get_login_info() {
    return await this.get('get_login_info');
  }
}
