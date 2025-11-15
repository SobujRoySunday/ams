import AdminDashboardHome from "@/components/admin/AdminDashboardHome";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/contexts/AuthContext";
import menuItems from "@/lib/MenuItem";
import type { UserRole } from "@/types/auth";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCurrentUserRole = (): UserRole => {
    if (user) return user.role as UserRole;
    else {
      navigate("/login");
      throw new Error("User not authenticated");
    }
  };

  const [currentUserRole] = useState<UserRole>(fetchCurrentUserRole());
  const [activePageId, setActivePageId] = useState<string>("ad_home");

  const CurrentPage = useMemo(() => {
    const item = menuItems.find((item) => item.id === activePageId);
    return item ? item.component : AdminDashboardHome;
  }, [activePageId]);

  const accessibleMenuItems = useMemo(() => {
    return menuItems.filter((item) =>
      item.requiredRoles.includes(currentUserRole)
    );
  }, [currentUserRole]);

  return (
    <div className="min-h-screen bg-background font-inter text-foreground flex flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-20 bg-card shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center border-b border-border">
          <div className="flex items-center space-x-4">
            <Icon
              path="M12 14l9-5-9-5-9 5 9 5z"
              className="w-8 h-8 text-primary"
            />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              System Admin Dashboard
            </span>
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">
              Role:{" "}
              <span className="font-semibold text-primary">
                {currentUserRole}
              </span>{" "}
              (Exclusive Access)
            </span>
          </div>

          <Button variant="default" className="text-sm">
            Logout
          </Button>
        </div>
      </header>

      {/* Main Layout (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 bg-card border-r border-border p-4 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <h3 className="text-xs font-semibold uppercase text-muted-foreground mt-2 mb-2">
              Admin Modules
            </h3>
            {accessibleMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePageId(item.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-colors duration-150
                  ${
                    activePageId === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
              >
                <Icon path={item.iconPath} className="w-5 h-5" />
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-foreground">
            {accessibleMenuItems.find((item) => item.id === activePageId)
              ?.title || "Admin Dashboard"}
          </h1>
          <div className="pb-8">
            <CurrentPage />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
