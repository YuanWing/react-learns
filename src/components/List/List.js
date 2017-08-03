import React from 'react';
import NavBar from '../Common/NavBar';
import { Connect } from '../../service/Connect';
import './List.css';

const List = (props) => {
  return (
    <div>
      <NavBar title="列表页" />
      <ul className="content list">
        {
          props.data && props.data.length > 0 &&
          props.data.map((item, index) => (
            <li key={index}>
              <strong>名称: </strong>
              <span>{ item.answer }</span>
              <time>{ item.createTime }</time>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Connect(List);
