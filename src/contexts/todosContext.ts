import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { Todos } from 'types/Todo';

interface TodosContext {
  todos: Todos;
  setTodos: Dispatch<SetStateAction<Todos>>;
}

export const TodosContext = createContext<TodosContext>({
  todos: [],
  setTodos: () => null,
});

export const TodosProvider = TodosContext.Provider;
