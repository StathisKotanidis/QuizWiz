function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <div className={className}>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
