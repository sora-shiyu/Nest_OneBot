import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//修改api.config copy.ts 为api.config.ts
import { config } from './api.config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}
  private BASE_API = config.BASE_API;
  private async post(url: string, params?: any): Promise<any> {
    const postApi = this.httpService.post(this.BASE_API + url, params, {
      headers: {
        Authorization: config.Authorization,
      },
    });
    return (await lastValueFrom(postApi)).data;
  }

  async Axios_get(url: string, data: any = {}) {
    return (await this.httpService.get(url, data).toPromise()).data;
  }

  /**
   * 发送私聊信息
   * @param user_id 对方QQ号
   * @param message 要发送的内容
   * @param group_id 主动发起临时会话群号(机器人本身必须是管理员/群主)
   * @returns message_id  消息 ID
   */
  async send_private_msg(user_id: number, message: string, group_id?: number) {
    return await this.post('send_private_msg', { user_id, message, group_id });
  }
  /**
   * 发送群聊信息
   * @param group_id 群号
   * @param message 要发送的内容
   * @returns message_id  消息 ID
   */
  async send_group_msg(group_id: number, message: string) {
    return await this.post('send_group_msg', { group_id, message });
  }

  /**
   * 发送合并转发 ( 群 )
   * @param group_id 群号
   * @param message 要发送的内容
   * @returns message_id  消息 ID
   */
  async send_group_forward_msg(group_id: number, messages: any): Promise<void> {
    return await this.post('send_group_forward_msg', { group_id, messages });
  }
  /**
   * 撤回消息
   * @param message_id 消息id
   * @returns 无
   */
  async delete_msg(message_id: number) {
    this.post('delete_msg', { message_id });
  }
  /**
   * 取登录信息
   * @returns 登录信息
   */
  async get_login_info() {
    return await this.post('get_login_info');
  }
}
