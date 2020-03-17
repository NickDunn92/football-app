import React, { useState } from 'react';
import { AddUserFormData, AddUserForm } from '../form/add-user-form';


export interface UsersComponentProps {
    onAddNewUser: (data: AddUserFormData) => void;
}
 
export const UsersComponent: React.FC<UsersComponentProps> = ({ onAddNewUser }) => {

    const handleAddUserClick = (data: AddUserFormData) => {
        onAddNewUser(data)
    }

    return (  
        <>
            <AddUserForm onAddNewUser={handleAddUserClick} />
        </>
    );
}