import React from 'react';
import Pomodoro from './Pomodoro';
import SpotifyPlayer from './SpotifyPlayer';
import CalendarView from './CalendarView';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>📚 Estudio Total</h1>
      <div className="row">
        <Pomodoro />
        <SpotifyPlayer />
      </div>
      <CalendarView />
    </div>
  );
}
//ESTO SOLO LO HAGO POR AMOR SI NO QUE PAJA 