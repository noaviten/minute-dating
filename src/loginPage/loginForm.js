import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';
import { isUserExistAndPasswordCorrect } from '../server/dataManager';

export function LoginForm() {
  const addExistingUserRedux = useAction(userActions.addExistingUser);

  const addExistingUser = async (userName, password) => {
    const canLoginUserResponse = await isUserExistAndPasswordCorrect(userName, password);
    if(canLoginUserResponse){
      addExistingUserRedux({userName, password});
      return true;
    }
    return false;
  };

  const alertMsg = "User name not exist or the password is incorrect";

  return (
    <div className="LoginForm">
        <UserForm title="Log In" submitUser={addExistingUser} alertMessage={alertMsg}> Login </UserForm>
    </div>
  );
}