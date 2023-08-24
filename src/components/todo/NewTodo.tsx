import todo from 'apis/todo';
import { TodosContext } from 'contexts/todosContext';
import type { ChangeEvent, FormEventHandler } from 'react';
import { useContext, useState } from 'react';

const NewTodo = () => {
  const { setTodos } = useContext(TodosContext);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    todo.createTodo(inputValue).then((response) =>
      setTodos((prev) => {
        if (!prev) return [];
        return [...prev, response.data];
      }),
    );
    setInputValue('');
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="pt-16  flex flex-col items-center gap-2">
      <form onSubmit={handleSubmit}>
        <input
          className="w-635 h-10 rounded-md bg-white shadow-md outline-none px-3"
          value={inputValue}
          onChange={handleChangeText}
        />
        <button
          className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white"
          type="submit"
        >
          추가
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
