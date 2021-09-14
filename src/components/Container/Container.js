import { Wrapper } from './Container.styled.jsx';

function Container(props) {
  return <Wrapper className="wrapper">{props.children}</Wrapper>;
}

export default Container;
