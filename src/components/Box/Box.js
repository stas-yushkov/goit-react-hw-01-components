import css from './Box.module.css';

function Box({ type = 'small', classNames = '', styles }) {
  return (
    <div className={`${css[type]} ${classNames}`.trim()} style={styles}>
      Box
    </div>
  );
}

export default Box;
