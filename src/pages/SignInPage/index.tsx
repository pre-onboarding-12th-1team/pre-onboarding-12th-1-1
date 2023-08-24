import InputWithErrorMessage from 'components/common/InputWithErrorMessage';
import { useState } from 'react';
import { emailPolicy, passwordPolicy } from 'utils/validation';

const SignInPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
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
        <button
          className="w-full h-10 bg-black  text-white rounded-md"
          data-testid="signin-button"
          disabled={!isEmailValidated || !isPasswordValidated}
          type="submit"
        >
          로그인
        </button>
      </form>
    </main>
  );
};

export default SignInPage;
