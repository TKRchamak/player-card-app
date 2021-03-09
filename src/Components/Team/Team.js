import React from 'react';

const Team = (props) => {
    const selectPlayers = props.selectPlayers;
    console.log(selectPlayers)
    let total = 0;
    let names = [];
    for (let i = 0; i < selectPlayers.length; i++) {
        const element = selectPlayers[i];    
        total = total + element.salary;
        names = [...names, element.name];
    }
    console.log(names)
    return (
        <div>
            <h3>Total Selected Player : {selectPlayers.length}</h3>
            <p>Total team player cost : $ {total}</p>
            <h3>Players</h3>
            <h5>{selectPlayers.name}</h5>
            {
                names.map(name => <h2 style ={{color: 'tomato'}}>{name}</h2> )
            }
        </div>
    );
};

export default Team;