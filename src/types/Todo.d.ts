export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type Todos = Todo[];

export type TodoResponse = Todo;

export type TodosReponse = Todo[];
