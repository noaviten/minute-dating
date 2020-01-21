import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import { useSelector } from "react-redux"
import heart from '../heart.png';

function loginLinkOrUserName(user){
        if(user.userName){
            return <Link to="/profile" className = "LoginLink">{`Hello, ${user.userName}`}</Link>
        }
        else{
            return (<Link to="/login" className = "LoginLink">Login</Link>);
        }
}

export function Header() {
    const user = useSelector(({ user }) => user);
    return (
        <div className="Header">
            <Link to="/" className = "MinuteDatingLink">Minute Dating</Link>
            <img className="Logo" src={heart} alt="heartLogo" />
            {loginLinkOrUserName(user)}
        </div>
    );
}