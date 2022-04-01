import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzY1MThhYjZhYjM3OGQ3ZmQ2ODZlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYwMTUyNSwiZXhwIjoxNjQ4ODYwNzI1fQ.Uc5SowHbvjFt0yl6txT2o28SiFyJTWT76mfozQcuH5I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
