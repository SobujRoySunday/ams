import { Button } from "../ui/button";
import { Card } from "../ui/card";

const CourseManagementPage: React.FC = () => (
  <Card className="min-h-[60vh]">
    <h2 className="text-3xl font-bold mb-4">Course & Class Management</h2>
    <p className="text-muted-foreground mb-6">
      Manage all academic subjects, class schedules, room assignments, and
      faculty allocations for the current academic year.
    </p>
    <div className="space-y-3">
      <Button variant="default">Add New Course</Button>
      <Button variant="secondary" className="ml-3">
        Allocate Faculty
      </Button>
    </div>
  </Card>
);
export default CourseManagementPage;
