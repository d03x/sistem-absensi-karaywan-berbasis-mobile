import { HOST } from "@/config/api";
import axios from "axios";

const apiRequest = axios.create({
  baseURL: HOST,
});
apiRequest.interceptors.request.use((config) => config);
export default apiRequest;
