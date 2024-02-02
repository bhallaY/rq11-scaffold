import { useReducer, useState } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";

const initTimers = [];

function timerReducer(timers, action) {
  switch (action.type) {
    case "created": {
      action.incrementId();
      return [
        ...timers,
        {
          id: action.id,
          isSet: true,
          timeInSeconds: action.startTime,
        },
      ];
    }
    case "deleted": {
      return timers.filter((timer) => timer.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function TimerManager() {
  const [timers, dispatch] = useReducer(timerReducer, initTimers);
  const [nextTimerId, setNextId] = useState(0);
  const [isAdding, setAdding] = useState(false);

  const handleTimerEnd = (id) => {
    dispatch({
      type: "deleted",
      id: id,
    });
  };
  const incrementId = () => setNextId(nextTimerId + 1);
  const nid = nextTimerId;

  const handleTimerAdd = (startTime) => {
    setAdding(false);
    dispatch({
      type: "created",
      startTime: startTime,
      id: nid,
      incrementId: incrementId,
    });
  };

  return (
    <div className="timers">
      {timers.map((timer) => {
        return (
          <Timer
            key={timer.id}
            startTime={timer.timeInSeconds}
            handleTimerEnd={handleTimerEnd}
            id={timer.id}
          />
        );
      })}
      {isAdding ? (
        <TimerForm handleNewTimer={handleTimerAdd} />
      ) : (
        <button className="timer timer-add" onClick={() => setAdding(true)}>
          +
        </button>
      )}
    </div>
  );
}
