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

// # 3.2
// interface로 문자, 넘버 등 들어갈 단위를 설정하여 실행 '전'에 알수 있다.
// ex)
// interface CircleProps {
//   bgColor: string;
// }

// function Circle({ bgColor }: CircleProps) {
//   return <Container bg_Color={bgColor} />;
// }

function Circle({ bgColor }: CircleProps) {
  return <Container bg_Color={bgColor} />;
}

export default Circle;
