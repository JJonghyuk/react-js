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
