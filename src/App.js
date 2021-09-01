import paintings from './paintings.json';
import PaintingList from './components/PaintingList';
import Section from './components/Section';

export default function App() {
  return (
    <>
      <h1>Hello</h1>

      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
    </>
  );
}
