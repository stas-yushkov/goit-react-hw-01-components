import paintings from './paintings.json';
import PaintingList from './components/PaintingList';
import Section from './components/Section';

export default function App() {
  return (
    <>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
    </>
  );
}
