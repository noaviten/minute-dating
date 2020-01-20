import React, {useState} from 'react';
import './loginPage.css';
import {useHistory} from 'react-router-dom';

const isValid = (userName, password) => userName.length > 0 && password.length > 0; 

export function UserForm({children, title, submitUser, alertMessage}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const  submitValidUser = async (userName, password) => {
        if (isValid(userName,password)) {
            setUserName("");
            setPassword("");
            const isUserSubmitted = await submitUser(userName, password);
            if(isUserSubmitted){
                history.push("/");
            }
            else{
                alert(alertMessage);
            }
        }
      }

    return (
        <form className="UserForm"
        onSubmit={e => {
            e.preventDefault();
            submitValidUser(userName, password);
        }}
        >
            <h2>{title}</h2>
            <div className="DivInput">
                User:
                <input
                    type="text" className="Input"
                    placeholder="User name" required onChange={e => setUserName(e.target.value)} value={userName}
                />
            </div>

            <div className="DivInput">
                Password:
                <input
                    type="password" className="Input"
                    placeholder="Password" required onChange={e => setPassword(e.target.value)} value={password}
                />
            </div>

            <div>
                < button className="Button" disabled={!isValid(userName, password)}>{children}</ button>
            </div>
        </form>
    );
}