import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

//import { makeGuess, newGame, whatToggle } from '../actions/index';

import { connect } from 'react-redux'

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}

export default connect()(GuessSection);