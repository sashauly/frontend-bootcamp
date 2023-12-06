import { useState, useEffect } from 'react';
import SomeList from './SomeList';

export default function StopwatchModified() {
  const [seconds, setSeconds] = useState(0);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  const handleAddClick = () => {
    setTimes([...times, seconds]);
  };

  const handleResetClick = () => {
    setTimes([]);
  };

  return (
    <div>
      <h1>{seconds}</h1>
      <p>{new Date(seconds * 1000).toISOString().substring(11, 19)}</p>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleResetClick}>Reset</button>
      <SomeList times={times} />
    </div>
  );
}
