import React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from '@elastic/eui';

import GamesDisplay from './GamesDisplay';
import UserEntryForm from './UserEntryForm';

import useAppState from '../state/useAppState';

import '@elastic/eui/dist/eui_theme_light.css';

export default ({ title }) => {
  const {
    formState,
    games,
    onFormChange,
    onSubmit
  } = useAppState();

  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>{title}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <UserEntryForm
              formState={formState}
              onFormChange={onFormChange}
              onSubmit={onSubmit}
            />
            <GamesDisplay games={games} />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
