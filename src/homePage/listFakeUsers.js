import React from 'react';
import './homePage.css';
import {FakeUser} from './fakeUser';

export function ListFakeUsers({title, users}){
    return(
        <div className="ListFakeComp">
            <h2 className="ListTitle">{title}</h2>
            {createFakeUsersList(users)}
        </div>
    );
}

function createFakeUsersList(users){
    return(
        <ul className="ListFake">
            {users.map((user, index) => (
            <FakeUser 
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                image={user.profileImage}
            />
            ))}
        </ul>
    );
}