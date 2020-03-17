import * as React from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import { GET_USERS } from '../../queries/user.queries';
import { CREATE_USER } from '../../mutations/users.mutations';
import { UsersComponent } from './users.component';
import { AddUserFormData } from '../form/add-user-form';

export interface UsersContainerProps {}
 
export const UsersContainer: React.SFC<UsersContainerProps> = () => {

    const client = useApolloClient();

    const { loading, error, data } = useQuery(GET_USERS, {
        client,
    })

    const [addUser] = useMutation(CREATE_USER, {
        client,
        refetchQueries: [{
            query: GET_USERS
        }]
    });

    if (loading) return <>Loading...</>
    if (error) return <>Error</>

    const handleAddUser = (data: AddUserFormData) => {
        addUser({
            variables: {
                input: {
                    ...data
                }
            }
        })
    }

    return (  
        <UsersComponent onAddNewUser={handleAddUser} />
    );
}