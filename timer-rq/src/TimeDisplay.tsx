import { TimeNumber } from "./TimeNumber";

export function TimeDisplay({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <ul className="parts">
      <TimeNumber time={minutes} unit="minutes" />
      <li className="colon">:</li>
      <TimeNumber time={seconds} unit="seconds" />
    </ul>
  );
}
