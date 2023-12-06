import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>{time}</h1>
      <p>{new Date(time * 1000).toISOString().substring(11, 19)}</p>
    </div>
  );
}
