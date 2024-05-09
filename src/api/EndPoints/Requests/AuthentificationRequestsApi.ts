import axiosInstance from '../../Axios.ts';
import {UserAuthentificated} from '../../Models/UserAuthentificated.ts';
import { Login } from '../../Models/Login.ts';
import CONFIGURATION from '../Configuration.ts';
import {Register} from "../../Models/Register.ts";

class AuthentificationRequestsApi {
  static async registerAccount(newAccount: Register) {
    return axiosInstance.post(`${CONFIGURATION.API_ENDPOINT}/authentification/register`, newAccount);
  }

  static async getUserData() {
    return axiosInstance.get<UserAuthentificated>(`${CONFIGURATION.API_ENDPOINT}/participant/user`);
  }

  static async loginAccount(loginData: Login) {
    return axiosInstance.post(`${CONFIGURATION.API_ENDPOINT}/authentification/login`, loginData);
  }
}

export default AuthentificationRequestsApi;
