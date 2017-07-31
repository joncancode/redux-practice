export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guesses, feedback, correctAnswer) => ({
    type: MAKE_GUESS,
    guesses,
    feedback,
    correctAnswer
});

// export const NEW_GAME = 'NEW_GAME';
// export const newGame = () => ({
//     type: NEW_GAME
// });