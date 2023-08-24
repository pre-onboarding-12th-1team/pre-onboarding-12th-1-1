import { useState } from 'react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="h-screen flex flex-col justify-center items-center">
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="shadow-md outline-none rounded-md w-full h-10 p-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full h-10 bg-black  text-white rounded-md">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
