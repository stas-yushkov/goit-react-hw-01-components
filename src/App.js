import paintings from './paintings.json';
import PaintingList from './components/PaintingList';

export default function App() {
  return (
    <>
      <PaintingList items={paintings} />
    </>
  );
}
