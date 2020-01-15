import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

export function Header() {
    return (
        <div className="Header">
            <Link to="/" className = "MinuteDatingLink">Minute Dating</Link>
            <Link to="/login" className = "LoginLink">Login</Link>
        </div>
    );
}