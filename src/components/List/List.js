import React from 'react';
import NavBar from '../Common/NavBar';

const List = () => {
  const data = [{
    name: '小白',
    age: 5
  }, {
    name: '大黄',
    age: 3
  }];

  const dataDom = [
    <li key="1">1号</li>,
    <li key="2">2号</li>
  ];

  return (
    <div>
      <NavBar title="列表页" />
      <ul>
        {
          data.map((item, index) => (
            <li key={index}>
              <strong>名字:</strong>
              <span>{item.name}</span>
              <strong>大小:</strong>
              <span>{item.age}</span>
            </li>
          ))
        }
        {
          dataDom
        }
      </ul>
    </div>
  );
};

export default List;
