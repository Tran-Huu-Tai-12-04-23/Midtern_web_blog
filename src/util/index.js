import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost/api-web-blog/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});
