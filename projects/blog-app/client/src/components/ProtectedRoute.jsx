import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → show requested page
  return children;
}
