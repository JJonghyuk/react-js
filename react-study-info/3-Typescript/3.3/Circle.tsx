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
  text?: string;
}

// # 3.3
// ? --> 붙일 시에는 필 조건이 아닌, 선택권(optional)(있을 수도, 없을 수도 있음)으로 변경되어짐
// ex) --> borderColor:? string;
// default값을 줄때는 text = "default text" 라고 -> ="" 라고 선언 해주면 된다 (es6구문)
// ex) { bgColor, borderColor, text="default text" }

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bg_Color={bgColor} border_Color={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
