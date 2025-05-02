import { login, signUp, notificationFn} from '../API/user';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useSignUp = () => {
    return useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            console.log('User signed up successfully');
        },
        onError: (error) => {
            console.error('Signup error:', error);
        }
    });
};

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            console.log('User logged in successfully');
        },
        onError: (error) => {
            console.error('Login error:', error);
        }
    });
}

export const notification = () => {
    return useQuery({
        queryKey: ['notification'],
        queryFn: notificationFn
    })
}