import { useReducer, useState } from 'react';
import { getUserGames } from '../api/chessDotCom';

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

function useAppState() {
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

  return {
    dispatchFormUpdate,
    formState,
    games,
    onFormChange,
    onSubmit,
    setGames
  }
}

export default useAppState;
