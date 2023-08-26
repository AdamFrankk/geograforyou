import axios from "axios"
import { API_URL } from "@/shared/config"

export const apiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "69420"
  }
})

apiInstance.defaults.headers.common["Content-Type"] = "application/json"
