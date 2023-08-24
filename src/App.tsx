import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import TodoListPage from 'pages/TodoListPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import ProtectedRoute from 'routes/ProtectedRoute';
import PublicRoute from 'routes/PublicRoute';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<HomePage />} path="/" />
        <Route element={<PublicRoute />}>
          <Route element={<SignInPage />} path="signin" />
          <Route element={<SignUpPage />} path="signup" />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<TodoListPage />} path="todo" />
        </Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
