import { TodosContext } from 'contexts/todosContext';
import { useContext } from 'react';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <main className="h-screen pt-3 flex flex-col items-center gap-2">
      {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </main>
  );
};

export default TodoList;
