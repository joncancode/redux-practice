import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

// const makeGuess = (state = [], action) => {
//   switch (action.type) {
//     case 'MAKE_GUESS':
//       return [
//         ...state,
//         {
//           id: action.id,
//           guess: action.guess
//         }
//       ];
//     default:
//       return state;
//   }
// };

export const hotAndColdReducer = (state = initialState, action) => {

  if (action.type === actions.MAKE_GUESS) {
      console.log('guesses', state.guesses)
      console.log('fdbk', state.feedback)
      console.log('correct', state.correctAnswer)
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: action.feedback,
      correctAnswer: action.correctAnswer
    })

  }
  else if (action.type === actions.NEW_GAME) {
    return initialState
  }
};
