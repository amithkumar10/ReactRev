import { Navigate, Outlet } from "react-router-dom";
import  useAuth  from "../context/useAuth";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loaded } = useAuth();

  if (!loaded) {
  return null;
}

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorised" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
