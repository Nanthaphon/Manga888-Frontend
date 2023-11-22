import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
export default function RedirectAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser) {
    return <Navigate to="/home" />;
  }
  return children;
}
