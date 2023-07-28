import React, { FC } from 'react';
import { IChat } from './interface';
import './chat.scss';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setActiveChat } from '../../app/features/chat/chatSlice';

interface ChatProps {
  chat: IChat;
}

export const Chat: FC<ChatProps> = ({ chat }) => {
  const id: string = useAppSelector(state => state.chat.activeChat);
  const time = dayjs(chat.last_message.created_at).format('HH:mm');
  const dispatch = useAppDispatch();

  const active = id === chat.id;

  return (
    <div className={`chat ${active ? 'chat-active' : ''}`} onClick={() => dispatch(setActiveChat({id: chat.id, title: chat.title}))}>
      <img src={chat.avatar} alt='' />
      <div className='texts'>
        <div className='name-time'>
          <div className='title'>{chat.title}</div>
          <div className='time'>{time}</div>
        </div>
        <span className='last-message'>{chat.last_message.message}</span>
      </div>
    </div>
  );
};
