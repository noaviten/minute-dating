import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';

export function LoginForm() {
  const addExistingUser = useAction(userActions.addExistingUser);
  return (
    <div className="LoginForm">
        <UserForm title="Log In" submitUser={addExistingUser}> Login </UserForm>
    </div>
  );
}