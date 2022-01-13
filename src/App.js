import styled from "styled-components";

import Button from "./components/atoms/Button";

import NavBar from "./components/molecules/NavBar";

function App() {
  return (
    <Main>
      <NavBar />
      <Button>Home</Button>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 31px 24px;
`;
