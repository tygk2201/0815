import axios from 'axios'
import { Message } from 'element-ui';
const baseUrl = process.env.NODE_ENV === 'production' ? '/api' : './';

// 超时时间
axios.defaults.timeout = 5000;
// api 的 base_url
axios.defaults.baseURL=baseUrl;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
          }
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
            //或者
            config.params = {'token':token}
        }
        
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if(response.data.status ==2){
            router.push({
              path:"/login",
              querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
          }
        return response;
    },
    error => {
        return Promise.reject(err);   // 返回接口返回的错误信息
    }
);
const request={
    get(url,data){
        return new Promise((resolve, reject) => {
			axios.get(url, data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((response) =>{
				resolve(response.data);
			}).catch((error)=> {
				reject(error);
			});
		})

    },
    post(url,data){
        return new Promise((resolve, reject) => {
			axios.post(url, data).then((response) =>{
				resolve(response.data);
			}).catch((error)=> {
				reject(error);
			});
		})

    }

}

export default request;