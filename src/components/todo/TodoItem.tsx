import todoApi from 'apis/todo';
import { TodosContext } from 'contexts/todosContext';
import type { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { useContext, useState } from 'react';
import { Todo } from 'types/Todo';

const TodoItem: FC<Todo> = ({ id, isCompleted = false, todo }) => {
  const { setTodos } = useContext(TodosContext);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [inputValue, setInputValue] = useState(todo);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCheck: ChangeEventHandler<HTMLInputElement> = async () => {
    todoApi.updateTodo(id, todo, !isChecked).then(() => setIsChecked((prev) => !prev));
  };

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    todoApi.updateTodo(id, inputValue, isChecked).then(() => {
      setIsEditMode(false);
    });
  };

  const handleCancel: MouseEventHandler = () => {
    handleEditModeOff();
    setInputValue(todo);
  };

  const handleDelete: MouseEventHandler = async () => {
    todoApi
      .deleteTodo(id)
      .then(() => setTodos((prev) => prev?.filter((todo) => todo.id !== id)));
  };

  const handleEditModeOn = () => setIsEditMode(true);

  const handleEditModeOff = () => setIsEditMode(false);

  let field;
  let buttonContainer;

  switch (isEditMode) {
    case true:
      field = (
        <input
          className="ml-2 w-400 px-1 rounded-md"
          data-testid="modify-input"
          type="text"
          value={inputValue}
          onChange={handleChangeText}
        />
      );

      buttonContainer = (
        <div className="flex  gap-1">
          <button
            className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white"
            data-testid="submit-button"
            onClick={handleSubmit}
          >
            제출
          </button>
          <button
            className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white"
            data-testid="cancel-button"
            onClick={handleCancel}
          >
            취소
          </button>
        </div>
      );
      break;

    case false:
      field = <span className="ml-2">{inputValue}</span>;

      buttonContainer = (
        <div className="flex  gap-1">
          <button
            className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white"
            data-testid="modify-button"
            onClick={handleEditModeOn}
          >
            수정
          </button>
          <button
            className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white"
            data-testid="delete-button"
            onClick={handleDelete}
          >
            삭제
          </button>
        </div>
      );
  }

  return (
    <li className="px-4 py-1 w-700 h-13 bg-gray-100 shadow-md rounded-md flex justify-between items-center">
      <label>
        <input checked={isChecked} type="checkbox" onChange={handleCheck} />
        {field}
      </label>
      {buttonContainer}
    </li>
  );
};

export default TodoItem;
