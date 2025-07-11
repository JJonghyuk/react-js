import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(dropMagic02, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={dropMagic02.innerRef}
          {...dropMagic02.draggableProps}
          {...dropMagic02.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
