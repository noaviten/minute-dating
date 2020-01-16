import React from 'react';
import './loginPage.css';
import { UserForm } from './userForm';

export function LoginPage() {
  return (
    <div className="LoginPage">
        <UserForm title="New User"> Register </UserForm>
        <UserForm title="Log In"> Login </UserForm>
    </div>
  );
}