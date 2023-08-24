import AuthButton from 'components/common/AuthButton';
import InputWithErrorMessage from 'components/common/InputWithErrorMessage';
import { useState } from 'react';
import { emailPolicy, passwordPolicy } from 'utils/validation';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isValidated: isEmailValidated, errorMessage: emailError } = emailPolicy(email);
  const { isValidated: isPasswordValidated, errorMessage: passwordError } =
    passwordPolicy(password);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-2 w-72"
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
