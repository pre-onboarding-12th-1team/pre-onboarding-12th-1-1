export const emailPolicy = (email = '') => ({
  isValidated: /@/.test(email),
  errorMessage: '이메일 형식은 @를 포함해야 합니다',
});

export const passwordPolicy = (password = '') => ({
  isValidated: password.length >= 8,
  errorMessage: '비밀번호는 8자리 이상이어야 합니다',
});
