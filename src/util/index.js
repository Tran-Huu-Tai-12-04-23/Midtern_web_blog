import axios from "axios";
import { SHA256 } from "crypto-js";
import { formatRelative } from "date-fns/esm";

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

export function formatDate(seconds) {
  let formattedDate = "";

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}
