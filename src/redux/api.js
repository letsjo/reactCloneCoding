import axios from "axios";

const api = axios.create({
  baseURL: "http://3.34.129.164:8080",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config,"requst")
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error,"requst error")
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
  
    console.log(response,"response");

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error,"response error")
    return Promise.reject(error);
  });

  export default api