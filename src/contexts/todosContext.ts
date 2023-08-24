import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { Todos } from 'types/Todo';

interface ITodosContext {
  todos: Todos | undefined;
  setTodos: Dispatch<SetStateAction<Todos | undefined>>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  setTodos: () => null,
});

export const TodosProvider = TodosContext.Provider;
