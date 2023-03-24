import axios from "axios";

export const api = axios.create({
  baseURL: "https://we-movies-backend.vercel.app"
});
