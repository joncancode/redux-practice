export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

 export const NEW_GAME = 'NEW_GAME';
 export const newGame = () => ({
     type: NEW_GAME,   
     correctAnswer: Math.floor(Math.random() * 100) + 1 // assign a correct answer here
 });


export const WHAT_TOGGLE = 'WHAT_TOGGLE';
export const whatToggle = (toggle) => ({
    type: WHAT_TOGGLE,
    toggle
})


//    feedback,
    //correctAnswer