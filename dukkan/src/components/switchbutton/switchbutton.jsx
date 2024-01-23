import "./switchbutton-style.css";

const SwitchButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default SwitchButton;
