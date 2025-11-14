import axios from "axios";

const AUTH_URL = "/auth";

const AuthService = {
  /**
   * Sends login credentials to the backend.
   * The backend sets the JWT as an HTTP-only cookie in the response header.
   */
  async login(email: string, password: string): Promise<void> {
    try {
      await axios.post(`${AUTH_URL}/login`, {
        email,
        password,
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  /**
   * Sends a logout request to the backend.
   * The backend must clear the cookie upon successful logout.
   */
  async logout(): Promise<void> {
    try {
      await axios.post(`${AUTH_URL}/logout`);
    } catch (error) {
      console.warn(
        "Logout failed on server, clearing client state anyway.",
        error
      );
    }
  },
};

export default AuthService;
