const FuncList = [
  {
    post_type: 'message',
    private: [], //私聊
    group: [], //群聊
  },
  {
    post_type: 'notice',
    group_decrease: [], //群成员减少
    group_increase: [], //群成员增加
    group_ban: [], //群禁言
    friend_add: [], //好友添加
    group_recall: [], //群消息撤回
    friend_recall: [], //好友消息撤回
    notify: {
      // 通知
      poke: [],
    },
  },
  {
    post_type: 'request',
    friend: [], //加好友请求
    group: [], //加群请求／邀请
  },
];
const Msg = { message: FuncList[0], notice: FuncList[1], request: FuncList[2] };
const push_ = (Obj: any, data: any) => {
  Obj.push(data);
  Obj.sort((obj1, obj2) => {
    const val1 = obj1.level;
    const val2 = obj2.level;
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  });
};
export function getList() {
  return FuncList;
}
/**
 * 私聊消息事件
 * @param level 事件优先级 1~10 默认5
 * @returns 注解的方法返回0为拦截后续处理
 */
export const MsgPrivate = (level = 5) => {
  return (target: any, key: string): void => {
    push_(Msg.message.private, { key, level });
  };
};
export const MsgGroup = (level = 5) => {
  return (target: any, key: string): void => {
    push_(Msg.message.group, { key, level });
  };
};

export const poke = (level = 5) => {
  return (target: any, key: string): void => {
    push_(Msg.notice.notify.poke, { key, level });
  };
};
