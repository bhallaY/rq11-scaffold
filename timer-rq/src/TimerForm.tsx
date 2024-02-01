import { useState } from "react";
import { TimeButton } from "./TimeButton";
import playIcon from "./assets/play.svg";

export function TimerForm({ setStartTime, setTimer }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const onChangeMinutes = (evt) => {
    setMinutes(evt.target.valueAsNumber);
  };
  const onChangeSeconds = (evt) => {
    setSeconds(evt.target.valueAsNumber);
  };

  return (
    <form className="timer timer-new">
      <ul className="parts">
        <li className="part">
          <input
            type="number"
            id="minutes"
            className="number"
            value={String(minutes).padStart(2, "0")}
            onChange={onChangeMinutes}
          />
          <label htmlFor="minutes" className="unit">
            Minutes
          </label>
        </li>
        <li className="part">
          <p className="colon">:</p>
        </li>
        <li className="part">
          <input
            type="number"
            id="seconds"
            className="number"
            value={String(seconds).padStart(2, "0")}
            onChange={onChangeSeconds}
          />
          <label htmlFor="seconds" className="unit">
            Seconds
          </label>
        </li>
      </ul>
      <TimeButton
        icon={playIcon}
        label="Play"
        onClick={(evt) => {
          evt.preventDefault();
          const givenTimeAsSeconds = minutes * 60 + seconds;
          setStartTime(givenTimeAsSeconds);
          setTimer(true);
        }}
      />
    </form>
  );
}
