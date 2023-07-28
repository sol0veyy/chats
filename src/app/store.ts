import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './features/chats/chatsSlice'
import chatReducer from './features/chat/chatSlice'

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    chat: chatReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;