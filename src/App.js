// import paintings from './paintings.json';
// import PaintingList from 'components/PaintingList';
// import ColorPicker from 'components/ColorPicker';
// import options from './colorPickerOptions.json';
// import Section from 'components/Section';
import Container from 'components/Container';
// import Alert from 'components/Alert/Alert';
import Box from 'components/Box';

export default function App() {
  return (
    <>
      {/* <h1>Hello</h1> */}

      {/* <Section title="Топ недели"> */}
      {/* </Section> */}

      {/* <ColorPicker options={options} /> */}
      {/* <PaintingList items={paintings} /> */}
      {/* <Alert text="Success!!!!!!" type="success" /> */}
      {/* <Alert text="Warning!!!!!!" type="warning" /> */}
      {/* <Alert text="Error!!!!!!" type="error" /> */}
      <Container>
        <Box />
        <Box
          type="small"
          classNames="big red mb100"
          styles={{ color: '#fff' }}
        />
        {/* <Box type="medium" /> */}
        <Box type="large" />
      </Container>
    </>
  );
}
