import { useState, useEffect, useRef } from 'react';

export default function usePomodoro(work = 25*60, shortBreak = 5*60, longBreak = 15*60) {
  const [seconds, setSeconds] = useState(work);
  const [mode, setMode] = useState('work');
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);
  const timerRef = useRef(null);

  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  const reset = () => { setIsActive(false); setSeconds(work); setMode('work'); setCycles(0); };

  useEffect(() => {
    if (!isActive) return;
    timerRef.current = setInterval(() => {
      setSeconds(sec => {
        if (sec === 0) {
          clearInterval(timerRef.current);
          let nextMode, nextSec;
          if (mode === 'work') {
            setCycles(c => c + 1);
            nextMode = cycles + 1 === 4 ? 'longBreak' : 'shortBreak';
            nextSec = nextMode === 'longBreak' ? longBreak : shortBreak;
          } else nextMode = 'work', nextSec = work;
          setMode(nextMode);
          return nextSec;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isActive, mode, cycles]);

  return {seconds, mode, isActive, start, pause, reset};
}
