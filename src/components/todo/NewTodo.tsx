import todo from 'apis/todo';
import { TodosContext } from 'contexts/todosContext';
import type { ChangeEventHandler, FormEventHandler } from 'react';
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

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <form className="pt-16  flex flex-col items-center gap-2" onSubmit={handleSubmit}>
      <input
        className="w-635 h-10 rounded-md bg-white shadow-md outline-none px-3"
        value={inputValue}
        onChange={handleChangeText}
      />
      <button className="bg-black h-10 w-16 p-1 rounded-lg ml-1 text-white" type="submit">
        추가
      </button>
    </form>
  );
};

export default NewTodo;
