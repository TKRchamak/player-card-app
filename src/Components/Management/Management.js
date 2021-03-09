import React, { useEffect, useState } from 'react';
import './management.css';
import PlayerData from '../../Data/PlayerData.json';
import Player from '../Player/Player';
import Team from '../Team/Team';

const Management = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(PlayerData);
    },[])
    const [selectPlayers, setSelectPlayer] = useState([]);
    const forHire = (player) => {
        const countPlayer = [...selectPlayers, player];
        setSelectPlayer(countPlayer);
    };
    return (
        <div className="management">
            <div className="playerDetail">
                {
                    players.map(player => <Player player={player} key={player.id} forHire={forHire}></Player>)
                }
            </div>
            <div className="team">
                   <Team selectPlayers = {selectPlayers}></Team>
            </div>
        </div>
    );
};

export default Management;