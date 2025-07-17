import React from 'react';
import Pomodoro from './components/Pomodoro';
import CalendarView from './components/CalendarView';
import SpotifyPlayer from './components/SpotifyPlayer';

export default function App() {
  return (
    <div className="app">
      <h1>Estudio Total</h1>
      <div className="row">
        <Pomodoro />
        <SpotifyPlayer />
      </div>
      <CalendarView />
    </div>
  );
}
