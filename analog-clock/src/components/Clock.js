import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const passingTimeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(passingTimeInterval);
    };
  }, [time]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  //HTML for clock
  const secondsCSS = seconds * (360/60);
  const minutesCSS = minutes * (360/60) + seconds * (360/60/60);
  const hourCSS = hours * (360/12) + minutes * (360/12/60);

  const baseStyle = document.documentElement.style;
  baseStyle.setProperty('--second', `${secondsCSS}deg`);
  baseStyle.setProperty('--minute', `${minutesCSS}deg`)
  baseStyle.setProperty('--hour', `${hourCSS}deg`)

  return (
    <div className="analog-clock">
      <div className="clock-seconds"></div>
      <div className="clock-minutes"></div>
      <div className="clock-hour"></div>
    </div>
  );
}

export default Clock;
