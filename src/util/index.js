import axios from "axios";
import { SHA256 } from "crypto-js";

export const api = axios.create({
  baseURL: "http://localhost/api-web-blog/",
  timeout: 10000,
  headers: {
    "Content-Type": "*",
    Accept: "application/json",
  },
});

export const hashPass = (password) => {
  return SHA256(password).toString();
};
export const verifyPass = (password, hashedPassword) => {
  return SHA256(password).toString() === hashedPassword;
};
