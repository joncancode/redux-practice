import React from 'react';

import './guess-list.css';

import { makeGuess, newGame } from '../actions/index';

import { connect } from 'react-redux'

export function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

export default connect()(GuessList);
