export function TimeNumber({ time, unit }) {
  return (
    <li className="part">
      <p className="number">{String(time).padStart(2, "0")}</p>
      <p className="unit">{unit}</p>
    </li>
  );
}
