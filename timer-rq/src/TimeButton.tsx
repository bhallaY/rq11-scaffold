export function TimeButton({ icon, label, onClick, disabled = false }) {
  return (
    <button
      title={label}
      className="toggle"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={icon} alt={label} />
    </button>
  );
}
