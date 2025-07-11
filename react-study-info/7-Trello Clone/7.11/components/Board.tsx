import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Area = styled.div<IAreaProps>`
  flex-grow: 1;
  background: ${(prop) =>
    prop.isDraggingOver ? "pink" : prop.isDraggingFromThis ? "red" : "skyblue"};
  transition: background-color 0.3s ease-in-out;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(dropMagic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={dropMagic.innerRef}
            {...dropMagic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} index={index} toDo={toDo} />
            ))}
            {dropMagic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
