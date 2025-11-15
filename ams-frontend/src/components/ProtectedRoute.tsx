import React, { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { UserRole } from "../types/auth";

interface ProtectedRouteProps {
  requiredRole?: UserRole;
  element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredRole,
  element,
}) => {
  const { user } = useAuth();

  if (!user) {
    if (requiredRole) return <Navigate to="/login" replace />;
  } else {
    if (!requiredRole || user.role !== requiredRole)
      return (
        <Navigate to={`/${user.role.split("_")[1].toLowerCase()}`} replace />
      );
  }

  return element;
};

export default ProtectedRoute;
