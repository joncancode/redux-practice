import React from 'react';

import './guess-count.css';

//import { makeGuess, newGame, whatToggle } from '../actions/index';

import { connect } from 'react-redux'

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

export default connect()(GuessCount);