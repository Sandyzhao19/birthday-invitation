import React, { useEffect, useState } from "react";
import './homeScreen.css'

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="countdown">
      <div className="numbers align">
        <p>{leading0(days)}</p>
        <p>{leading0(hours)}</p>
        <p>{leading0(minutes)}</p>
        <p>{leading0(seconds)}</p>
      </div>
      <div className="descript align">
        <p>Day</p>
        <p>Hour</p>
        <p>Min</p>
        <p>Sec</p>
      </div>
    </div>
  );
};

export default Clock;