import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggiedIn, children }) {
  if (!isLoggiedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

export default ProtectedRoute;
