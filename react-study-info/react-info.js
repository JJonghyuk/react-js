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
// nested route: 페이지 내부에서 페이지 이동없이 또다른 페이지에 방문할 수있게해준다.
// uri는변경된다.

// Nested Routes
// https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes

// Outlet (중첩 라우트 사용하기)
// 자식 라우트의 엘리먼트가 있는 경우 렌더링합니다.
// Outlet은 부모 경로 요소에서 자식 경로 요소를 렌더링하는 데 사용해야 합니다.
// 이를 통해 하위 경로가 렌더링될 때 중첩된 UI를 표시할 수 있습니다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않습니다.

// # 5.8
// React Router 5버전 => 6버전
// useRouteMatch() => useMatch()
// 현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환합니다.

// matchPath()
// matchPath는 URL 경로 이름에 대해 경로 패턴을 일치시키고 일치에 대한 정보를 반환합니다.

// #5.9
// react 버전이 18이면 타입스크립트에서 react query를 못 불러옵니다
// npm i @tanstack/react-query 를 입력해서 모듈을 설치하면 react query불러오기가 가능해집니다
// 그리고 @tanstack/react-query에서 useQuery를 사용할때 query key의 값은 대괄호로 묶어줘야합니다
// const { isLoading, data } = useQuery(["allCoins"], fetchCoins);
// queryKey: [coinId] --> 실행되기 위해서는 키 값은 고유 값으로만 들어가야 한다.
// 고유값으로 변경 --> queryKey: ["info", coinId] / queryKey: ["tickers", coinId] 각 2개 고유값

// useQuery 반환되는 값 -->
// - data	가져온 데이터(예: JSON)
// - isLoading	데이터를 불러오는 중이면 true
// - error	에러가 발생하면 에러 객체 반환
// - isError	에러 발생 여부 (true/false)
// - refetch()	수동으로 데이터를 다시 불러올 수 있음

// #5.10
// React Query Devtools
// React Query의 모든 내부 작동을 시각화하는 데 도움이 되며 문제가 발생하면 디버깅 시간을 절약할 수 있습니다!
// 기본적으로 React Query Devtools는 process.env.NODE_ENV === 'development'인 경우에만 번들에 포함되므로 프로덕션 빌드 중에 제외하는 것에 대해 걱정할 필요가 없습니다.
// ```
// import { ReactQueryDevtools } from 'react-query/devtools';
// < ReactQueryDevtools initialIsOpen={false} / >
// ```
// https://react-query.tanstack.com/devtools#_top

// Query Keys
// 핵심적으로 React Query는 쿼리 키를 기반으로 쿼리 캐싱을 관리합니다. 쿼리 키는 문자열처럼 단순할 수도 있고 많은 문자열과 중첩 개체의 배열처럼 복잡할 수도 있습니다.
// ex) const result = useQuery(['todos', todoId], () => fetchTodoById(todoId));
// https://react-query.tanstack.com/guides/query-keys#_top

// const {isLoading: infoLoading} --> isLoading이라는 이름을 infoLoading로 변경하여 사용

// #5.11
// react query의 useQuery는 fetch의 완료 여부를 제공하는 값과 data를 넣은 객체를 한번에 반환한다.
// 게다가 캐싱 기능까지 제공하여 화면전환시 불필요한 re-fetch과정도 생략한다..

// useQuery의 1번 인자에는 고유한 key를 넣는다.
// 일반적으로 fetcher함수의 param에 대입될 값을 쓰고, 해당 값을 이용하는 fetcher가 여러개라면
// key를 배열형태로 넣어서 기능과 id를 함꼐 넣어준다.

// #5.13
// npm install--save react - apexcharts apexcharts

// APEX CHARTS
// 현대적이고 인터랙티브한 오픈 소스 차트
// npm install --save react-apexcharts apexcharts

// - https://apexcharts.com

// React APEX CHARTS Doc
// ApexCharts를 사용하여 React.js에서 차트 만들기
// React-ApexCharts는 멋진 React Charts를 만들기 위해 react.js 애플리케이션에 통합할 준비가 된 ApexCharts용 래퍼 구성 요소입니다.
// - https://apexcharts.com/docs/react-charts

// React-ApexCharts 컴포넌트 Props

// type
// 차트 유형 (String) (기본값 ‘line’)

// series
// 차트에 표시하려는 데이터 (Array) (기본값 undefined)

// width, height
// 차트의 너비 (String || Number) ( 기본값 ‘100%’)
// 차트의 높이 (String || Number) (기본값 auto)

// options
// 차트의 구성 옵션 (Object) ( 기본값 {})

// Closing Price: "종가"는 일반적으로 일반 거래 세션 동안 주식이 거래되는 마지막 가격을 나타냅니다.

// #5.14
// ??	값이 null 또는 undefined일 때만 우측 대체값 사용
// - a ?? b
// a가 null 또는 undefined일 경우, 결과는 b
// a가 그 외의 값(0, "", false 등)은 그대로 유지

// new Date(price.time_close * 1000).toUTCString()
// - price.time_close	초 단위 유닉스 시간
// - * 1000	초 → 밀리초로 변환(자바스크립트 Date가 이해할 수 있게)
// - .toUTCString()	UTC 기준 문자열로 변환

// toFixed(n)	소수점 n자리까지 반올림하고 문자열 반환

// #5.15
// * 실시간 동기화 옵션 --> refetchInterval:0000;
// react query의 useQuery의 3번째 parameter로 다양한 옵션을 줄 수있습니다.
// refetchInterval은 입력받은 milesecond마다 다시 fetch를 해주는 옵션입니다.

// react helmet 은 내부에서 render되는것을 전부(title,css,favicon 등등) head로 보내는
// component를 제공하는 라이브러리입니다.

// #5.16
// *** 뒤로가기 버튼 만들기, 차트 바꾸기, 프라이스 넣기 ***

// ----------------------------- //#5 Crypto Tracker -----------------------------

// ----------------------------- #6 State Management -----------------------------

// #6.0
// Recoil
// React를 위한 상태관리 라이브러리
// https://recoiljs.org/ko

// #6.1
// void --> "아무것도 없음"을 뜻함.
// - "함수가 아무 값도 반환하지 않을 때" 사용 되는 리턴 타입

// 단순 react js로 state management를 할때 생기는 불편함:
// App에서 컴포넌트로 내려가는 계층구조로 인해서 state와 state manipulation을 일일이 각 component들에 전달해줘야함. (App-Router-Coins // App-Router-Coin-Chart)

// Recoil은 state를 따로 buble에 담아서 각 컴포넌트들이 필요할때 buble에 접속해서 사용할 수 있게 함. (App -> (isDark)

// - global state는 app이 무언가를 인지해야 할 때 사용한다.
// - state management를 사용하지 않는다면 매우 긴 props의 여정이 생길 수 있다. 따라서 어느곳에서나 접근할 수 있는 state를 만들면 편하다.
// - recoil을 사용하여 state management를 배운다.
// - recoil은 react에서 사용할 수 있는 state management library다.

// #6.2
// # State management 3가지 라이브러리
// - Recoil ---> npm install recoil
// - Redux
// - Context API

// # 차이점
// https://velog.io/@danmin20/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AD%98-%EC%93%B8%EA%B9%8C

// #6.3
// - useRecoilValue(state)
// Recoil state값을 반환합니다.
// 이 hook은 암묵적으로 주어진 상태에 컴포넌트를 구독합니다.
// 이 hook는 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하므로 컴포넌트가 상태를 읽을 수만 있게 하고 싶을 때에 추천하는 hook입니다. 이 hook을 React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링을 하도록 컴포넌트를 구독합니다.
// ex) const names = useRecoilValue(namesState);
// https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/

// - useSetRecoilState(state)
// Recoil state의 값을 업데이트하기 위한 setter 함수를 반환합니다.
// 상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 리턴합니다.
// setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨줍니다.
// ex) const setNamesState = useSetRecoilState(namesState);
// https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/

// #6.4

// #6.5

// #6.6

// #6.7

// #6.8

// ----------------------------- //#6 State Management -----------------------------
