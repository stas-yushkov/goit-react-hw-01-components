import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Painting {...item} />
          </li>
        );
      })}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;

// url={item.url}
// title={item.title}
// author={item.author}
// price={item.price}
// quantity={item.quantity}
