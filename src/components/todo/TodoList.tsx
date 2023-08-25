import TodoItem from 'components/todo/TodoItem';
import { TodosContext } from 'contexts/todosContext';
import { useContext } from 'react';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <main className="h-screen pt-3 flex flex-col items-center gap-2">
      {todos?.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </main>
  );
};

export default TodoList;
