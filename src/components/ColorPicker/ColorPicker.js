import css from './ColorPicker.module.css';
function ColorPicker({ options }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className={css.option}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
