import React, { useReducer, useState } from 'react';

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

import '@elastic/eui/dist/eui_theme_light.css';

function formReducer(state, action) {
  switch (action.type) {
    case 'user':
      return { ...state, user: action.value };
    case 'month':
      return { ...state, month: action.value };
    case 'year':
      return { ...state, year: action.value };
    default:
      return state;
  }
}

export default ({ getUserGames, title }) => {
  const [formState, dispatchFormUpdate] = useReducer(formReducer, {
    user: "",
    month: "",
    year: ""
  });

  const [games, setGames] = useState([]);

  const onFormChange = (type) => (e) => {
    dispatchFormUpdate({
      type,
      value: e.target.value
    });
  };
  
  const onSubmit = async () => {
    const { user, month, year } = formState;
    const gamesData = await getUserGames(user, month, year);
    setGames(gamesData.games || []);
  }
  
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
