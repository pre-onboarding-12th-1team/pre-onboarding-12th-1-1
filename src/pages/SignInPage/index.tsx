import { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-2 w-72"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="shadow-md outline-none rounded-md w-full h-10 p-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="shadow-md outline-none rounded-md w-full h-10 p-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button className="w-full h-10 bg-black  text-white rounded-md" type="submit">
          로그인
        </button>
      </form>
    </main>
  );
};

export default SignInPage;
