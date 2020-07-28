import React from 'react';
import { Table } from 'antd';

export default ({ games }) => {
  const renderUsernameWithScore = (item) => {
    const getScore = (resultStr) => {
      switch(resultStr) {
        case 'win':
          return 1;
        case 'draw':
          return 0.5;
        default:
          return 0;
      }
    }

    return `${item.username}, ${getScore(item.result)}`;
  }

  const columns = [
    {
      dataIndex: 'white',
      key: 'white',
      title: 'White',
      render: renderUsernameWithScore
    },
    {
      dataIndex: 'black',
      key: 'black',
      title: 'Black',
      render: renderUsernameWithScore
    },
    // TODO - Parse better
    {
      dataIndex: 'time_control',
      key: 'time_control',
      title: 'Time Control'
    },
    {
      dataIndex: 'url',
      key: 'url',
      title: 'Link',
      render: url => (
        <a href={url} target="_blank">
          {url}
        </a>
      )
    }
  ];
  
  return (
    <Table
      columns={columns}
      dataSource={games}
    />
  );
};
