import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'utils/localStorage';

const PublicRoute = () => {
  const token = getToken();

  if (token) return <Navigate to="/todo" />;

  return <Outlet />;
};

export default PublicRoute;
