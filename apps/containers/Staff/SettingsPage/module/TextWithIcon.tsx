const TextWithIcon = ({ Icon, text }) => {
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default TextWithIcon;