import paintingList from './paintings.json';
import Painting from './components/Painting';

export default function App() {
  return (
    <>
      {paintingList.map(painting => {
        return (
          <Painting
            key={painting.title}
            imageUrl={painting.url}
            title={painting.title}
            authorName={painting.author.tag}
            authorUrl={painting.author.url}
            price={painting.price}
            quantity={painting.quantity}
          />
        );
      })}
    </>
  );
}
