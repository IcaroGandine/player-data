import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerCard from './components/PlayerCard';
import TeamCard from './components/TeamCard'


ReactDOM.render(
  <React.StrictMode>
    <PlayerCard />
    <TeamCard />
  </React.StrictMode>,
  document.getElementById('root')
);

