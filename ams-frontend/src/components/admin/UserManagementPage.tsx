import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import type { User } from "@/types/auth";
import { useEffect, useState } from "react";
import UserService from "@/services/UserService";
import CreateNewUserDialog from "./CreateNewUserDialog";
import BulkUploadDialog from "./BulkUploadDialog";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserDialogOpen, setNewUserDialogOpen] = useState(false);
  const [bulkUploadDialogOpen, setBulkUploadDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await UserService.getAllUsers();
      setUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  return (
    <Card className="min-h-[60vh] p-6">
      {newUserDialogOpen && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-black/80 flex
        justify-center items-center z-50"
        >
          <CreateNewUserDialog onClose={() => setNewUserDialogOpen(false)} />
        </div>
      )}

      {bulkUploadDialogOpen && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-black/80 flex
        justify-center items-center z-50"
        >
          <BulkUploadDialog onClose={() => setBulkUploadDialogOpen(false)} />
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-4">User Management</h2>
        <div className="flex space-x-4">
          <Button
            variant="default"
            onClick={() => setNewUserDialogOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            Create New User
          </Button>
          <Button
            variant="outline"
            onClick={() => setBulkUploadDialogOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            Upload CSV
          </Button>
        </div>
      </div>
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[100px]">Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell className="font-medium">{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="">
                  {user.role === "ROLE_ADMIN"
                    ? "ADMIN"
                    : user.role === "ROLE_FACULTY"
                      ? "FACULTY"
                      : "STUDENT"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default UserManagementPage;
