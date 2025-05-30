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
// 타입스크립트 설치
// npx create-react-app 내 앱 이름 --template typescript
// npm i --save-dev @types/styled-components
// ----> @types/ 라는걸 추가하여 type스크립트가 적용 되어진거
// npm i styled-components
// npm i styled-components --legacy-peer-deps

// App, index 내용은 복사!!

// # 3.2
// interface로 문자, 넘버 등 들어갈 단위를 설정하여 실행 '전'에 알수 있다.
// ex)
// interface CircleProps {
//   bgColor: string;
// }

// function Circle({ bgColor }: CircleProps) {
//   return <Container bg_Color={bgColor} />;
// }

// # 3.3
// ? --> 붙일 시에는 필 조건이 아닌, 선택권(optional)(있을 수도, 없을 수도 있음)으로 변경되어짐
// ex) --> borderColor:? string;
// default값을 줄때는 text = "default text" 라고 -> ="" 라고 선언 해주면 된다 (es6구문)
// ex) { bgColor, borderColor, text="default text" }

// # 3.4
// TypeScript에서는 useState() 안에 들어가는 숫자, 스트링, 블린(boolean) 타입을 자동으로 읽어서 배치한다.
// const [value, setValue] = useState(3); --> number로 자동 배치
// setValue(3)
// const [value, setValue] = useState<number|string>(); --> <number|string> 넣을 시에 둘다 사용 가능
// setValue(3), setValue("hello")

// useState < number > ( )
// state의 type을 지정하려면 Generics안에 타입을 지정
// 일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지 않아도 되지만 상태가 undefined또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다.
// ex) const [ value, setValue ] = useState< Value | null >(null);

// # 3.5
// ReactJs에서의 typeScript 방식!!
// (event: React.FormEvent<HTMLInputElement>) => {}
// *** --> React."event이름"<이 이벤트를 발생시키고 있는 element 이름> ***
// 궁금하면 --> https://reactjs.org/docs/events.html

// currentTarget과 target의 차이
// 만약 click 이벤트를 감지하고 있는 ul이 있고 ul 안에 li가 있을 때, li를 클릭하면
// event.target은 li를 가리킨다.
// event.currentTarget은 click 이벤트가 등록되어 있는 ul를 가리킨다.

// 3가지 방식으로 구분 가능
// const { currentTarget: { value } } = event;
// const { currentTarget } = event;
// const value = event.currentTarget.value

// # 3.6
// 1. styled.d.ts 를 만든다. (참고: d.ts 는 declaration file 이라는 뜻이다.)
// 2. theme.ts (테마) 를 만든다.
// 3. index.tsx 에 2에서 만든 테마를 주입한다.
// 4. app.tsx 에서 props 로 받아 사용한다.

// Styled-components (TypeScript)
// DefaultTheme는 기본적으로 props.theme의 인터페이스로 사용됩니다.
// 기본적으로 DefaultTheme 인터페이스는 비어 있으므로 확장해야 합니다.

// styled.d.ts
// ```
// // import original module declarations
// import "styled-components";

// // and extend them!
// declare module "styled-components" {
// export interface DefaultTheme {
// textColor: string;
// bgColor: string;
// }
// }

// https://styled-components.com/docs/api#typescript

// # 3.7
// SyntheticEvent (합성 이벤트)
// 이벤트 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 SyntheticEvent 객체를 전달받습니다.

// Keyboard Events
// ex) onKeyDown onKeyPress onKeyUp

// Focus Events
// ex) onFocus onBlur

// Form Events
// ex) onChange onInput onInvalid onReset onSubmit

// Generic Events
// ex) onError onLoad

// https://reactjs.org/docs/events.html

// ----------------------------- //#3 Typescript -----------------------------

// ----------------------------- #4 React Router v6 -----------------------------

// ----------------------------- //#4 React Router v6 -----------------------------

// ----------------------------- #5 Crypto Tracker -----------------------------

// # 5.0
// *render 할때 <React.StrictMode> 가 있으면 개발자 테스트용 모드라 2번 실행되어진다.
// Router 연결 및 코딩 방법 설명.

// # 5.1
// <></> ---> Fragment(프레그먼트)로써 div 같은 불필요한 DOM 요소를 추가하고 싶지 않을때 사용함

// Reset CSS
// https://github.com/zacanger/styled-reset/blob/master/src/index.ts
// https://cssdeck.com/blog/scripts/eric-meyer-reset-css/

// Google Fonts
// https://fonts.google.com

// Source Sans Pro 폰트
// @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
// font-family: 'Source Sans Pro', sans-serif;

// Flat UI Color
// https://flatuicolors.com/palette/gb

// createGlobalStyle (전역 스타일을 처리함)
// 전역 스타일을 처리하는 특수 Styled Component를 생성하는 helper 함수입니다.
// https://styled-components.com/docs/api#createglobalstyle

// # 5.3
// 코인 API
// https://api.coinpaprika.com/v1/coins

// useEffect(() => {
//   ()(); --> 이렇게 할 경우에 함수가 바로 실행된다
// }, []);

// # 5.4
// 비하인드더씬 --> 코드가 동작하는 내부 로직, 시스템의 백그라운드 처리 등을 말함
// state --> 정보를 받아오는 것

// React Router 6버전에서 Link컴포넌트를 이용해서 state보내기

// ** React Router 5버전
// < Link to={{ pathname: "/home", state: state }} / >

// ** React Router 6버전
// < Link to="/home" state={state} / >

// 라우터 명령어 설명 페이지
// https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory

// useLocation에 타입 지정하기 --> 현재 URL에 대한 정보(쿼리, 경로 등)를 가져오는 Hook
// ex) const { state } = useLocation() as RouteState;

// Crypto Icon API
// https://cryptoicon-api.vercel.app/api/icon/btc

// React router Link (5버전)
// https://v5.reactrouter.com/web/api/Link

// # 5.5
// const response = await fetch("https://api.coinpaprika.com/v1/coins");
// const json = await response.json();
//  이렇게 한줄로 간략하게 할수 있다----->
//  const response =await (await fetch("https://api.coinpaprika.com/v1/coins")).json;

// # 5.6
// VSCode 단축키
// Ctrl(Command)+D: 같은 문자열 선택
// 윈도우 -> Ctrl(Command) + Shift + L,
// 맥북 -> Shift+Alt(Option)+i: 선택한 모든 문자열(드래그)에 가장 우측 끝으로 포커싱
// Ctrl(Command)+Shift+오른쪽 화살표: 현재 선택한 문자열을 기준으로 우측 끝까지 문자열 선택
// object 라고 써있는 타입은 따로 array를 잡아서 해줘야한다.

// # 5.7

// ----------------------------- //#5 Crypto Tracker -----------------------------
