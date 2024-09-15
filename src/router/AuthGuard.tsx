import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  auth: boolean;
  children: ReactNode;
}

const AuthGuard = ({ auth, children }: AuthGuardProps) => {
  const isAuthenticated = sessionStorage.getItem('access');

  if (auth) {
    return isAuthenticated === null || isAuthenticated === 'false' ? (
      <Navigate to="/signin" />
    ) : (
      children
    );
  } else {
    return isAuthenticated === null || isAuthenticated === 'false' ? (
      children
    ) : (
      <Navigate to="/" />
    );
  }
};

export default AuthGuard;
