import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IChat } from '../../../components/Chat/interface';

export interface ChatsState {
  chats: Array<IChat>
}

const initialState: ChatsState = {
  chats: []
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    getChats: (state, action: PayloadAction<Array<IChat>>) => {
      state.chats = action.payload;
    }
  }
})

export const { getChats } = chatsSlice.actions;

export const selectChats = (state: RootState) => state.chats.chats;

export default chatsSlice.reducer;