import React from 'react'
import { useHistory } from 'react-router';

export const Historia = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/');
        //history.replace('/');
    }

    const handleLogout = () => {
        history.push('/login');
        //history.replace('/');
    }
    return{ handleLogin, handleLogout }
}
