import { wrapper } from '../../utils/wrapper';
import { URLS } from '../../constants/urls';

export const getChatList = () => {
  return wrapper('get', URLS.CHATS);
};

export const getMessageList = (chat_id: string) => {
  return wrapper('get', URLS.MESSAGES, {chat_id});
};
