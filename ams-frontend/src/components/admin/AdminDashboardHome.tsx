import { Card } from "../ui/card";

const AdminDashboardHome: React.FC = () => (
  <Card className="min-h-[60vh]">
    <h2 className="text-3xl font-bold mb-4 text-primary">
      System Administration Overview
    </h2>
    <p className="text-muted-foreground mb-6">
      Welcome, Administrator! This dashboard provides **system-level control**
      over users, courses, and global academic settings.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 bg-purple-100 border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800">
          Total Users: 3,540
        </h3>
        <p className="text-sm text-purple-700">75 Faculty, 3,465 Students</p>
      </Card>
      <Card className="p-4 bg-green-100 border-green-200">
        <h3 className="text-xl font-semibold text-green-800">12</h3>
        <p className="text-sm text-green-700">Active Courses/Term</p>
      </Card>
      <Card className="p-4 bg-red-100 border-red-200">
        <h3 className="text-xl font-semibold text-red-800">3</h3>
        <p className="text-sm text-red-700">System Errors in Last 24h</p>
      </Card>
    </div>
  </Card>
);

export default AdminDashboardHome;
