import "./style.css";
import playIcon from "./assets/play.svg";
import pauseIcon from "./assets/pause.svg";
import resetIcon from "./assets/restart.svg";
import trashIcon from "./assets/trash.svg";
import { useEffect, useState } from "react";
import { TimeDisplay } from "./TimeDisplay";
import { TimeButton } from "./TimeButton";

export function Timer({ startTime, handleTimerEnd, id }) {
  const [secondsRemaining, setSecondsRemaining] = useState(startTime);
  const [isPlaying, setPlaying] = useState(false);
  const [hasPlayed, setPlayed] = useState(false);
  const play = () => {
    setPlayed(true);
    setPlaying(true);
  };
  const pause = () => setPlaying(false);
  const label = isPlaying ? "Pause" : "Play";
  const icon = isPlaying ? pauseIcon : playIcon;
  const hasEnded = hasPlayed && secondsRemaining <= 0 && !isPlaying;
  const onClick = isPlaying ? pause : play;
  const handleTimerReset = () => {
    setSecondsRemaining(startTime);
    setPlaying(false);
    setPlayed(false);
  };

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    function tick() {
      setSecondsRemaining((oldValue: number) => {
        const value = oldValue - 1;
        if (value <= 0) {
          pause();
          return 0;
        }
        return value;
      });
    }
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, startTime, hasPlayed]);

  return (
    <section
      className={`timer ${isPlaying ? "timer-ticking" : ""} ${
        hasEnded ? "timer-ringing" : ""
      }`}
    >
      <TimeDisplay time={secondsRemaining} />
      <TimeButton
        icon={icon}
        label={label}
        onClick={onClick}
        disabled={hasEnded}
      />
      <TimeButton icon={resetIcon} label="Reset" onClick={handleTimerReset} />
      <TimeButton
        icon={trashIcon}
        label="Trash"
        onClick={() => handleTimerEnd(id)}
      />
    </section>
  );
}
