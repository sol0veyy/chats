import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import './chats.scss';
import { getChatList } from '../../api/chat';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getChats } from '../../app/features/chats/chatsSlice';
import { Chat } from '../../components/Chat';
import { IChat } from '../../components/Chat/interface';

export const Chats = () => {
  const chats: Array<IChat> = useAppSelector((state) => state.chats.chats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getChatList().then((data) => dispatch(getChats(data.response)));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header title='All chats' />
      <div className='chats'>
        {chats.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};
