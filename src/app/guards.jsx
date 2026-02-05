import { Navigate } from "react-router-dom";
import { authStorage } from "../services/auth.storage";

export function ProtectedRoute({ children }) {
  return authStorage.isAuthed() ? children : <Navigate to="/login" replace />;
}

export function AuthOnlyRoute({ children }) {
  return authStorage.isAuthed() ? (
    <Navigate to="/dashboard" replace />
  ) : (
    children
  );
}
