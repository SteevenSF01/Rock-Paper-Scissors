import React from 'react';
import Scissors from '../Scissors/Scissors';
import Rock from '../Rock/Rock';
import Paper from '../Paper/Paper';

export default function Game(props) {
    const choixComponents = [
        { navigation: 'rock', component: <Rock /> },
        { navigation: 'paper', component: <Paper /> },
        { navigation: 'scissors', component: <Scissors /> },
    ];

    const choixFiltrer = choixComponents.filter(choix => choix.navigation !== props.navigation);

    const choixRandom = choixFiltrer[Math.floor(Math.random() * choixFiltrer.length)];

    return (
        <div className='w-[90%] h-[55%] mt-8 mx-auto flex flex-wrap justify-between p-2 '>
            {props.navigation === 'paper' ? <Paper /> : props.navigation === 'scissors' ? <Scissors /> : <Rock />}
            {choixRandom.component}
        </div>
    );
}

