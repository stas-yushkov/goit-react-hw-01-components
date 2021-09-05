import css from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  const typeClass = type ? css[type] : '';
  return (
    <p role="alert" className={`${css.alert} ${typeClass}`.trim()}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;
