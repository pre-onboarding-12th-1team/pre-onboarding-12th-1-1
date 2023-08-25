import Header from 'components/common/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
