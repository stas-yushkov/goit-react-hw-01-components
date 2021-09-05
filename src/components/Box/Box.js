import css from './Box.module.css';

function Box({ type = 'small', bgColor = '#ccc', children }) {
  return (
    <div className={css[type]} style={{ backgroundColor: bgColor }}>
      Box
      {children}
    </div>
  );
}

export default Box;
