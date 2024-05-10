import {useState, ChangeEvent, FormEvent} from 'react';
import { useAuth } from '../../providers/AuthProvider.tsx';
import { useNavigate } from 'react-router-dom';
import { useLoginAccount } from '../../api/Queries/AuthentificationQueries.ts';
import { AxiosError } from 'axios';

export const useLoginLogic = () => {
    const { setJwtToken } = useAuth();
    const navigate = useNavigate();

    const { mutate: mutateLogin, error: errorMutateLogin } = useLoginAccount() as {
        mutate: any;
        error: AxiosError<unknown>;
    };

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutateLogin(
            {
                email: emailInput,
                password: passwordInput,
            },
            {
                onSuccess: (data: { data: string }) => {
                    setJwtToken(data.data);
                    navigate('/holidays', { replace: true });
                },
            }
        );
    };

    const inputEmail = {
        id: 'email',
        name: 'email',
        type: 'text',
        placeholder: 'john.doe@gmail.com',
        pattern: '^[#$%&\'*+\\/=?^`\\{\\|\\}~\\-\\.\\w]+@[\\-A-Za-z0-9]+(?:\\.[\\-a-zA-Z0-9]+)+$',
        errorMessage: 'Veuillez entrer une adresse e-mail valide. Par exemple,"john.doe@gmail.com"',
        label: 'Courriel :',
        required: true,
    };

    const inputPassword = {
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: '********',
        errorMessage:
            'Votre mot de passe doit comporter au moins 8 caractères, incluant au minimum un caractère spécial, une majuscule, une minuscule et un chiffre ! ',
        pattern: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*\\.!@$%^&\\(\\)\\{\\}\\[\\]\\:;<>,\\.?\\/~_\\+\\-=\\|çÇ]).{8,32}$',
        label: 'Mot de passe :',
        required: true,
    };

    return {
        handleSubmit,
        emailInput,
        passwordInput,
        isLoading,
        handleChangeEmail,
        handleChangePassword,
        inputEmail,
        inputPassword,
    };
};