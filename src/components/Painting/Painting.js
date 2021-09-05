import PropTypes from 'prop-types';
import './Painting.css';
import defaultImage from './default.jpg';

function Painting(props) {
  const {
    price,
    authorName,
    authorUrl,
    imageUrl = defaultImage,
    title,
    quantity,
  } = props;
  return (
    <div className="Painting">
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  price: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
