import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authentificationKeys } from '../QueryKeys.ts';
import {Login} from '../Models/Login.ts';
import AuthentificationRequestsApi from '../EndPoints/Requests/AuthentificationRequestsApi.ts';
import {Register} from "../Models/Register.ts";

export const useRegisterAccount = () => {
  const client = useQueryClient();
  return useMutation((newAccount: Register) => AuthentificationRequestsApi.createAccount(newAccount), {
    onSuccess: () => {
      client.invalidateQueries(authentificationKeys.all);
    },
  });
};

export const useLoginAccount = () => {
  const client = useQueryClient();
  return useMutation((loginData: Login) => AuthentificationRequestsApi.loginAccount(loginData), {
    onSuccess: () => {
      client.invalidateQueries(authentificationKeys.all);
    },
  });
};

