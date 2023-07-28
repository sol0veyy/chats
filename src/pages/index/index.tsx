import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IPage } from '../../interface/page';
import { Input } from '../../components/Input';
import './page.scss';
import { getMessageList } from '../../api/chat';
import { setMessages } from '../../app/features/chat/chatSlice';
import { Message } from '../../components/Message';
import { UserMessage } from '../../components/UserMessage';
import { NewMessagesBlock } from '../../components/NewMessages';

export const PageIndex = () => {
  const chat: IPage = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  let newMessages = 3; // Используем числа от 1 до 3
  let userRepeat = {
    userId: '',
    repeat: false
  };

  useEffect(() => {
    getMessageList(chat.activeChat).then(data => dispatch(setMessages(data.response)));
    // eslint-disable-next-line
  }, [chat.activeChat]);

  return (
    <div className='page'>
      <Header icon='./icons/shape.svg' title={chat.title} />
      <div className='page-messages'>
        <div className='messages'>
          {chat.messages?.map(message => {
            if (userRepeat.userId !== message.user.id) {
              userRepeat = {
                userId: message.user.id,
                repeat: false
              }
            } else {
              userRepeat = {
                ...userRepeat,
                repeat: true
              };
            }

            // Механизм из палок (не смешно, если честно :D)
            if (message.is_new && newMessages === 3) {
              newMessages = 2;
            } else if (message.is_new && newMessages === 2) {
              newMessages = 1;
            }

            return !message.user.you ? (
              <Message key={message.id} message={message} repeat={userRepeat.repeat} newMessages={newMessages} />
            ) : (
              <UserMessage key={message.id} message={message} />
            )
          })}
        </div>
        <Input />
      </div>
    </div>
  );
};
