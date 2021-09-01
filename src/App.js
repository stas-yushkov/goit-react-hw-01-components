import paintingList from './paintings.json';
import Painting from './components/Painting';

const painting1 = paintingList[1];
const painting2 = paintingList[2];

export default function App() {
  return (
    <>
      <Painting
        url={painting1.url}
        title={painting1.title}
        authorName={painting1.author.tag}
        authorUrl={painting1.author.url}
        price={painting1.price}
      />
      <Painting
        url={painting2.url}
        title={painting2.title}
        authorName={painting2.author.tag}
        authorUrl={painting2.author.url}
        price={painting2.price}
      />
    </>
  );
}
