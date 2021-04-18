import axios from "axios";

const _axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
});

// 요청 인터셉터 추가
_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
_axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error);
    alert("에러가 발생했습니다.");
    return Promise.reject(error);
  }
);

export default _axios;
