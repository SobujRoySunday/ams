import { Button } from "../ui/button";
import { Card } from "../ui/card";

const AcademicSettingsPage: React.FC = () => (
  <Card className="min-h-[60vh]">
    <h2 className="text-3xl font-bold mb-4">Global Academic Settings</h2>
    <p className="text-muted-foreground mb-6">
      Set system-wide configurations including **academic terms, grading scales
      (A-F), default holiday calendars**, and notification thresholds.
    </p>
    <div className="space-y-3">
      <div className="flex justify-between p-3 bg-white rounded-md border">
        <span>Current Academic Term: **Fall 2025**</span>
        <Button variant="outline" className="h-8">
          Change
        </Button>
      </div>
      <div className="flex justify-between p-3 bg-white rounded-md border">
        <span>Grading Scale: **A+ to F**</span>
        <Button variant="outline" className="h-8">
          Edit Scale
        </Button>
      </div>
    </div>
  </Card>
);

export default AcademicSettingsPage;
