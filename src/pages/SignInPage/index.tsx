import Auth from 'apis/auth';
import AuthButton from 'components/common/AuthButton';
import InputWithErrorMessage from 'components/common/InputWithErrorMessage';
import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'utils/localStorage';
import { emailPolicy, passwordPolicy } from 'utils/validation';

const SignInPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { isValidated: isEmailValidated, errorMessage: emailError } = emailPolicy(email);
  const { isValidated: isPasswordValidated, errorMessage: passwordError } =
    passwordPolicy(password);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    await Auth.signin(email, password).then((response) => {
      if (response && response.status === 200) {
        setToken(response.data.access_token);
        navigate('/todo');
      }
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <InputWithErrorMessage
          data-testid="password-input"
          errorMessage={passwordError}
          isValidated={isPasswordValidated}
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
      </form>
    </main>
  );
};

export default SignInPage;
