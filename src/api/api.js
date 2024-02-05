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
  getFollower:(peopleCount=20,isFollow=true)=>
  instanse
  .get(`users?count=${peopleCount}&friend=${isFollow}`)
  .then(response=>response.data)
};
export const authAPI = {
  authMe: () => instanse.get(`auth/me`).then((response) => response.data),
  postlogin: (email, password, rememberMe = false, captcha=null) =>
    instanse
      .post("auth/login", { email, password, rememberMe, captcha })
      .then((response) => response.data),
  deleteLogin: () =>
    instanse.delete("auth/login").then((response) => response.data),
    getCaptcha:()=>
    instanse.get("security/get-captcha-url").then(response=>response.data)
};
export const profileAPI = {
  getProfile: (profileId) =>
    instanse.get(`profile/${profileId}`).then((response) => response.data),
  getStatus: (profileId) =>
    instanse.get(`profile/status/${profileId}`).then((res) => {
      return res.data;
    }),
  putStatus: (status) =>
    instanse
      .put(`profile/status`, { status })
      .then((response) => response.data),
  putPhoto: (image) => {
    return instanse
      .put(
        "profile/photo",
        { image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => response.data);
  },
  putProfile: (data)=>{
    return instanse.put('profile',{...data,lookingForAJobDescription:"I looking for a job, please, Universe help me..."}).then(response=>response.data)
  }
};
export const messageAPI={
  putDialog:(userId)=>
    instanse.put(`dialogs/${userId}`).then(response=>response.data),
  getDialog:()=>
    instanse.get('dialogs'),
  getMessagesFromUser:(userId)=>
    instanse.get(`dialogs/${userId}/messages`).then(response=>response.data),
  postMessageToUser:(userId,body)=>
    instanse.post(`dialogs/${userId}/messages`,{body})
}