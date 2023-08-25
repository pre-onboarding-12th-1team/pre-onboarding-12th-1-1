import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { deleteToken, getToken } from 'utils/localStorage';

import BalckButton from './BalckButton';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(!!getToken());
  const handleLogOut = () => {
    setIsSignedIn(false);
    deleteToken();
  };

  return (
    <div className="fixed bg-white/70 px-10 flex justify-between items-center w-full h-14 left-0">
      <Link className="text-black font-bold  text-2xl flex items-center  gap-1" to="/">
        Todo Master
      </Link>
      <div className="flex gap-10">
        <NavLink className="text-slate-500 relative flex items-center" to="/">
          Home
        </NavLink>
        <NavLink className="text-slate-500 relative  flex items-center" to="/todo">
          Todo List
        </NavLink>
      </div>
      <p />

      {isSignedIn && isSignedIn ? (
        <BalckButton text="Log Out" onClickEvent={handleLogOut} />
      ) : (
        <div className="flex gap-3">
          <Link to="/signin">
            <BalckButton text="Sign In" />
          </Link>
          <Link to="/signup">
            <BalckButton text="Sign Up" />
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
