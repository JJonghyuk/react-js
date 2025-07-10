import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  console.log(toDo);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(dropMagic02) => (
        <Card
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
