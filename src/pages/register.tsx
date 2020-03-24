import * as React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { AddUserForm, AddUserFormData } from '../components/form/add-user-form';

export interface RegisterProps {
    handleRegister: (data: AddUserFormData) => void;
}
 
export const Register: React.FC<RegisterProps> = ({ handleRegister }) => {
    return (  
        <>
            <Header as='h2' icon textAlign='center'>
                <Icon name='soccer' />
                <Header.Content>Futsbol</Header.Content>
            </Header>
            <AddUserForm onAddNewUser={handleRegister} />
        </>
    );
}