import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background: teal;
  width: 100px;
  height: 100px;
`;

const BoxTow = styled.div`
  background: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTow />
    </Father>
  );
}

export default App;
