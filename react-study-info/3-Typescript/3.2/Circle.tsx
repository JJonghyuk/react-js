import styled from "styled-components";

interface ContainerProps {
  bg_Color: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bg_Color};
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bg_Color={bgColor} />;
}

export default Circle;
