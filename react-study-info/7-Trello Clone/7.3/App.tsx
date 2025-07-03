import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(dropMagic) => (
            <ul ref={dropMagic.innerRef} {...dropMagic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(dropMagic02) => (
                  <li
                    ref={dropMagic02.innerRef}
                    {...dropMagic02.draggableProps}
                  >
                    <span {...dropMagic02.dragHandleProps}>✋</span>
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(dropMagic02) => (
                  <li
                    ref={dropMagic02.innerRef}
                    {...dropMagic02.draggableProps}
                  >
                    <span {...dropMagic02.dragHandleProps}>✋</span>
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
