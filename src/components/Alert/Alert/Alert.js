import css from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  return (
    <p role="alert" className={css[type]}>
      {text}
    </p>
  );
}

// Alert.defaultProps = {
//   type: 'success',
// };

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};

export default Alert;
