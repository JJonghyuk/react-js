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

// # 2.1
// ** Styled Components 설치 방법
// ---> npm i styled-components
// React에 css를 적용하는 기본방법은 세가지이다.
// 1. Css 파일을 만들고 import하기
// 2. Style prop에 자바스크립트 객체로 스타일 코드를 넣어주기
// 3. Css 모듈을 사용하기

// styled 컴포넌트를 사용하면
// Css 파일을 나눌 필요도없고, 기본 html 태그에 커스텀 이름을 붙여줄 수있다.
// const BoxTow = styled.div`` --> div는 사용 가능한 태그 이름을 넣고, `` 사이에는 스타일을 적용시킨다.
// ex)
// const Text = styled.span`
//  color: #fff;
// `;

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
