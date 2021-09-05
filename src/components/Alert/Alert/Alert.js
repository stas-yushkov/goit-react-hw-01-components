import css from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type = 'success' }) {
  return (
    <p role="alert" className={css[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;
