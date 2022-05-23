import { observable, action } from "mobx";
import { login } from '../api';
export default class LoginStore {
  /**登录标题 */
  @observable loginTitle = "请登录";
  /**登录 */
  @action
  login = async (params:any) => {
    try {
      const response = await login(params);
      console.log('dada', response);
    } catch (error) {
      console.error(error + '登陆失败');
    }
  }
}
