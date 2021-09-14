import { Wrapper } from './Container.styled.jsx';

export default function Container(props) {
  return <Wrapper className="wrapper">{props.children}</Wrapper>;
}
