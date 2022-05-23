/* eslint-disable import/no-anonymous-default-export */
import MainStore from './MainStore';
import LoginStore from './LoginStore';
export default {
    mainStore: new MainStore(),
    loginStore: new LoginStore(),
};