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

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bg_Color={bgColor} border_Color={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
