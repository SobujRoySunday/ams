import AcademicSettingsPage from "@/components/admin/AcademicSettingsPage";
import AdminDashboardHome from "@/components/admin/AdminDashboardHome";
import AttendanceConfigPage from "@/components/admin/AttendanceConfigPage";
import CourseManagementPage from "@/components/admin/CourseManagementPage";
import SystemLogsPage from "@/components/admin/SystemLogsPage";
import UserManagementPage from "@/components/admin/UserManagementPage";
import type { UserRole } from "@/types/auth";

interface MenuItem {
  id: string;
  title: string;
  iconPath: string;
  requiredRoles: UserRole[];
  component: React.FC;
}

const menuItems: MenuItem[] = [
  {
    id: "ad_home",
    title: "Admin Dashboard",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6m-6 0h-2",
    requiredRoles: ["ROLE_ADMIN"],
    component: AdminDashboardHome,
  },
  {
    id: "user_manage",
    title: "User Management",
    iconPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    requiredRoles: ["ROLE_ADMIN"],
    component: UserManagementPage,
  },
  {
    id: "course_manage",
    title: "Course Management",
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    requiredRoles: ["ROLE_ADMIN"],
    component: CourseManagementPage,
  },
  {
    id: "academic_settings",
    title: "Academic Settings",
    iconPath:
      "M10.325 4.317c.426-1.748 2.825-1.748 3.251 0 .28.14.52.327.732.536l.247.247a1.855 1.855 0 002.534 0l.247-.247c.212-.209.452-.396.732-.536 1.748-.426 1.748 2.825 0 3.251-.14.28-.327.52-.536.732l-.247.247a1.855 1.855 0 000 2.534l.247.247c.209.212.396.452.536.732 1.748.426 1.748 2.825 0 3.251-.28.14-.52.327-.536.732l-.247.247a1.855 1.855 0 00-2.534 0l-.247-.247a1.855 1.855 0 00-.732-.536c-1.748-.426-2.825-1.748 0-3.251.14-.28.327-.52.536-.732l.247-.247a1.855 1.855 0 000-2.534l-.247-.247a1.855 1.855 0 00-.732-.536z",
    requiredRoles: ["ROLE_ADMIN"],
    component: AcademicSettingsPage,
  },
  {
    id: "att_config",
    title: "Attendance Configuration",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    requiredRoles: ["ROLE_ADMIN"],
    component: AttendanceConfigPage,
  },
  {
    id: "logs",
    title: "System Logs & Audit",
    iconPath:
      "M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
    requiredRoles: ["ROLE_ADMIN"],
    component: SystemLogsPage,
  },
];

export default menuItems;
