import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './Clock.css' 
const ReactClock = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div className="Hello">
      <Clock renderNumbers={true} className={'ReactClock'} value={value} />
    </div>
  )
}

export default ReactClock;