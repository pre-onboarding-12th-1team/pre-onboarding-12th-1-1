import BlackButton from 'components/common/BlackButton';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { deleteToken, getToken } from 'utils/localStorage';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSignedIn(!!getToken());
  }, [location]);

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
        <BlackButton onClick={handleLogOut}>Log Out</BlackButton>
      ) : (
        <div className="flex gap-3">
          <Link to="/signin">
            <BlackButton>Sign In</BlackButton>
          </Link>
          <Link to="/signup">
            <BlackButton>Sign Up</BlackButton>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
