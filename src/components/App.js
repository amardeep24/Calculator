import styled from 'styled-components';
import Calculator from './Calculator';

const AppContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(cyan, lightgreen);
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Calculator/>
    </AppContainer>
  );
}

export default App;
