//
//
function ColorPicker({ options }) {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker__option"
            style={{ backgroundColor: color }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
