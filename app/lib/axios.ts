import axios from "axios";

console.log("import.meta.env.VITE_API_BASE_UR", import.meta.env);
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (response: any) => response,
  (error: any) => {
    console.error("Request error:", error);
    Promise.reject(error);
  }
);

export default axiosClient;
