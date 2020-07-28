import React from 'react';

import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

import 'antd/dist/antd.css';

import GamesDisplay from './GamesDisplay';
import UserEntryForm from './UserEntryForm';

import useAppState from '../state/useAppState';

export default ({ title }) => {
  const {
    formState,
    games,
    onFormChange,
    onSubmit
  } = useAppState();

  return (
    <Layout style={{ padding: "16px" }}>
      <Content style={{ padding: "16px" }}>
        <Typography>
          <Title>{title}</Title>
        </Typography>
        <UserEntryForm
          formState={formState}
          onFormChange={onFormChange}
          onSubmit={onSubmit}
        />
        <GamesDisplay games={games} />
      </Content>
    </Layout>
  );
};
