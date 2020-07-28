import React from 'react';

import {
  EuiBasicTable,
  EuiLink
} from '@elastic/eui';

const GamesDisplay = ({ games }) => {
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
      field: 'white',
      name: 'White',
      render: renderUsernameWithScore
    },
    {
      field: 'black',
      name: 'Black',
      render: renderUsernameWithScore
    },
    // TODO - Parse better
    {
      field: 'time_control',
      name: 'Time Control'
    },
    {
      field: 'url',
      name: 'Link',
      render: url => (
        <EuiLink href={url} target="_blank">
          {url}
        </EuiLink>
      )
    }
  ];

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass'
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true
    };
  };

  return (
    <EuiBasicTable
      items={games}
      rowHeader="white"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
};

export default GamesDisplay;
