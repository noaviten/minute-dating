import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';
import { addNewuser } from '../server/dataManager';

export function RegisterForm() {
  const addNewUserRedux = useAction(userActions.addNewUser);

  const registerNewUser = async (userName, password) => {
    const canRegisterNewUserResponse = await addNewuser(userName, password);
    if(canRegisterNewUserResponse){
      addNewUserRedux({userName, password});
      return true;
    }
    return false;
  };

  const alertMsg = "User name exist";

  return (
    <div className="RegisterForm">
        <UserForm title="New User" submitUser={registerNewUser} alertMessage={alertMsg}> Register </UserForm>
    </div>
  );
}