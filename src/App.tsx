import React from 'react';
import { Chats } from './pages/chats';
import './App.css';
import { PageIndex } from './pages/index';

function App() {
  return (
    <>
      <div className='App'>
        <Chats />
        <PageIndex />
      </div>
      <div className='phone'>
          <h1>Простите! Но для мобильных телефонов у нас есть мобильное приложение</h1>
      </div>
    </>
  );
}

export default App;
