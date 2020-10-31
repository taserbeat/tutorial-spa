import React from 'react';
import { ReactNode } from 'react'
import { Redirect } from 'react-router-dom';
import User from './User';

interface AuthProps {
    children: ReactNode
}

const Auth: React.FC<AuthProps> = (props: AuthProps) => {

    return (
        <>
            { User.isLoggedIn() ? props.children : <Redirect to={'/login'} />}
        </>
    );
}

export default Auth;
