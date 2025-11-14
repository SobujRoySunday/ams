import type { User } from "@/types/auth";
import api from "../lib/api";

const UserService = {
  /**
   * Fetches the current logged-in user's details from the server.
   * @returns A promise that resolves to the user details.
   */
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await api.get("/users/me");
      const user: User = {
        fullName: response.data.fullName,
        email: response.data.email,
        role: response.data.roles[0].name,
      };
      return user;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  },

  /**
   * Fetches all users from the server.
   * @returns A promise that resolves to an array of user details.
   */
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await api.get("/users");
      return response.data.map((userData: any) => ({
        fullName: userData.fullName,
        email: userData.email,
        role: userData.roles[0].name,
      }));
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  },

  createAdmin: async (adminData: {
    fullName: string;
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      await api.post("/users/createAdmin", adminData);
    } catch (error) {
      console.error("Error creating admin account:", error);
      throw error;
    }
  },

  createFaculty: async (facultyData: {
    fullName: string;
    email: string;
    password: string;
    qualification: string;
    department: string;
  }): Promise<void> => {
    try {
      await api.post("/users/createFaculty", facultyData);
    } catch (error) {
      console.error("Error creating faculty account:", error);
      throw error;
    }
  },

  createStudent: async (studentData: {
    fullName: string;
    email: string;
    password: string;
    course: string;
    semester: string;
    rollNumber: string;
  }): Promise<void> => {
    try {
      await api.post("/users/createStudent", studentData);
    } catch (error) {
      console.error("Error creating student account:", error);
      throw error;
    }
  },
};

export default UserService;
