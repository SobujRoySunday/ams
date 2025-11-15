import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Icon from "../ui/icon";

const SystemLogsPage: React.FC = () => (
  <Card className="min-h-[60vh]">
    <h2 className="text-3xl font-bold mb-4">System Logs & Audit Trail</h2>
    <p className="text-muted-foreground mb-6">
      View the complete system audit trail, including user logins, data changes
      (e.g., mark modifications), and error reports for system monitoring.
    </p>
    <Button variant="outline">
      <Icon path="M4 4h16v16H4V4z" className="mr-2" /> Export Log History
    </Button>
    <div className="h-40 bg-gray-800 text-green-400 p-4 font-mono text-xs overflow-auto mt-4 rounded-lg">
      [10:01:23] INFO: Admin 'A1001' logged in from IP 192.168.1.5
      <br />
      [10:05:45] WARN: Faculty 'F201' attempted attendance edit outside 24h
      window (Blocked)
      <br />
      [10:12:01] INFO: New user 'S3005' created by Admin 'A1001'
    </div>
  </Card>
);

export default SystemLogsPage;
