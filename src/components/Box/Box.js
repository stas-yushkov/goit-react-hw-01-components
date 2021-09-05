import css from './Box.module.css';

function Box({ type = 'small', classNames = '' }) {
  return <div className={`${css[type]} ${classNames}`.trim()}>Box</div>;
}

export default Box;
