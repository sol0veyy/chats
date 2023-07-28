import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store';

interface IActive {
  id: string,
  title: string
}

export interface IUser {
  id: string,
  name: string,
  surname: string,
  avatar: string,
  you: boolean
}

export interface IMessage {
  id: string,
  created_at: string,
  user: IUser,
  message: string,
  is_new: boolean
}

interface ChatState {
  activeChat: string,
  title: string,
  messages: Array<IMessage>
}

export const initialState: ChatState = {
  activeChat: '',
  title: '',
  messages: []
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<IActive>) => {
      state.activeChat = action.payload.id;
      state.title = action.payload.title;
    },
    setMessages: (state, action: PayloadAction<Array<IMessage>>) => {
      state.messages = action.payload && action.payload.reverse();
    }
  }
})

export const { setActiveChat, setMessages } = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;

export default chatSlice.reducer;