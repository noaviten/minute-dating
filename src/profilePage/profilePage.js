import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './profliePage.css';
import { useAction } from '../reduxLoggedUser/action';
import { userActions } from '../reduxLoggedUser/userRedux';
import { updateUserProfile } from '../server/usersDataManager';

export function ProfilePage() {
    const user = useSelector(({ user }) => user);
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [lookingFor, setLookingFor] = useState(user.lookingFor);
    const {userName} = user;

    const isValid = () =>
        name.length > 0 && age > 0; 

    const saveUserProfileRedux = useAction(userActions.saveUserProfile);

    const submitValidProfile = async () => {
        if (isValid()) {
            const currentUser = await updateUserProfile(userName, name, age, gender, lookingFor);
            if(currentUser){   
                saveUserProfileRedux({userName: currentUser.userName, 
                    password: currentUser.password ,
                    name: currentUser.name, 
                    age: currentUser.age, 
                    gender: currentUser.gender, 
                    lookingFor: currentUser.lookingFor
                });
            }
        }
      }

    return (
        <div className="ProfilePage">
            <form className="profileForm"
            onSubmit={e => {
                e.preventDefault();
                submitValidProfile();
            }}
            >
                <div className="DivProfileInput">
                    Name:
                    <input
                        type="text" className="PorfileInput"
                        placeholder="Name" required onChange={e => setName(e.target.value)} value={name}
                    />
                </div>

                <div className="DivProfileInput">
                    Age:
                    <input
                        type="number" className="PorfileInput"
                        placeholder="Age" required onChange={e => setAge(e.target.value)} value={age}
                    />
                </div>

                <div className="DivProfileInput">
                    Gender:
                    <select className="PorfileInput" value={gender} required onChange={e => setGender(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>

                <div className="DivProfileInput">
                    Looking For:
                    <select className="PorfileInput" value={lookingFor} required onChange={e => setLookingFor(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="female and Male">Female and Male</option>
                    </select>
                </div>

                <div>
                    < button className="SaveButton" disabled={!isValid(name, age, gender, lookingFor)}>Save</ button>
                </div>
            </form>
        </div>
    );
}