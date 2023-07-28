import { FC } from 'react';
import { IMessage } from '../../app/features/chat/chatSlice';
import './message.scss';
import { Avatar } from '../Avatar';
import dayjs from 'dayjs';
import { NewMessagesBlock } from '../NewMessages';

interface MessageProps {
  message: IMessage;
  repeat: boolean;
  newMessages: number;
}

export const Message: FC<MessageProps> = ({ message, repeat, newMessages }) => {
  const time = dayjs(message.created_at).format('HH:mm');

  const style = repeat ? { marginLeft: '32px' } : undefined;

  return (
    <>
      {newMessages === 2 ? <NewMessagesBlock /> : null}
      <div className='message'>
        {!repeat ? <Avatar src={message.user.avatar} size='sm' /> : null}
        <div className='texts'>
          {!repeat ? (
            <span className='name'>
              {message.user.name + ' ' + message.user.surname}
            </span>
          ) : null}
          <div className='text-time' style={style}>
            <span className='text'>{message.message}</span>
            <span className='time'>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};
