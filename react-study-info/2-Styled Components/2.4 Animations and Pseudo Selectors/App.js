import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const motion = keyframes`
  0%{
    transform: rotate(0);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  } 
  100%{
    transform: rotate(0);
    border-radius: 0;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${motion} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
`;

// # 2.4
// -styled.component로 animation을 만든다. keyframes function을 import한다.
// -component style안에 다른 component style을 작성 가능하다.

function App() {
  return (
    <Wrapper>
      <Box>
        <span>⭐️</span>
      </Box>
    </Wrapper>
  );
}

export default App;
