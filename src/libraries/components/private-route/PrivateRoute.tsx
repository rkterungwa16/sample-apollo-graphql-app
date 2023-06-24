import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
