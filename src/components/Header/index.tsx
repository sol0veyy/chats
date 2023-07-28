import { FC } from 'react';
import { IHeader } from './interface';
import './header.scss';

export const Header: FC<IHeader> = (props: IHeader) => {
  return (
    <div className='header'>
      {props.icon ? <img src={props.icon} alt='' /> : null}
      <span className='title'>{props.title}</span>
    </div>
  )
}