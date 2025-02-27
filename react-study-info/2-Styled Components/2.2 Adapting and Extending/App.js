import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

// # 2.2
// -props를 사용하여 styled을 설정할 수 있다.
// -기존의 스타일을 그대로 와서 확장하는 것도 가능하다. const Circle = styled(Box) =>styled()를 이용하면 된다.

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
