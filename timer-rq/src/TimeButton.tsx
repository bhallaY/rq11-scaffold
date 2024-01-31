export function TimeButton({ icon, label, onClick }) {
  return (
    <button title={label} className="toggle" onClick={onClick}>
      <img src={icon} alt={label} />
    </button>
  );
}
