import { useState, useRef } from 'react';
import './input.scss';

export const Input = () => {
  return (
    <div className='input'>
      <div
        className='input-message'
        suppressContentEditableWarning={true}
        contentEditable
        placeholder='Type message'></div>
      <div className='actions'>
        <img className='file' src='./icons/file.svg' alt='' />
        <img src='./icons/send.svg' alt='' />
      </div>
    </div>
  );
};
