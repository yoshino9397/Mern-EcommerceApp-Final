import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzY1MThhYjZhYjM3OGQ3ZmQ2ODZlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYwMTUyNSwiZXhwIjoxNjQ4ODYwNzI1fQ.Uc5SowHbvjFt0yl6txT2o28SiFyJTWT76mfozQcuH5I";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
