import Auth from 'apis/auth';
import AuthButton from 'components/common/AuthButton';
import InputWithErrorMessage from 'components/common/InputWithErrorMessage';
import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'utils/localStorage';
import { emailPolicy, passwordPolicy } from 'utils/validation';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState('');
  const { isValidated: isEmailValidated, errorMessage: emailError } = emailPolicy(email);
  const { isValidated: isPasswordValidated, errorMessage: passwordError } =
    passwordPolicy(password);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    Auth.signin(email, password)
      .then((response) => {
        if (response && response.status === 200) {
          setToken(response.data.access_token);
          navigate('/todo');
        }
      })
      .catch(() => {
        setError('이메일 혹은 비밀번호가 잘못됐습니다.');
      });
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-2 w-72"
        onSubmit={handleSubmit}
      >
        <InputWithErrorMessage
          data-testid="email-input"
          errorMessage={emailError}
          isValidated={isEmailValidated}
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <InputWithErrorMessage
          data-testid="password-input"
          errorMessage={passwordError}
          isValidated={isPasswordValidated}
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <AuthButton
          data-testid="signin-button"
          disabled={!isEmailValidated || !isPasswordValidated}
        >
          로그인
        </AuthButton>
        {error}
      </form>
    </main>
  );
};

export default SignInPage;
