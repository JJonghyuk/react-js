import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bg_Color: string;
  border_Color: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bg_Color};
  border: 3px solid ${(props) => props.border_Color};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

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

function Circle({ bgColor, borderColor }: CircleProps) {
  // const [value, setValue] = useState(3);
  // setValue(6666);

  // const [value2, setValue2] = useState<number | string>(3);
  // setValue2("hello");
  return (
    <Container
      bg_Color={bgColor}
      border_Color={borderColor ?? bgColor}
    ></Container>
  );
}

export default Circle;
