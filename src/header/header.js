import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import { useSelector } from "react-redux";

function loginLinkOrUserName(user){
        if(user.userName){
            return <h3>{`Hello, ${user.userName}`}</h3>
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
            {loginLinkOrUserName(user)}
        </div>
    );
}