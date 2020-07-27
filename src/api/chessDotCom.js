// year = "YYYY", month = "MM"
export const getUserGames = async (userName, month, year) => {
  // TODO - Better validation...
  if (userName.length === 0 || year.length === 0 || month.length === 0) {
    return;
  }

  const response = await fetch(`https://api.chess.com/pub/player/${userName}/games/${year}/${month}`);
  return response.json();
};
