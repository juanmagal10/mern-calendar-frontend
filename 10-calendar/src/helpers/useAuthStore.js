import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import {  onChecking, onLogin, onLogout, clearErrorMessage } from "../store";

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state=>state.auth);
    const dispatch = useDispatch(onChecking);

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10)
        };
    };

    //start register

    const startRegister = async ({ email, name, password, password2 }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth/new/', { email, name, password, password2 });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg||'--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        };
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) return dispatch(onLogout());
        
        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        };
    };

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        //*Propiedades
        errorMessage, 
        status, 
        user, 

        //*Metodos
        startLogin, 
        startRegister,
        checkAuthToken,
        startLogout
    };
};