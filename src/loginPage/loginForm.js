import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';
import { isUserExistAndPasswordCorrect } from '../server/usersDataManager';
import {useHistory} from 'react-router-dom';
import {getLoggedInUserProfile} from '../server/usersDataManager';

export function LoginForm() {
  const saveUserProfileRedux = useAction(userActions.saveUserProfile);
  const history = useHistory();

  const addExistingUser = async (userName, password) => {
    const canLoginUserResponse = await isUserExistAndPasswordCorrect(userName, password);
    if(canLoginUserResponse){
      const currentUser = await getLoggedInUserProfile(userName);
      const {name, age, gender, lookingFor} = currentUser;
      saveUserProfileRedux({userName, password, name, age, gender, lookingFor});
      history.push("/");
    }
    else{
      alert("User name not exist or the password is incorrect");
    }
  };

  return (
    <div className="LoginForm">
        <UserForm title="Log In" submitUser={addExistingUser}> Login </UserForm>
    </div>
  );
}