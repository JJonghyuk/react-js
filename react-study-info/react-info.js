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
// ** const { currentTarget: { value, name } } = event;
// --> 구조 분해 할당으로 console.log(value) / console.log(name) 이렇게 여러개를 꺼낼 수 있음

// const { currentTarget } = event;
// --> console.log(currentTarget.value) 라고 value를 뒤에 넣어줘야 그 값을 꺼낼 수 있다

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

// export const isDarkAtom = atom({
//   key: "isDark",       // 각 atom을 식별하는 고유한 문자열입니다. Recoil은 이 키를 통해 내부적으로 상태를 추적합니다. 중복되면 에러가 납니다.
//   default: false,      // atom의 초기값입니다. 어떤 타입이든 사용할 수 있습니다. (boolean, number, string, array, object, 등등)
// });

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

// #6.6
// React Hook Form
// - 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form입니다.
// - https://react-hook-form.com
// 설치: npm install react-hook-form

// 🔶 register: name, onBlur, onChange, onClick, ref를 return하는 함수
// -< input {...register("category") ... > 하면 register 함수가 반환하는 객체를 input의 props로 사용할 수 있음.
// -< input onSubmit={} onClick={} onBlur={} > 같은 느낌..?
// 🔶 watch: form의 입력값들의 변화를 관찰할 수 있게 해주는 함수

// -React Hook Form은 리액트에서 form으로 작업하기에 가장 좋은 방법이다. 만약 input이 하나 밖에 없다면 그리 필요하지 않을 수 잇다.
// -Hook form을 사용하지 않은면 많은 state를 작성해야 한다. 검증차원에서도 유리하다.
// -react hook form 을 사용하기 위해 useForm이라는 hook을 import 한다.
// -useform의 register 함수를 사용하면 onchange 이벤트 핸들러가 필요 없다. 따라서 props도 필요없고 setstate도 필요없다.
// -onBlur 이벤트는 화면의 바깥쪽(focus에서 벗어난 상태)을 말한다.
// -iput에 register의 속성 그 자체를 복사 해준다.
// -useForm의 watch 함수는 변화를 관찰할 수 있게 해준다.

// #6.7
// -handleSubmit 을 사용하여 onSubmit 대체. handleSubmit 이 호출하는 함수는 두 개다. 하나는 호출이 성공했을때, 하나는 호출이 실패했을 때.
// -그냥 input에 required를 사용할 수 있지만, 그것은 변경이 가능하다. 따라서 html이 아닌 js에서 validation을 할 수 있다.
// -formState props에서 에러 확인이 가능하다.
// -에러에 message를 입력할 수 있다.
// ex)
// <input
//   {...register("password1", {
//     required: "Password is required",
//     minLength: {
//       value: 5,
//       message: "Your password is too short.",
//     },
//   })}
//  placeholder="Password1"/>

// #6.8
// 정규표현식
// ^ --> 문장의 시작
// + --> 하나 또는 하나이상

// /^[A-Za-z0-9._%+-]+@naver.com$/
// /^[A-Za-z0-9._%+-]+@naver.com/g

// https://www.regexpal.com

// React Hook Form (TypeScript)
// React Hook Form은 TypeScript로 빌드되었으며, FormData 유형을 정의하여 form 값을 지원할 수 있습니다.

// type FormData = {
// firstName: string;
// lastName: string;
// };
// ----> 필수값이 아닌경우 ? 를 붙여 준다 ex) firstName?:string

// const { register, setValue, handleSubmit, formState: { errors } } = useForm< FormData >();

// https://react-hook-form.com/get-started#TypeScript

// defaultValues: Record< string, any > = {}
// input에 대한 defaultValues는 사용자가 component와 상호 작용하기 전에 component가 처음 렌더링될 때 초기 값으로 사용됩니다.
// ex)
// useForm < IForm >
// {
//   defaultValues: {
//     email: "@naver.com",
//   },
// };

// 모든 input에 대한 defaultValues를 빈 문자열이나 null과 같은 정의되지 않은 값으로 설정하는 것이 좋습니다.
// https://react-hook-form.com/api/useform#props

// 라인 끝에 커서 포커싱하기 (VSCode단축키)
// option(alt)+shift+i

// #6.9
// 🔶setError: 발생하는 문제에 따라 추가적으로 에러를 설정할 수 있게 도와줌
// 사용방법(예시):
// const {register, handleSubmit, formState:{errors},setError} = useForm< IForm >();
// setError("register의 name", {message: . . . }, { shouldFocus: true } )
// -shouldFocus: 내가 고른 input 항목에 강제로 focus(커서 갖다대기)를 할 수 있음

// 🔶validate: 내가 원하는 규칙으로 유효성 검사하기
// validate(현재값) => { !value.includes("nico") || "error message"}
// input 값에 nico가 포함되면 에러메세지 리턴
// ex)
// validate: {
//   noJJong: (value) =>
//     value.includes("jjong") ? "no JJong allowed" : true,
//   noJJongs: (value) =>
//     value.includes("jjongs") ? "no JJongs allowed" : true,
// }

// -비밀번호가 일치하지 않은지 확인하는 방법
// -setError은 특정한 에러를 발생시키게 해준다.
// -shouldFocus는 에러가 난 곳으로 강제
// -validation 값은 T/F값을 받는다. 객체형식으로 여러 개를 관리할 수 있다.

// #6.10
// setValue: (name: string, value: unknown, config?: Object) => void
// 필드 값을 업데이트
// 이 함수을 사용하면 등록된 필드의 값을 동적으로 설정하고 form state를 확인하고 업데이트하는 옵션을 가질 수 있습니다. 동시에 불필요한 rerender를 피하려고 합니다.

// setValue('firstname', 'hello');
// onClick={() => setValue("firstName", "Bill")}

// https://react-hook-form.com/api/useform/setvalue

// reset: (values?: Record, options?: Record) => void
// form state와 value 재설정
// 전체 form state 또는 form state의 일부를 재설정합니다.

// reset() // form 전체 리셋
// reset({ email: "" }); // form에서 특정 필드만 리셋

// https://react-hook-form.com/api/useform/reset

// ex)
// const { register, handleSubmit, reset } = useForm<IForm>();
// const onSubmit = (data: IForm) => {
//   console.log("add to do", data.toDo);
//   reset();
// };

// #6.11
// | 기호는 "하나만"이라는 뜻이 아니라, "이 중 하나"라는 뜻입니다.
// ex)
// category: "TO_DO" | "DOING" | "DONE";

// ** useRecoilState(state)
// 첫 요소가 상태의 값이며, 두번째 요소가 호출되었을 때 주어진 값을 업데이트하는 setter 함수인 튜플을 리턴합니다.
// 이 hook은 암묵적으로 주어진 상태에 컴포넌트를 구독합니다.

// const [toDos, setToDos] = useRecoilState(toDoState);
// --> useState랑 같다고 보면된다. (setToDos를 설정하면 toDos안의 내용이 수정됨)
// ex)
// const [toDos, setToDos] = useRecoilState(toDoState);
// setToDos((oldToDos) => [
//   { text: toDo, id: Date.now(), category: "TO_DO" },
//   ...oldToDos,
// ]);

// https://recoiljs.org/ko/docs/api-reference/core/useRecoilState/

// useRecoilValue: state값을 리턴
// useSetRecoilState: setter 함수를 리턴
// useRecoilState: state, setter 함수를 모두 리턴

// #6.12
// Todo list / Todo 입력 폼 / Todo atom 파일을 각각 분리한다.
// 1. toDo atom에는 atom을 위한 타입과 atom에대한 정의만 입력한다.
// 2. todo 입력폼에는 폼의 submit 을 통한 결과를 처리하는 역할만한다.
// 3. todo는 각각의 todo에대한 정의를 넣는다.
// 4. todoList는3 번의 todo를 그려주는 역할을한다.

// 여기서 파일별 책임이 어떻게 분리되는지 주의해서 봐야한다.
// 1. atom 선언파일
// 2. todoForm 컨트롤 컴포넌트
// 3. 각각의 todo에대한 컴포넌트
// 4. 단지 그려주는 todolist 컴포넌트

// #6.13
// 단축평가란?
// || (논리합), && (논리곱) 연산자는 왼쪽부터 오른쪽으로 평가를 진행하는데,
// 중간에 평가결과가 나오면 오른쪽 끝까지 가지 않고 평가결과를 반환해버린다.
// 이를 단축평가라고 하며, 피연산자의 타입을 변환하지 않고 그대로 반환한다.
// {조건 && 표현식}

// 예를 들어
// "apple" || "banana"; // 결과는 "apple"
// "apple" && "banana"; // 결과는 "banana"

// || (논리합) 연산자의 단축평가 : 둘 중 하나만 true면 true로 평가되므로 왼쪽 피연산자가 true이면 바로 true를 반환한다.

// && (논리곱) 연산자의 단축평가 : 둘 다 true여야만 true 이므로 왼쪽 피연산자가 false면 바로 false로 평가된다.

// #6.14
// Array.prototype.findIndex()
// findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
// 인덱스 대신 값을 반환하는 find() 메서드도 참고하세요.

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// #6.15
// as any 라고 붙이면 타입스크립트에게 체크하지 말라고 하는것
// ex) const newToDo = { text, id, category: name as any };

// as any대신
// as "TO_DO" | "DOING" | "DONE" 또는 name as IToDo['category']로도 가능합니다.

// #6.16
// Array.prototype.slice()
// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// end가 생략되면 slice()는 배열의 끝까지(arr.length) 추출합니다.

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// #6.17
// Selectors

// Selector는 파생된 state(derived state)의 일부를 나타낸다.
// 즉, 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환할 수 있다. 기존 state를 이용만할 뿐 변형시키지 않는다. derived state는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.
// ```
// const filteredTodoListState = selector({
// key: 'filteredTodoListState',
// get: ({get}) => {
// const filter = get(todoListFilterState);
// const list = get(todoListState);

// switch (filter) {
// case 'Show Completed':
// return list.filter((item) => item.isComplete);
// case 'Show Uncompleted':
// return list.filter((item) => !item.isComplete);
// default:
// return list;
// }
// },
// });
// ```
// filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적한다. 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재 실행된다.

// https://recoiljs.org/ko/docs/basic-tutorial/selectors/
// https://recoiljs.org/ko/docs/api-reference/core/selector/

// -selector를 이용하여 todo들을 분리
// -selector은 atom의 output을 변형시킴. selector은 state를 이용하여 뭔가를 return 한다.
// -selector는 get function이 있는데 인자로 객체를 받는다.
// -selector의 요점은 atom을 가져다가 output을 변형할 수 있다는 것.
// -state를 변형시키는 것이 아니라 state를 이용하여 output을 변형시키는 것.

// #6.17

// #6.18
// Enums(이늄)

// 열거형은 TypeScript가 제공하는 기능 중 하나입니다.
// enum은 열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다.
// 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있습니다. TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.

// 숫자 열거형 (Numeric enums)
// enum Direction {
// Up,  >> 0 으로 시작
// Down,  >> 1 으로 시작
// Left,
// Right,
// }

// 문자열 열거형 (String enums)
// enum Direction {
// Up = "UP",
// Down = "DOWN",
// Left = "LEFT",
// Right = "RIGHT",
// }
// 등등..

// https://www.typescriptlang.org/ko/docs/handbook/enums.html

// **enum을 일반적인상태로 컴파일되면 코드스페이스를 오염시킵니다. 꼭 const enum형태로 사용합시다
// ex)
// export const enum Categories {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }

// ----------------------------- //#6 State Management -----------------------------

// ----------------------------- #7 Trello Clone -----------------------------

// #7.0
// selector(options)
// 이 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다. 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달된다. 사용자가 selector를 재설정할 경우 새로 입력 값은 T 타입의 값 또는 DefaultValue 타입의 객체일 수 있다.
// https://recoiljs.org/ko/docs/api-reference/core/selector

// 쓰기 가능한 Selector
// ```
// const proxySelector = selector({
// key: 'ProxySelector',
// get: ({get}) => ({...get(myAtom), extraField: 'hi'}),
// set: ({set}, newValue) => set(myAtom, newValue),
// });
// ```
// https://recoiljs.org/ko/docs/api-reference/core/selector#%EC%93%B0%EA%B8%B0-%EA%B0%80%EB%8A%A5%ED%95%9C-selector

// -->  + 해줄 경우 number 로 보여짐
// const onMinutesChange = (event: React.FormEvent<HTMLInputElement>){
//  setMinutes(+event.currentTarget.value)-- > + 해줄 경우 number 로 보여짐
//   ==> +"1" --> 1
//  }

// #7.1
// Selector

// set? - 이 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다. 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달된다. 사용자가 selector를 재설정할 경우 새로 입력 값은 T 타입의 값 또는 DefaultValue 타입의 객체일 수 있다. 콜백에는 다음이 포함된다.

// get 매개변수
// 다른 atom이나 selector로부터 값을 찾는데 사용되는 함수. 이 함수는 selector를 주어진 atom이나 selector를 구독하지 않는다.

// set 매개변수
// 업스트림 Recoil 상태의 값을 설정할 때 사용되는 함수. 첫 번째 매개변수는 Recoil state, 두 번째 매개변수는 새로운 값(newValue)이다. 새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefalutValue 객체일 수 있다.
// ```
// const proxySelector = selector({
// key: 'ProxySelector',
// get: ({get}) => ({...get(myAtom), extraField: 'hi'}),
// set: ({set}, newValue) => set(myAtom, newValue),
// });
// ```
// https://recoiljs.org/ko/docs/api-reference/core/selector/

// export const hourSelector = selector<number>({
//   key: "hours",
//   get: ({ get }) => {
//     const minutesInputValue = get(minuteState) --> 값 가져오기
//     return minutesInputValue / 60;
//   },
//   set: ({ set }, hoursValue) => {
//     const minutesHoursInput = Number(hoursValue) * 60;
//     set(minuteState, minutesHoursInput) --> 값 변경하기 (변경하는 인자, 변경해야 할 값)
//   },
// });

// #7.2
// ** react-beautiful-dnd
// React로 list를 만들기 위한 아름답고 접근 가능한 드래그 앤 드롭
// npm i react-beautiful-dnd
// npm i --save-dev @types/react-beautiful-dnd

// https://www.npmjs.com/package/react-beautiful-dnd
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md

// react-beautiful-dnd 테스트해 보기
// https://react-beautiful-dnd.netlify.app/iframe.html?id=board--simple

// react-beautiful-dnd 예시 코드
// https://codesandbox.io/s/k260nyxq9v

// DragDropContext
// https://github.com/LeeHyungGeun/react-beautiful-dnd-kr

// #7.3
// Using innerRef
// (Draggable과 Droppable컴포넌트의 내부 props정의)
// < Draggable /> 및 < Droppable /> 컴포넌트 모두 HTMLElement를 제공해야 합니다. 이것은 DraggableProvided 및 DroppableProvided 객체의 innerRef 속성을 사용하여 수행됩니다.
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md#using-innerref

// dragHandleProps
// 특정 영역을 통해서만 드래그를 가능하도록 하고 싶을 때 사용한다.
// ex) {...provided.dragHandleProps}

// DragDropContext
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/drag-drop-context.md

// Droppable
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md

// Draggable
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/draggable.md

// #7.4
// provided.placeholder (?ReactElement)
// Draggable 엘리먼트를 드래그하는 동안 position: fixed(영역을 고정시킴)를 적용합니다.
// Draggable을 드래그할 때 Droppable 리스트가 작아지는 것을 방지하기 위해 필요합니다.
// Draggable 노드의 형제로 렌더링하는 것이 좋습니다.

// ex)
//   <Droppable droppableId="one">
//     {(dropMagic) => (
//       <Board ref={dropMagic.innerRef} {...dropMagic.droppableProps}>
//         {toDos.map((toDo, index) => (
//           <Draggable draggableId={toDo} index={index}>
//             {(dropMagic02) => (
//               <Card
//                 ref={dropMagic02.innerRef}
//                 {...dropMagic02.draggableProps}
//                 {...dropMagic02.dragHandleProps}
//               >
//                 {toDo}
//               </Card>
//             )}
//           </Draggable>
//         ))}
//         {dropMagic.placeholder} --> 드래그 할때 크기가 작아지는 현상을 없애줌
//       </Board>
//     )}
//   </Droppable>

// provided
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md#1-provided-droppableprovided

// #7.5
// onDragEnd
// result: DropResult
// result.draggableId: 드래그 되었던 Draggable의 id.
// result.type: 드래그 되었던 Draggable의 type.
// result.source: Draggable 이 시작된 위치(location).
// result.destination: Draggable이 끝난 위치(location). 만약에 Draggable이 시작한 위치와 같은 위치로 돌아오면 이 destination값은 null이 될것입니다.

// ex)
// const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
//   console.log(draggableId, destination, source);
// - draggableId --> 내가 드래그를 선택한 id값
// - destination --> 내가 드롭한 위치의 index 값
// - source --> 내가 드래그를 선택한 위치의 index 값
// };

// Array.prototype.splice()
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// ```
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// ```
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// #7.6
// mutation (뮤테이션)--> 변경되다 ex) --> splice()
// non-mutation --> 변경되지 않다 --> slice()

// ❓ splice() vs splice() 차이
// - splice() 메서드 : 배열의 기존 요소 삭제/교체/추가 (원본 변화 o)
// ex) splice(2, 1, "a") --> 배열의 index 3번째(2)를 삭제(1)
// ex) splice(2, 0, "a") --> 배열의 index 3번째(2)를 삭제하지(0)않고 "a"를 추가한다
// - slice() 메서드 : 원본 배열의 복사본을 만들어 새로운 배열 반환 (원본 변화 x)

//  < Draggable /> list의 키
//  < Draggable /> list를 렌더링하는 경우 각 < Draggable />에 key prop을 추가하는 것이 중요합니다.

// 규칙
// key는 list 내에서 고유해야 합니다.
// key에 item의 index가 포함되어서는 안 됩니다. (map의 index사용 X)
// 일반적으로 draggableId를 key로 사용하면 됩니다.
// 주의! list에 key가 없으면 React가 경고하지만 index를 key로 사용하는 경우 경고하지 않습니다.
// key를 올바르게 사용하지 않으면 정말 안 좋은 일이 생길 수 있습니다 💥
// return items.map((item, index) => (
// < Draggable
// // adding a key is important!
// key={item.id}
// draggableId={item.id}
// index={index}
// >
// 나머지 코드..
// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/draggable.md#keys-for-a-list-of-draggable-

// + Card를 드래그한 후 이동하지 않고, 다시 제자리에 놓았을 때, 콘솔창에 에러 발생하시는 분들은 destination?.index가 undefined일 때 return으로 함수를 종료시켜주시면 됩니다.
// if (destination?.index === undefined) return;

// #7.7
// React.memo
// ex) export default React.memo(DraggableCard);

// React.memo는 고차 컴포넌트(Higher Order Component)입니다.
// 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있습니다. 즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.

// React.memo는 props 변화에만 영향을 줍니다. React.memo로 감싸진 함수 컴포넌트 구현에 useState, useReducer 또는 useContext 훅을 사용한다면, 여전히 state나 context가 변할 때 다시 렌더링됩니다.
// 이 메서드는 오직 성능 최적화를 위하여 사용됩니다. 렌더링을 “방지”하기 위하여 사용하지 마세요. 버그를 만들 수 있습니다.

// DraggableCard에게 동일한 index와 동일한 todo prop을 받으면 리랜더링을 하지 않도록 하기 위함이다.
// function MyComponent(props) {
// /* props를 사용하여 렌더링 */
// }

// export default React.memo(MyComponent, areEqual);
// https://ko.reactjs.org/docs/react-api.html#reactmemo

// #7.8
// Object.keys(obj)

// Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
// ex) Object.keys(obj).map((item)=>obj[item])
// ```
// const object1 = {
// a: 'somestring',
// b: 42,
// c: false
// };
// console.log(Object.keys(object1)); // Array ["a", "b", "c"]
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// {Object.keys(toDos).map((boardId) => (
// Board boardId={boardId} key={boardId} toDos={toDos[boardId]}
// ))}

// 여기서 에러가 생긴 이유

// 현재 toDos object에서 key들만 가져와 배열로 구성하고 그 배열에 map을 사용하여
// 각 key들을 boardId라는 이름으로 toDos[boardId]
// 이렇게 각 key들에 해당하는 값들에 접근하려고 하지만,

// TypeScript 관점에서 Object.keys()로 가져온 각 key들(boardId)은 그냥 string일 뿐이다.
// 하지만 toDos object의 key type은 "toDo" | "doing" | "done"로 제한되어 있다.
// 그래서 string으로 toDos에 접근하려니까 에러가 생기는 것이다.

// 이것을 해결하기 위해 인덱스 시그니처를 사용해
// key들이 3개로만 제한되어 있는게 아니라 string type이며 값으로는 string으로 이루어진 배열을 가지고 있다는 것을 알려주기 위해
// [key: string]: string[]; 이렇게 적어준다.

// ▪️ Object.keys() 메서드
// 주어진 객체(가로 안에 들어가는 객체)의 프로퍼티의 키를 배열로 반환

// ▪️ Index Signatures (TS)
// 프로퍼티의 이름(키)은 모르지만 값을 알 때 사용할 수 있는 방법
// [ key : string ] : string[]
// ㄴ 여기 [] 대괄호는 배열 아님

// #7.9
// - DropResult
// draggableId: 드래그 되었던 Draggable의 id
// type: 드래그 되었던 Draggable의 type
// source: Draggable이 시작된 위치
// destination: Draggable이 끝난 위치

// #7.11
// Droppablestate snapshot

// isDraggingOver: boolean
// 현재 선택한 Draggable이 특정 Droppable위에 드래깅 되고 있는지 여부 확인

// draggingOverWith: ?DraggableId
// Droppable 위로 드래그하는 Draggable ID

// draggingFromThisWith: ?DraggableId
// 현재 Droppable에서 벗어난 드래깅되고 있는 Draggable ID

// isUsingPlaceholder: boolean
// placeholder가 사용되고 있는지 여부

// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md#2-snapshot-droppablestatesnapshot

// #7.12
// Draggablestate snapshot

// isDragging: boolean
// Draggable이 활발하게 드래그 중이거나 드롭 애니메이션인 경우 true로 설정합니다.

// https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/draggable.md#2-snapshot-draggablestatesnapshot

// Flatuicolors
// https://flatuicolors.com/palette/us

// #7.13
// useRef()
// useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 life cycle을 통해 유지될 것입니다.
// 일반적인 사용 사례는 자식에게 접근하는 경우입니다.
// 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

// ref 속성보다 useRef()가 더 유용합니다. 이 기능은 클래스에서 인스턴스 필드를 사용하는 방법과 유사한 어떤 가변값을 유지하는 데에 편리합니다.
// const inputEl = useRef(null);

// const onButtonClick = () => {
// // `current` points to the mounted text input element
// inputEl.current.focus();
// };

// < input ref={inputEl} type="text" / >
// https://ko.reactjs.org/docs/hooks-reference.html#useref

// HTMLInputElement methods
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#methods

// #7.14

// #7.15

// #7.16

// ----------------------------- //#7 Trello Clone -----------------------------

// ----------------------------- #8 Animations -----------------------------
// #8.0
// Framer

// React용 production-ready 모션 라이브러리 (오픈 소스)
// https://motion.dev/docs/react-animation
// https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion

// #8.1

// #8.2
// const Box = styled(motion.div)`
// `

// - Animation
// Framer Motion의 애니메이션은 모션 컴포넌트의 유연한 animate 속성을 통해 제어됩니다. 간단한 애니메이션의 경우 animate props에서 직접 값을 설정할 수 있습니다.
// ex) motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}

// - initial: boolean | Target | VariantLabels (애니메이션의 초기값 지정)
// 속성, 변형 레이블 또는 시작할 변형 레이블의 배열입니다.
// animate의 값으로 초기화하려면 false로 설정합니다(마운트 애니메이션 비활성화).

// - Transition
// Transition은 값이 한 상태에서 다른 상태로 움직이는 방식을 정의합니다.
// 또한 Tween, Spring 또는 Inertia를 사용할 애니메이션 유형을 정의하는 소품을 허용할 수 있습니다.
// ex) motion.div animate={{ rotate: 180 }} transition={{ type: 'spring' }}

// #8.3
// Variants

// Variants은 컴포넌트가 가질 수 있는 미리 정의된 시각적 state입니다.
// ex)
// const variants = {
//  visible: { opacity: 1 },
//  hidden: { opacity: 0 },
// }
// <motion.div initial="hidden" animate="visible" variants={variants}>

// #8.4
// Orchestration
// - delayChildren: 딜레이 시간(초) 후에 하위 애니메이션이 시작됩니다.
// - staggerChildren: 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있습니다. 예를 들어, staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초, 세 번째 자식은 0.02초 지연되는 식입니다. 계산된 stagger 딜레이가 delayChildren에 추가됩니다.

// inherit: boolean
// 부모로부터 variant 변경 사항을 상속하지 않도록 하려면 false로 설정합니다.

// custom: any
// 각 애니메이션 컴포넌트에 대해 dynamic variants을 다르게 사용할 사용자 지정 데이터입니다.
// const variants = {
//  visible: (custom) => ({
//  opacity: 1,
//  transition: { delay: custom * 0.2 }
// })
// }

// < motion.div inherit={false} custom={0} animate="visible" variants={variants} / >
// < motion.div custom={1} animate="visible" variants={variants} / >
// < motion.div custom={2} animate="visible" variants={variants} / >

// place-items (Container Properties)
// justify-items과 align-items를 합친 축약형

// place-self (Item Properties)
// justify-self와 align-self를 합친 축약형

// #8.5
// Hover
// hover 제스처는 포인터가 컴포넌트 위로 이동하거나 컴포넌트를 떠날 때를 감지합니다. onMouseEnter 및 onMouseLeave와는 달리 실제 마우스 이벤트의 결과로만 호버가 실행되도록 보장됩니다.

// - whileHover: VariantLabels | TargetAndTransition
// 호버 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블입니다.
// < motion.div whileHover={{ scale: 0.8 }} / >

// Tap
// - whileTap: VariantLabels | TargetAndTransition
// 컴포넌트를 누르고 있는 동안 애니메이션할 속성 또는 변형 레이블입니다.
// < motion.div whileTap={{ scale: 0.8 }} / >

// Drag
// - drag: boolean | "x" | "y"
// 이 요소에 대해 끌기를 활성화합니다. 기본적으로 false로 설정됩니다. 양방향으로 드래그하려면 true로 설정하십시오. 특정 방향으로만 드래그하려면 "x" 또는 "y"를 설정합니다.
// < motion.div drag="x" / >

// - whileDrag: VariantLabels | TargetAndTransition
// 드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블입니다.
// < motion.div whileDrag={{ scale: 1.2 }} / >

// #8.6
// - dragConstraints
// 허용된 드래그 가능 영역에 제약 조건을 적용합니다.
// dragConstraints 에는 드래그 가능한 컴포넌트의 가장자리 거리를 정의합니다. (드래그 가능한 영역에 가장자리에서 얼마만큼까지 허용할 것인지 지정)
// // 픽셀 이용
// < motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}/ >

// // ref이용
// const MyComponent = () => {
// const constraintsRef = useRef(null)

// return (
//  < motion.div ref={constraintsRef}>
//  < motion.div drag dragConstraints={constraintsRef} />
//. < /motion.div>
// )
// }

// - dragSnapToOrigin: boolean
// true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션됩니다.
// ex) dragSnapToOrigin / dragSnapToOrigin={true}

// - dragElastic: DragElastic
// 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정됩니다. 움직임을 비활성화하기 위해 false로 설정할 수도 있습니다.
// ex) dragElastic={0.2}

// #8.7
// MotionValue
// MotionValues는 애니메이션 값의 상태(state)와 속도(velocity)를 추적합니다. 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용하여 애니메이션 값의 상태와 속도를 추적합니다. 일반적으로 이들은 자동으로 생성됩니다. (MotionValue는 React State가 아니기 때문에 Motion Value값이 바뀌어도 리랜더링이 일어나지 않는다.)
// import { motion, useMotionValue } from "framer-motion"

// export function MyComponent() {
// const x = useMotionValue(0)
// return < motion.div style={{ x }} />
// }
// const x = useMotionValue(0)
// useMotionValue 후크로 MotionValues를 생성할 수 있습니다. useMotionValue에 전달된 값은 MotionValue의 초기 상태로 작동합니다.

// x.set(100)
// set 메서드로 업데이트할 수 있습니다.
// 이것은 React 리렌더링을 트리거하지 않습니다.

// x.get() // 100
// MotionValue는 문자열이나 숫자가 될 수 있습니다.
// get 메소드로 값을 읽을 수 있습니다.

// useEffect(() => {
//   x.on("change", () => console.log(x.get()));
// }); --> x 값 확인 할 수 있음

// #8.8
// - useTransform
// useTransform 훅을 통해 MotionValues를 연결합니다.
// useTransform()는 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만듭니다.
// x(Motion Value)값을 다른 output값으로 변환해준다.
// ex) x: -400 => 1
// const x = useMotionValue(0)
// const input = [-200, 0, 200]
// const output = [0, 1, 0]
// const opacity = useTransform(x, input, output)

// return < motion.div drag="x" style={{ x, opacity }} />

// #8.9
// linear-gradient
// "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
// "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
// "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",

// - useScroll(): ScrollMotionValues
// 뷰포트가 스크롤될 때 업데이트되는 MotionValues를 리턴합니다.
// 아래 값들은 모두 MotionValue< number >를 넘겨줍니다.
// scrollX: 실제 수평 스크롤 픽셀 ex) 500px
// scrollY: 실제 수직 스크롤 픽셀 ex) 500px
// scrollXProgress : 0 ~ 1 사이의 수평 스크롤
// scrollYProgress : 0 ~ 1 사이의 수직 스크롤(가장 상단 0, 가장 하단 1)

// export const MyComponent = () => {
// const { scrollYProgress } = useScroll()
// return < motion.div style={{ scaleX: scrollYProgress }} />
// }

// #8.10
// Fontawesome Airbnb Logo
// < />모양 클릭해서 svg복사 후 사용하시면 됩니다.
// https://fontawesome.com/v5.15/icons/airbnb?style=brands

// Line drawing
// svg 엘리먼트에 'pathLength', 'pathSpacing', 'pathOffset' 속성을 사용하여 Line drawing 애니메이션을 만들 수 있습니다.

// path (SVG)
// path SVG 엘리먼트는 모양을 정의하는 일반 엘리먼트입니다.모든 기본 모양은 path 엘리먼트로 만들 수 있습니다.
// path의 속성 d는 경로의 모양을 정의합니다.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path

// Path
// motion.path 컴포넌트는 세 가지 강력한 SVG path 속성인 pathLength, pathSpacing 및 pathOffset을 가지고 있습니다. 수동 경로 측정이 필요 없이 모두 0과 1 사이의 값으로 설정됩니다.

// Line drawing
// 선 그리기 애니메이션은 pathLength, pathSpacing 및 pathOffset의 세 가지 특수 속성을 사용하여 많은 SVG 요소로 만들 수 있습니다.
// ex) motion.circle initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}

// #8.11
// AnimatePresence --> 항상 visible(보이는) 상태여야 한다.
// ex)
// <AnimatePresence>
//   {showing ? (
//     <Box
//       variants={boxVariants}
//       initial="initial"
//       animate="visible"
//       exit="leaving"
//     />
//   ) : null}
// </AnimatePresence>

// AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있습니다. React에는 다음과 같은 수명 주기 메서드가 없기 때문에 종료 애니메이션을 활성화해야 합니다.

// - exit
// 이 컴포넌트가 트리에서 제거될 때 애니메이션할 대상입니다.
// import { motion, AnimatePresence } from "framer-motion"

// export const MyComponent = ({ isVisible }) => (
//  < AnimatePresence>
//   {isVisible && (
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//  />
// )}
//  </AnimatePresence>
// )

// #8.12
// - AnimatePresence
// AnimatePresence의 단일 자식 key를 변경하여 슬라이드쇼(슬라이더)와 같은 컴포넌트를 쉽게 만들 수 있습니다.

// export const Slideshow = ({ image }) => (
// < AnimatePresence>
//  key={image.src}
//  src={image.src}
//  initial={{ x: 300, opacity: 0 }}
//  animate={{ x: 0, opacity: 1 }}
//  exit={{ x: -300, opacity: 0 }}
// />
// < /AnimatePresence>
// )

// Slider 예시 코드
// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed

// #8.13
// - custom
// 각 애니메이션 컴포넌트에 대해 동적 variants를 다르게 적용할 때 사용할 수 있는 사용자 지정 데이터입니다.
// const variants = {
//  visible: (custom) => ({
//  opacity: 1,
//  transition: { delay: custom * 0.2 }
// })
// }

// < motion.div custom={0} animate="visible" variants={variants} />
// < motion.div custom={1} animate="visible" variants={variants} />
// < motion.div custom={2} animate="visible" variants={variants} />

// * custom = {} 값을 설정해줘야 한다. (AnimatePresence 와 내부 자식)
// <AnimatePresence mode="wait" custom={back}>
//   <Box
//     custom={back}
//     key={visible}
//     variants={box}
//     initial="entry"
//     animate="center"
//     exit="exit"
//   >
//     {visible}
//   </Box>
// </AnimatePresence>

// - mode="wait"
// true로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 랜더링합니다. exiting중인 컴포넌트는 entering하는 컴포넌트가 렌더링되기 전에 exit 애니메이션을 완료합니다.

// < AnimatePresence mode="wait">
//  < motion.div key={currentItem} exit={{ opacity: 0 }} />
// < /AnimatePresence>

// #8.14
// *Layout animation
// - layout: boolean | "position" | "size"
// true인 경우 이 컴포넌트는 레이아웃이 변경될 때 새 위치에 자동으로 애니메이션을 적용합니다. 크기나 위치가 변경될 때 모션 컴포넌트의 레이아웃에 자동으로 애니메이션을 적용하려면 레이아웃 prop을 제공합니다. 부모 플렉스박스 방향, 너비, 상단/오른쪽 등 레이아웃 변경의 원인이 무엇이든 상관없이 애니메이션 자체는 최대 성능을 위해 변환으로 수행됩니다.
// ex)
// <Box style={{ justifyContent: clicked ? "center" : "flex-start" }}>
//   <Circle layout />
// </Box>

// Syncing layout animations
// 모션 컴포넌트의 layout prop은 레이아웃이 변할 때마다, 자동으로 애니메이션을 적용합니다.

// Animate between components
// AnimateSharedLayout은 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있습니다. layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행합니다. 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속합니다. 따라서 시각적으로 하나의 연속 컴포넌트로 처리됩니다.

// layoutId={n} --> layoutId의 n의 값을 string 이어야 한다.
// ex)
// <Box>
//   {!clicked ? (
//     <Circle layoutId="circle" style={{ borderRadius: 50 }} />
//   ) : null}
// </Box>
// <Box>
//   {clicked ? (
//     <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
//   ) : null}
// </Box>

// #8.15

// #8.16

// ----------------------------- //#8 Animations -----------------------------

// ----------------------------- #9 Nomflix Clone -----------------------------

// #9.02
// [2022.02.17]
// **react-router-dom v5 vs v6**

// 1. Link에서 to는 상대경로로 적으시면 됩니다
// ex. '/tv' -> 'tv'

// 2. exact가 사라졌습니다
// 대신 알아서 최적의 경로를 react-router-dom이 판단하여 매칭해줍니다

// 3. useRouteMatch가 useMatch로 변경되었습니다
// 이 또한 상대경로로 작성하는 것으로 변경되었습니다
// ex. useRouteMatch('/tv') -> useMatch('tv')

// https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6

// - whileHover
// 호버 제스처가 인식되는 동안 애니메이션할 속성 또는 variant label입니다.

// #9.03
// - transform-origin
// transform-origin CSS 속성은 엘리먼트 transformation의 원점을 설정합니다.
// transform-origin: center;
// transform-origin: top left;
// transform-origin: bottom right 60px;

// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin

// #9.04
// - useAnimation()
// useAnimation 훅을 사용하여 시작 및 중지 메서드가 있는 AnimationControls을 만들 수 있습니다.
// ```
// const MyComponent = () => {
// const controls = useAnimation()
// return < motion.div animate={controls} />
// }

// 애니메이션은 controls.start 메소드로 시작할 수 있습니다.
// controls.start({ x: "100%", transition: { duration: 3 }})
// ex) navAnimation.start("scroll");

// useViewportScroll(): ScrollMotionValues
// viewport가 스크롤될 때 업데이트되는 MotionValues를 반환합니다.
// 주의! body 또는 html을 height: 100% 또는 이와 유사한 것으로 설정하면 페이지 길이를 정확하게 측정하는 브라우저의 기능이 손상되므로 Progress 값이 손상됩니다.

// export const MyComponent = () => {
// const { scrollYProgress } = useViewportScroll()
//  return < motion.div style={{ scaleX: scrollYProgress }} />
// }

// #9.05
// TheMovieDB API Key
// https://www.themoviedb.org/settings/api?language=ko

// TheMovieDB API Document
// https://developers.themoviedb.org/3/movies/get-now-playing

// TheMovieDB Image가져오기
// 이미지 파일명 앞에 https://image.tmdb.org/t/p/original/ 붙이기

// BASE_PATH
// https://api.themoviedb.org/3/

// React Query
// const { isLoading, error, data } = useQuery('repoData', () =>
//  fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//   res.json()
//  )
// )
// https://react-query.tanstack.com/overview

// #9.06

// #9.07
// window.outerWidth : 브라우저 전체의 너비
// window.outerHeight : 브라우저 전체의 높이
// window.innerWidth : 브라우저 화면의 너비
// window.innerHeight : 브라우저 화면의 높이

// outerWidth vs innerWidth 비교 이미지
// https://www.cluemediator.com/how-to-get-the-window-size-in-javascript

// window.outerWidth	/ 브라우저 전체 창 너비	/ 브라우저 프레임, 툴바, 주소창 포함
// window.innerWidth	/ 브라우저 콘텐츠 영역 너비	/ 스크롤바 포함, 콘텐츠만 표시되는 영역

// #9.08
// AnimatePresence

// - onExitComplete
// exit 중인 모든 노드들이 애니메이션을 끝내면 실행됩니다.
// ex) AnimatePresenceProps.onExitComplete?: (() => void) | undefined
// https://www.framer.com/docs/animate-presence/###onexitcomplete

// - initial
// initial={false}를 전달하면 AnimatePresence는 컴포넌트가 처음 렌더링될 때 자식의 초기 애니메이션을 비활성화합니다.

// - slice()
// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Math.ceil() --> 올림 숫자 ex) 4.2 -> 5
// Math.floor() --> 내림 숫자 ex) 4.2 -> 4

// #9.09

// #9.10

// #9.11

// #9.12

// #9.13

// #9.14

// ----------------------------- //#9 Nomflix Clone -----------------------------
