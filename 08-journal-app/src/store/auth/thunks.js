
import {loginWithEmailPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle, } from '../../firebase/provider'
import { clearNotesLogout } from '../journal';
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials)

        const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword({ email, password, displayName });
        
        if (!ok) return dispatch(logout({ errorMessage }));
        
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage, displayName }  = await loginWithEmailPassword({ email, password })
        console.log(errorMessage)

        if (!ok) return dispatch(logout({errorMessage}));
        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout());
    }
}

