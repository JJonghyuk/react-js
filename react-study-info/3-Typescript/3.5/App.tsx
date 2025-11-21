import React, { useState } from "react";

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

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
