import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
`;

// # 2.7
// - theme 이란, 기본적으로 모든 색상들을 가지고 잇는 object 이다.
// ** ex)
// import { ThemeProvider } from "styled-components";
// const darkTheme = {
// };
// const lightTheme = {
// };
// <ThemeProvider theme={darkTheme}>
//  <App />
// </ThemeProvider>
// --> index.js 에 추가해줘야 한다.
// - 안에 들어가는 text,background 속성(property)은 drakTheme이랑 lightTheme이랑 같게 해주어야 한다.

// -styled.comonent의 themes 기능
// -다크모드를 구현하면 50%는 theme의 역할이다. 나머지는 local Estate Management다.
// -theme은 기본적으로 모든 색상을 가지고 있는 object다. 나중에 색을 바꿀 때 그 object만 바꾸면 된다.
// -index.js에서 ThemeProvider를 import해준다.
// -ThemeProvider로 을 감싼다 . ThemeProvider는 theme이란 props가 있다. 이 ThemeProvider에 있기 때문에 component들은 theme의 color에 접근할 수 있다.

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
