import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  overflow: hidden;
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
    prop.isDraggingOver
      ? "#777"
      : prop.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(dropMagic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={dropMagic.innerRef}
            {...dropMagic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {dropMagic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
