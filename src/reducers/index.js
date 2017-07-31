import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

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
  
    // else {
    //     newGame() if (action.type === actions.whaterverTYPEIsFromTheAction2) {

    //     return initialState;
  }
};
