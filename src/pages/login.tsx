import * as React from 'react';
import { LoginForm, LoginFormData } from '../components/form/login-form';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

export interface Props extends RouteComponentProps {
    handleLogin: (data: LoginFormData) => void;
}
 
export const Login: React.FC<Props> = (props: Props) => {
    return (  
        <>
            <Header as='h2' icon textAlign='center'>
                <Icon name='soccer' />
                <Header.Content>Fustbol</Header.Content>
            </Header>
            <LoginForm onLogin={props.handleLogin} />
            <a href='/register'>Create a profile here</a>
        </>
    );
}