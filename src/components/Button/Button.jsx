function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <div>
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
