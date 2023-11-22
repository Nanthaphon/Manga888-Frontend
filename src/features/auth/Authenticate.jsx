import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../utils/local-storage";
export default function Authenticated({ children }) {
  const { authUser } = useAuth();
  if (!getAccessToken()) {
    return <Navigate to="/" />;
  }
  return children;
}
