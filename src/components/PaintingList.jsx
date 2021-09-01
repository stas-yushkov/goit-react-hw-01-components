import Painting from './Painting';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Painting
              imageUrl={item.url}
              title={item.title}
              authorName={item.author.tag}
              authorUrl={item.author.url}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default PaintingList;
