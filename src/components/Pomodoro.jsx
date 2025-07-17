import React from 'react';
import usePomodoro from '../hooks/usePomodoro';

export default function Pomodoro() {
  const {seconds, mode, isActive, start, pause, reset} = usePomodoro();

  const mm = String(Math.floor(seconds / 60)).padStart(2,'0');
  const ss = String(seconds % 60).padStart(2,'0');

  return (
    <div className="pomodoro">
      <h2>Modo: {mode}</h2>
      <div className="time">{mm}:{ss}</div>
      {isActive ? (
        <button onClick={pause}>Pausar</button>
      ) : (
        <button onClick={start}>Iniciar</button>
      )}
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}
