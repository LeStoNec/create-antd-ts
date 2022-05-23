import axios from 'axios';
/**登录 */
export const login = (): Promise<any> => {
    return axios.get('/slardar/sdk_setting?bid=juejin_web').then(res => res.data);
}