import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';
import { addNewuser } from '../server/usersDataManager';
import {useHistory} from 'react-router-dom';

export function RegisterForm() {
  const saveUserProfileRedux = useAction(userActions.saveUserProfile);
  const history = useHistory();

  const registerNewUser = async (userName, password) => {
    const canRegisterNewUserResponse = await addNewuser(userName, password);
    if(canRegisterNewUserResponse){
      saveUserProfileRedux({userName, password});
      history.push("/");
    }
    else{
      alert("User name exist");
    }
  };

  return (
    <div className="RegisterForm">
        <UserForm title="New User" submitUser={registerNewUser}> Register </UserForm>
    </div>
  );
}