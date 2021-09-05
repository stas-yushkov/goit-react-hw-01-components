import css from './Alert.module.css';

function Alert({ text }) {
  return (
    <p
      role="alert"
      // className={css[type]}
      className={css.alert}
    >
      {text}
    </p>
  );
}

export default Alert;
