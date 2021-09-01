import paintingList from './paintings.json';
import Painting from './components/Painting';

export default function App() {
  return (
    <>
      <Painting
        imageUrl={paintingList[0].url}
        title={paintingList[0].title}
        authorName={paintingList[0].author.tag}
        authorUrl={paintingList[0].author.url}
        price={paintingList[0].price}
        quantity={paintingList[0].quantity}
      />
      <Painting
        imageUrl={paintingList[1].url}
        title={paintingList[1].title}
        authorName={paintingList[1].author.tag}
        authorUrl={paintingList[1].author.url}
        price={paintingList[1].price}
        quantity={paintingList[1].quantity}
      />
      <Painting
        imageUrl={paintingList[2].url}
        title={paintingList[2].title}
        authorName={paintingList[2].author.tag}
        authorUrl={paintingList[2].author.url}
        price={paintingList[2].price}
        quantity={paintingList[2].quantity}
      />
    </>
  );
}
