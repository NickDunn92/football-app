import * as React from 'react';
import { LoginForm } from '../components/form/login-form';
import { RouteComponentProps } from 'react-router-dom';

export interface Props extends RouteComponentProps {
    handleLogin: (data: any) => void;
}
 
export const Login: React.FC<Props> = (props: Props) => {
    return (  
        <LoginForm onLogin={props.handleLogin} />
    );
}