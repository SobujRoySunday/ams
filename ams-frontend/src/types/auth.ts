/**
 * Defines the role names used in the application.
 */
export type UserRole = "ROLE_ADMIN" | "ROLE_FACULTY" | "ROLE_STUDENT";

/**
 * Defines the structure of the user object responsible for authentication.
 */
export interface User {
  email: string;
  fullName: string;
  role: UserRole;
}
