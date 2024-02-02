import { useReducer } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";

const initialTimer = {
  timeInSeconds: 0,
  isSet: false,
};

function timerReducer(timer, action) {
  switch (action.type) {
    case "created": {
      return {
        isSet: true,
        timeInSeconds: action.startTime,
      };
    }
    case "deleted": {
      return { ...timer, isSet: false };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function TimerManager() {
  const [timer, dispatch] = useReducer(timerReducer, initialTimer);
  const handleTimerEnd = () => {
    dispatch({
      type: "deleted",
    });
  };

  const handleTimerAdd = (startTime) => {
    dispatch({
      type: "created",
      startTime: startTime,
    });
  };

  return (
    <div className="timers">
      {timer.isSet ? (
        <Timer
          startTime={timer.timeInSeconds}
          handleTimerEnd={handleTimerEnd}
        />
      ) : (
        <TimerForm handleNewTimer={handleTimerAdd} />
      )}
    </div>
  );
}
