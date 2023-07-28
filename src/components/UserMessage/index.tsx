import { FC } from 'react'
import { IMessage } from '../../app/features/chat/chatSlice'
import dayjs from 'dayjs'
import './userMessage.scss'

interface UserProps {
  message: IMessage
}

export const UserMessage: FC<UserProps> = ({message}) => {
  const time = dayjs(message.created_at).format('HH:mm');

  return (
    <div className='user-message'>
      <span className='text'>{message.message}</span>
      <div className='time-read'>
        <span className='time'>{time}</span>
        <img src='./icons/read.svg' alt="" />
      </div>
    </div>
  )
}