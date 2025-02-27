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

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${motion} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 50px;
  }
`;

// # 2.5
// styledComponent끼리도 서로 selecting이 가능

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">⭐️</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
