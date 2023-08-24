import Auth from 'apis/auth';
import AuthButton from 'components/common/AuthButton';
import InputWithErrorMessage from 'components/common/InputWithErrorMessage';
import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailPolicy, passwordPolicy } from 'utils/validation';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isValidated: isEmailValidated, errorMessage: emailError } = emailPolicy(email);
  const { isValidated: isPasswordValidated, errorMessage: passwordError } =
    passwordPolicy(password);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    Auth.signup(email, password).then((response) => {
      if (response && response.status === 201) {
        navigate('/signin');
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
          data-testid="signup-button"
          disabled={!isEmailValidated || !isPasswordValidated}
        >
          회원가입
        </AuthButton>
      </form>
    </main>
  );
};

export default SignUpPage;
