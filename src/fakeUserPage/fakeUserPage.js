import React, {useState, useEffect} from 'react';
import './fakeUserPage.css';
import { useRouteMatch } from "react-router-dom";
import {getFakeUsers} from "../server/fakeUsersDataManager"

export function FakeUserPage() {
    const match = useRouteMatch("/userProfile/:fullName");
    const { fullName } = match.params;
    const [firstName, lastName] = fullName.split("_");

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState("");

    useEffect(() => {
        async function getUser(){
            const fakeUsers = await getFakeUsers();
            const user = fakeUsers.find((user) => user.firstName === firstName && user.lastName === lastName);
            setAge(user.age);
            setImages(user.images);
            setName(`${firstName} ${lastName}`);
            setCurrentImage(user.profileImage);
        }
        getUser();
    }, [firstName, lastName]);

    const changePicLeft = () => {
        const indexCurrImg = images.indexOf(currentImage);
        if(indexCurrImg === 0){
            setCurrentImage(images[images.length - 1]);
        }
        else{
            setCurrentImage(images[indexCurrImg - 1]);
        }
    };

    const changePicRight = () => {
        const indexCurrImg = images.indexOf(currentImage);
        if(indexCurrImg === images.length - 1){
            setCurrentImage(images[0]);
        }
        else{
            setCurrentImage(images[indexCurrImg + 1]);
        }
    };

    return (
        <div className="FakeUserPage">
            <div className="FakeUserProfile">
                <div className="DivProfilePic">
                    <div className="arrow-left" onClick={changePicLeft}></div>
                    <img className="userProfilePic" src={currentImage} alt="user profile"/>
                    <div className="arrow-right" onClick={changePicRight}></div>
                </div>
                <h3 className="Details">{name}</h3>
                <h3 className="Details">{age}</h3>
                <button className="LikeButton">I like him/her</button>
                <div className="IsCreep">
                    <input type="checkbox"/> Is a creep
                </div>
            </div>
        </div>
    );
}