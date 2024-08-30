import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  width: 400px;
  background-color: orange;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading type="h1">This is the styled comoponent H1</Heading>
          <Heading type="h2" as="h2">
            This is the styled H2
          </Heading>
        </Row>

        <Row type="vertical">
          <Heading type="h3" as="h3">
            This is the style H3
          </Heading>
          <h1>App</h1>
          <Button size="large" variation="primary">
            Styled primary large button
          </Button>
          <Button size="small" variation="danger">
            Styled danger small button
          </Button>
          <Input placeholder="Enter text" type="text" />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
