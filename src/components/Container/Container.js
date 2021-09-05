import css from './Container.module.css';

function Container({ options, children }) {
  return <div className={css.container}>{children}</div>;
}

export default Container;
