// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ROLES } from "./lib/config";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";

// TODO: Placeholder Components (You'll create these)
const FacultyDashboard = () => <div>Faculty Dashboard</div>;
const StudentDashboard = () => <div>Student Dashboard</div>;

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<ProtectedRoute element={<LoginPage />} />}
      />

      {/* Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            requiredRole={ROLES.ADMIN}
            element={<AdminDashboard />}
          />
        }
      />
      <Route
        path="/faculty"
        element={
          <ProtectedRoute
            requiredRole={ROLES.FACULTY}
            element={<FacultyDashboard />}
          />
        }
      />
      <Route
        path="/student"
        element={
          <ProtectedRoute
            requiredRole={ROLES.STUDENT}
            element={<StudentDashboard />}
          />
        }
      />

      {/* Home page */}
      <Route path="/" element={<ProtectedRoute element={<LandingPage />} />} />

      {/* TODO */}
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
};

export default App;
