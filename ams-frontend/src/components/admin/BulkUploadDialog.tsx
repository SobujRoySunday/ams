import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { UserRole } from "@/types/auth";
import UserService from "@/services/UserService";

const BulkUploadDialog = ({ onClose }: { onClose: () => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>("ROLE_STUDENT");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a CSV file to upload.");
      return;
    }

    try {
      if (selectedRole === "ROLE_ADMIN") await UserService.uploadAdmin(file);
      if (selectedRole === "ROLE_FACULTY")
        await UserService.uploadFaculty(file);
      if (selectedRole === "ROLE_STUDENT")
        await UserService.uploadStudent(file);
    } catch (error) {
      console.error(error);
      setError("Error creating new accounts");
    } finally {
      onClose();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Card className="min-w-[350px]">
      <CardHeader>
        <CardTitle>Upload Users via CSV</CardTitle>
        <CardDescription>
          Upload a CSV file to create new user accounts in bulk.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        {/* user details */}
        <div
          className={`grid gap-4 p-4 border-t border-b`}
        >
          <CardContent className="grid gap-4 min-w-[300px]">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Role</Label>
              <Select
                value={selectedRole}
                onValueChange={(value) => setSelectedRole(value as UserRole)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                    <SelectItem value="ROLE_ADMIN">ADMIN</SelectItem>
                    <SelectItem value="ROLE_FACULTY">FACULTY</SelectItem>
                    <SelectItem value="ROLE_STUDENT">STUDENT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file">CSV File</Label>
              <Input
                id="file"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
        </div>

        <CardFooter className="flex gap-2 mt-4">
          <Button
            className="cursor-pointer"
            variant={"outline"}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button type="submit" className="cursor-pointer">
            Create
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BulkUploadDialog;
