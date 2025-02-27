// *** 리엑트 설치 ***
// npm create-react-app -리엑트 설치 할 이름-
// ex) npm create-react-app react-masterclass

// 리엑트 퍼블리싱 깃에 올리기 (설치 및 방법)
// npm i gh-pages

// package.json에 추가
// "scripts":
//   "deploy": "gh-pages -d build",
//   "predeploy": "npm run build"
// 맨하단
// "homepage": "https://깃 이름.github.io/프로젝트-명"
// ex) "https://jjonghyuk.github.io/react-for-beginner"

// ----------------------------- #2 Styled Components -----------------------------

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

// # 2.2
// -props를 사용하여 styled을 설정할 수 있다.
// -기존의 스타일을 그대로 와서 확장하는 것도 가능하다. const Circle = styled(Box) =>styled()를 이용하면 된다.

// # 2.3
// -컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때, 이를테면 버튼을 사용하지 않고 a태그나 Link를 사용하고 싶을 때.
// -이럴 땐 as property를 사용할 수 있다.
// -styled.component를 생성할 때 속성값을 설정할 수 있게 해준다. attrs(attributes)를 이용하여 속성을 설정 가능하다.

// # 2.4
// -styled.component로 animation을 만든다. keyframes function을 import한다.
// -component style안에 다른 component style을 작성 가능하다.

// # 2.5
// styledComponent끼리도 서로 selecting이 가능

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

// ----------------------------- //#2 Styled Components  -----------------------------

// ----------------------------- #3 Typescript -----------------------------

// # 3.0
// -TypeScript는 JS를 기반으로 한 프로그래밍 언어다.
// -하지만 큰 차이점은 없고 살짝 새로운 기능만 추가한 것이다.
// -ts는 strongly-typed언어다. 이것은 언어가 작동하기 전에 type을 확인한다는 것이다.
// -js는 strong-type이 아니다. js는 어느 데이터 타입인지 신경쓰지 않는다.
// -ts는 프로그램을 돌리기 전에 무엇이 잘못되었는지 얘기해준다.
// -물론 컴퓨터는 js밖에 이해할 수 없어서 publish 전에 js가 ts로 compile해준다.

// # 3.1

// ----------------------------- //#3 Typescript -----------------------------
