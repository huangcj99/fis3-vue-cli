import axios from '/node_modules/axios/dist/axios.js';
import Promise from 'promise'
import sLoading from '../components/loading/index.js';

let loading = null;

function showLoading() {
  if (loading) {
    return;
  }

  loading = sLoading({
    title: '加载中...'
  });
}

function closeLoading() {
  if (loading) {
    loading.hide();
    loading = null;
  }
}

function createAxios() {
  const instance = axios.create({
    timeout: 1000 * 10
  });

  // // 从 storage 拿取 token
  // const token = sToken.get();
  // if (token) {
  //   instance.defaults.headers.common["Authorization"] = token;
  // }

  // Add a request interceptor
  instance.interceptors.request.use((config) => {
    if (config.loading !== false) {
      showLoading();
    }
    return config;
  }, (error) => {
    // Do something with request error
    if (error.config.loading !== false) {
      closeLoading();
    }
    return Promise.reject(error);
  });

  // Add a response interceptor
  instance.interceptors.response.use((response) => {
    if (response.config.loading !== false) {
      closeLoading();
    }

    return response.data;
  }, (error) => {
    // Do something with response error
    if (error.config.loading !== false) {
      closeLoading();
    }

    //404报错则调回登录界面
    if (error && error.response && error.response.status === 404) {

    }

    //302报错则调回登录界面
    if (error && error.response && error.response.status === 302) {

    }

    // // 默认 error 处理
    // if (error.config.showDefaultError !== false) {
    //   const message = (error && error.response && error.response.data && error.response.data.msg) || error.msg;
    //   Toast(message)
    // }

    return Promise.reject(error);
  });

  return instance;
}

export default createAxios();
