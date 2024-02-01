import { useState } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";

export function TimerManager() {
  const [startTime, setStartTime] = useState(0);
  const [isTimerSet, setTimer] = useState(false);
  const handleTimerEnd = () => {
    setTimer(false);
    setStartTime(0);
  };

  return (
    <div className="timers">
      {isTimerSet ? (
        <Timer startTime={startTime} handleTimerEnd={handleTimerEnd} />
      ) : (
        <TimerForm setStartTime={setStartTime} setTimer={setTimer} />
      )}
    </div>
  );
}
