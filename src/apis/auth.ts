import type { AxiosPromise } from 'axios';
import { instance } from 'configs/axios';
import type { SignInResponse } from 'types/Auth';

export default {
  /**
   * 로그인 api
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
   * 회원가입 api
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
};
