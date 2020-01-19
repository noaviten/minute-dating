import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';

export function RegisterForm() {
  const addNewUser = useAction(userActions.addNewUser);
  return (
    <div className="RegisterForm">
        <UserForm title="New User" submitUser={addNewUser}> Register </UserForm>
    </div>
  );
}