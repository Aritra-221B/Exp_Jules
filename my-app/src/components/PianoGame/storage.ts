export const getHighScores = (): { [songTitle: string]: number } => {
  try {
    const highScores = localStorage.getItem('piano-game-high-scores');
    return highScores ? JSON.parse(highScores) : {};
  } catch (error) {
    console.error("Error reading high scores from localStorage", error);
    return {};
  }
};

export const setHighScore = (songTitle: string, score: number) => {
  try {
    const highScores = getHighScores();
    highScores[songTitle] = score;
    localStorage.setItem('piano-game-high-scores', JSON.stringify(highScores));
  } catch (error) {
    console.error("Error setting high score in localStorage", error);
  }
};
