import React from 'react';
import './homePage.css';


export function FakeUser({ firstName, lastName, age, image }){
    return(
        <li className="FakeUser">
            <img className="profilePic" src={image} alt="user profile" />
            <h5>{`${firstName} ${lastName}`} <br/> {age} </h5>
        </li>
    );
}