import React from 'react';
import './playes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name, category, matchPlayed, img, salary} = props.player;
    return (
        <div className="playerCart">
            <div>
                <img src={img} alt="img"/>
            </div>
            <div>
                <h2 style={{color: 'tomato'}}> {name}</h2>
                <h4>Strong place to play : {category}</h4>
                <p><small>Played Match : {matchPlayed}</small></p>
                <p><small>Selary : {salary}</small></p>
                <button onClick={() => props.forHire(props.player)}><FontAwesomeIcon icon={faRunning} />  Hire Me</button>
            </div>
        </div>
    );
};

export default Player;