// src/services/api.ts
import axios from "axios";

const BASE_API_URL = "/api";

const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
