import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  toggle: false
};

export const hotAndColdReducer = (state = initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: action.feedback,
      correctAnswer: action.correctAnswer
    });
  } else if (action.type === actions.NEW_GAME) {
    return initialState;
  // } else if (action.type === actions.WHAT_TOGGLE) {
  //   if (toggle === false) {
  //     return Object.assign({}, state, {
  //       toggle: true
  //     });
  //   } else {
  //     return Object.assign({}, state, {
  //       toggle: false
  //     });
  // }
  }
};
