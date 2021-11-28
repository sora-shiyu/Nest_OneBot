export class GroupMsg {
  readonly meta_event_type: string;
  readonly post_type: string;
  readonly message: string;
  readonly user_id: number;
  readonly group_id: number;
  readonly message_id: number;
  readonly sub_type: string;
  readonly sender: {
    user_id: number;
    nickname: string;
    card: string;
    level: number;
    title: string;
  };
}
export class privateMsg {
  readonly meta_event_type: string;
  readonly post_type: string;
  readonly message: string;
  readonly user_id: number;
  readonly message_id: number;
  readonly sub_type: string;
  readonly sender: {
    user_id: number;
    nickname: string;
    card: string;
    level: number;
    title: string;
  };
}
export class pokeMsg {
  /**
   * 上报类型
   */
  readonly post_type: string;
  /**
   * 消息类型
   */
  readonly notice_type: string;
  /**
   * 提示类型
   */
  readonly sub_type: string;
  /**
   * 群号
   */
  readonly group_id: number;
  /**
   * 发送者 QQ 号
   */
  readonly user_id: number;
  /**
   * 被戳者 QQ 号
   */
  readonly target_id: number;
}
// export class
