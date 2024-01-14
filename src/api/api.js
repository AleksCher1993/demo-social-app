import axios from "axios";
const instanse = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9da278a0-6ac4-4c5e-a71f-dd4432d96475",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
export const userAPI = {
  getUsers: (peopleCount = 5, numberPage = 1) =>
    instanse
      .get(`users?count=${peopleCount}&page=${numberPage}`)
      .then((response) => response.data),
  postFollowedUsers: (id) =>
    instanse.post(`follow/${id}`).then((response) => response.data),
  deleteFollowedUsers: (id) =>
    instanse.delete(`follow/${id}`).then((response) => response.data),
};
export const authAPI = {
  authMe: () => instanse.get(`auth/me`).then((response) => response.data),
  postlogin:(email,password,rememberMe=false)=>instanse.post('auth/login',{email,password,rememberMe}).then(response=>response.data),
  deleteLogin:()=>instanse.delete('auth/login').then(response=>response.data)
};
export const profileAPI = {
  getProfile: (profileId) =>
    instanse.get(`profile/${profileId}`).then((response) => response.data),
  getStatus: (profileId) =>
    instanse.get(`profile/status/${profileId}`).then((res) => {
      return res.data;
    }),
  putStatus: (status) =>
    instanse.put(`profile/status`,{status}).then(response=>response.data),
};
