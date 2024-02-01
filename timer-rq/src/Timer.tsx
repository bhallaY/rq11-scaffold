import "./style.css";
import playIcon from "./assets/play.svg";
import pauseIcon from "./assets/pause.svg";
import trashIcon from "./assets/trash.svg";
import { useEffect, useState } from "react";
import { TimeDisplay } from "./TimeDisplay";
import { TimeButton } from "./TimeButton";

export function Timer({ startTime, handleTimerEnd }) {
  const [secondsRemaining, setSecondsRemaining] = useState(startTime);
  const [isPlaying, setPlaying] = useState(false);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const label = isPlaying ? "Pause" : "Play";
  const icon = isPlaying ? pauseIcon : playIcon;
  const onClick = isPlaying ? pause : play;

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    function tick() {
      setSecondsRemaining((oldValue: number) => {
        const value = oldValue - 1;
        if (value <= 0) {
          setPlaying(false);
          handleTimerEnd();
          return startTime;
        }
        return value;
      });
    }
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, startTime]);

  return (
    <section className={`timer ${isPlaying ? "timer-ticking" : ""}`}>
      <TimeDisplay time={secondsRemaining} />
      <TimeButton icon={icon} label={label} onClick={onClick} />
      <TimeButton icon={trashIcon} label="Trash" onClick={handleTimerEnd} />
    </section>
  );
}
