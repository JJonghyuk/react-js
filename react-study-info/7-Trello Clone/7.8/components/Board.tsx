import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px 20px;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(dropMagic) => (
        <Wrapper ref={dropMagic.innerRef} {...dropMagic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} index={index} toDo={toDo} />
          ))}
          {dropMagic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
