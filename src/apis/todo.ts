import { AxiosPromise } from 'axios';
import { instance } from 'configs/axios';
import type { SignInResponse } from 'types/Auth';
import type { TodoResponse, TodosReponse } from 'types/Todo';

export default {
  /**
   * 회원가입 api
   * @param email 사용자 이메일
   * @param password 사용자 패스워드
   */
  signin(email: string, password: string): AxiosPromise<SignInResponse> {
    return instance({
      url: '/auth/signin',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
  /**
   * 로그인 api
   * @param email 사용자 이메일
   * @param password 사용자 패스워드
   */
  signup(email: string, password: string): AxiosPromise {
    return instance({
      url: '/auth/signup',
      method: 'post',
      data: {
        email,
        password,
      },
    });
  },
  /**
   * 투두 생성 api
   * @param todo 투두
   */
  createTodo(todo: string): AxiosPromise<TodoResponse> {
    return instance({
      url: '/todos',
      method: 'post',
      data: {
        todo,
      },
    });
  },
  /**
   * 투두 조회 api
   */
  getTodos(): AxiosPromise<TodosReponse> {
    return instance({
      url: '/todos',
      method: 'get',
    });
  },
  /**
   * 투두 업데이트 api
   * @param id 투두 id
   */
  updateTodo(id: number, todo: string, isCompleted: boolean): AxiosPromise<TodoResponse> {
    return instance({
      url: `/todos/${id}`,
      method: 'put',
      data: { todo, isCompleted },
    });
  },
  /**
   * 투두 삭제 api
   * @param id 투두 id
   */
  deleteTodo(id: number) {
    return instance({
      url: `/todos/${id}`,
      method: 'delete',
    });
  },
};
