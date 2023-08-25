import BlackButton from 'components/common/BlackButton';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="flex justify-center w-full h-screen">
    <div className="w-1/2 h-auto flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-10">
        <p className="text-black font-bold text-8xl">Welcome!</p>
        <p className="text-slate-500 font-bold text-xl leading-10">
          Todo Master에 방문해주셔서 감사합니다.
          <br />
          To-Do List로 더 생산적인 하루를 시작해보세요.
        </p>
        <Link to="/todo">
          <BlackButton>To-Do List 바로가기</BlackButton>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
