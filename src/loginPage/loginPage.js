import React from 'react';
import './loginPage.css';
import { RegisterForm } from './registerForm';
import { LoginForm } from './loginForm';

export function LoginPage() {
  return (
    <div className="LoginPage">
        <RegisterForm />
        <LoginForm />
    </div>
  );
}