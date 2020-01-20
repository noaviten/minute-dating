import React, {useState} from 'react';
import './loginPage.css';

export function UserForm({children, title, submitUser}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isValid = () => userName.length > 0 && password.length > 0; 

    const submitValidUser = async () => {
        if (isValid()) {
            setUserName("");
            setPassword("");
            await submitUser(userName, password);
        }
      }

    return (
        <form className="UserForm"
        onSubmit={e => {
            e.preventDefault();
            submitValidUser();
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