import React from 'react';
import './homePage.css';
import {useHistory} from 'react-router-dom';

export function FakeUser({ firstName, lastName, age, image }){
    const history = useHistory();

    const openUserProfile = () => {
          history.push(`/userProfile/${firstName}_${lastName}`);
    };

    return(
        <li className="FakeUser" onClick={openUserProfile}>
            <img className="profilePic" src={image} alt="user profile" />
            <h5>{`${firstName} ${lastName}`} <br/> {age} </h5>
        </li>
    );
}
