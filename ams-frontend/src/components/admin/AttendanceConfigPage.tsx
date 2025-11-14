import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Icon from "../ui/icon";

const AttendanceConfigPage: React.FC = () => (
  <Card className="min-h-[60vh]">
    <h2 className="text-3xl font-bold mb-4">Attendance Rule Configuration</h2>
    <p className="text-muted-foreground mb-6">
      Set global system rules for attendance, including the **default 24-hour
      editing window** (Feature 6) and threshold for auto-generated alerts.
    </p>
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <p className="text-sm font-medium text-yellow-800">
        <Icon
          path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          className="w-5 h-5 inline mr-2 align-top"
        />
        Editing Window (Hours):
        <input
          type="number"
          defaultValue={24}
          className="w-16 ml-2 p-1 border rounded-md"
        />
      </p>
    </div>
    <Button variant="default" className="mt-4">
      Save Rules
    </Button>
  </Card>
);

export default AttendanceConfigPage;
