// import paintings from './paintings.json';
// import PaintingList from 'components/PaintingList';
// import ColorPicker from 'components/ColorPicker';
// import options from './colorPickerOptions.json';
import Section from 'components/Section';
import Alert from 'components/Alert/Alert';

export default function App() {
  return (
    <>
      <h1>Hello</h1>

      <Section title="Топ недели">
        {/* <ColorPicker options={options} /> */}
        {/* <PaintingList items={paintings} /> */}
        <Alert text="Success!!!!!!" type="success" />
        <Alert text="Warning!!!!!!" type="warning" />
        <Alert text="Error!!!!!!" type="error" />
      </Section>
    </>
  );
}
