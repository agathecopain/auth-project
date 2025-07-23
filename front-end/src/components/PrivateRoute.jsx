import { useContext } from 'react';
import { AuthContext } from '../context/auth.context.jsx';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}