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

const CreateNewUserDialog = ({ onClose }: { onClose: () => void }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const [faculty, setFaculty] = useState({
    qualification: "",
    department: "",
  });
  const [student, setStudent] = useState({
    rollNumber: "",
    course: "",
    semester: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>("ROLE_STUDENT");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (selectedRole === "ROLE_ADMIN") await UserService.createAdmin(user);
      if (selectedRole === "ROLE_FACULTY")
        await UserService.createFaculty({ ...user, ...faculty });
      if (selectedRole === "ROLE_STUDENT")
        await UserService.createStudent({ ...user, ...student });
    } catch (error) {
      console.error(error);
      setError("Error creating new account");
    } finally {
      onClose();
    }
  };

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleChangeFaculty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFaculty((prevFaculty) => ({ ...prevFaculty, [name]: value }));
  };

  const handleChangeStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  return (
    <Card className="min-w-[350px]">
      <CardHeader>
        <CardTitle>Create new user</CardTitle>
        <CardDescription>
          Enter your new user data to create new account
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        {/* user details */}
        <div
          className={`${selectedRole === "ROLE_FACULTY" || selectedRole === "ROLE_STUDENT"
            ? "grid grid-cols-2 items-start"
            : ""
            }`}
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
              <Label htmlFor="email">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                name="fullName"
                value={user.fullName}
                onChange={handleChangeUser}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@somewhere.com"
                name="email"
                value={user.email}
                onChange={handleChangeUser}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChangeUser}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
          {selectedRole === "ROLE_FACULTY" && (
            // faculty details
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Qualification</Label>
                <Input
                  id="qualification"
                  type="text"
                  placeholder="M.Tech in Computer Science"
                  name="qualification"
                  value={faculty.qualification}
                  onChange={handleChangeFaculty}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Department</Label>
                <Input
                  id="department"
                  type="text"
                  placeholder="Computer Science"
                  name="department"
                  value={faculty.department}
                  onChange={handleChangeFaculty}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </CardContent>
          )}
          {selectedRole === "ROLE_STUDENT" && (
            // student details
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Roll Number</Label>
                <Input
                  id="rollNumber"
                  type="text"
                  placeholder=""
                  name="rollNumber"
                  value={student.rollNumber}
                  onChange={handleChangeStudent}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Course</Label>
                <Input
                  id="course"
                  type="text"
                  placeholder=""
                  name="course"
                  value={student.course}
                  onChange={handleChangeStudent}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Semester</Label>
                <Input
                  id="semester"
                  type="text"
                  placeholder=""
                  name="semester"
                  value={student.semester}
                  onChange={handleChangeStudent}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </CardContent>
          )}
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

export default CreateNewUserDialog;
