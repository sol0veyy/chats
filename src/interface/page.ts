import { IMessage } from '../app/features/chat/chatSlice';

export interface IPage{
    activeChat: string,
    title?: string,
    messages?: Array<IMessage>
}