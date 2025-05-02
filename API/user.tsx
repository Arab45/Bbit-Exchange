import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = 'https://backend-bit.onrender.com/user/sign-up'; // Replace with your API URL

interface User {
    username: string;
    email: string;
    phone: string;
    password: string;
}

export const signUp = async (data: User) => {
    try {
        const response = await axios.post(API_URL, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('Signup Success:', await response.data);
        return await response.data
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;

    };
}

interface LoginUser {
    logInID: string;
    password: string;
}


const API_URL_LOGIN = 'https://backend-bit.onrender.com/user/signIn'; // Replace with your API URL

export const login = async (data: LoginUser) => {
    try {
        const response = await axios.post(API_URL_LOGIN, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });


        const token = response.data.token;


        if (!token) {
            throw new Error("Token not found in response");
        }


        await AsyncStorage.setItem('token', token); // Store the token in AsyncStorage
        console.log('Login Success:', token);


        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;

    };
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token === null) {
            console.log('No token found');
            return null;
        };
        return token;
    } catch (error) {
        console.error('Error retrieving token:', error);
    }
};


export const notificationFn = async () => {
    const response = await axios.get('https://backend-bit.onrender.com/notification/all-notification')
    const data = await response.data;
    console.log('Notification:', data);
    if (!data) {
        throw new Error("Data not found in response");
    }
    return data;
}