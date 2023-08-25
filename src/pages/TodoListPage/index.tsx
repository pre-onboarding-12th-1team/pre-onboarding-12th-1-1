import todo from 'apis/todo';
import NewTodo from 'components/todo/NewTodo';
import TodoList from 'components/todo/TodoList';
import { TodosProvider } from 'contexts/todosContext';
import { useCallback, useEffect, useState } from 'react';
import type { Todos } from 'types/Todo';

const TodoListPage = () => {
  const [todos, setTodos] = useState<Todos>([]);

  const getTodos = useCallback(async () => {
    const { data } = await todo.getTodos();
    setTodos(data);
  }, []);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <TodosProvider value={{ todos, setTodos }}>
      <NewTodo />
      <TodoList />
    </TodosProvider>
  );
};

export default TodoListPage;
