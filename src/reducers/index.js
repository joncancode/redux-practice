import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};


export const hotAndColdReducer = (state = initialState, action) => {

  if (action.type === actions.MAKE_GUESS) {
 
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
