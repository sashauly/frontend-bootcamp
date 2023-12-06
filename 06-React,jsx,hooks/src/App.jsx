import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import StopwatchModified from './components/StopwatchModified';
import StudentInfo from './components/StudentInfo';

const App = () => {
  const [activeWidget, setActiveWidget] = useState(<StudentInfo />);

  return (
    <>
      <div>
        <button onClick={() => setActiveWidget(<Stopwatch />)}>
          Stopwatch
        </button>
        <button onClick={() => setActiveWidget(<StopwatchModified />)}>
          StopwatchModified
        </button>
        <button onClick={() => setActiveWidget(<StudentInfo />)}>
          StudentInfo
        </button>
      </div>
      {activeWidget}
    </>
  );
};

export default App;
