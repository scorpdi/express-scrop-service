let axios = require('axios')

const service = axios.create({
  timeout: 6000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
)

service.interceptors.response.use(response => {
  return response.data
},error => {
  return Promise.reject(error);
})

module.exports = service