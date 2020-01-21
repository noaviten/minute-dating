import React from 'react';
import './homePage.css';
import { useSelector } from "react-redux"

function loggedUserHomePag(isLoggeduser){
  if(isLoggeduser){
    return (
      <div className="LoggedHomePage">
        <h2>Recommended for you:</h2>
        <h2>Recently joined:</h2>
      </div>
    );
  }
  else{
    return <h2>OMG, it’s the best dating app EVER!</h2>;
  }
}

export function HomePage() {
  const user = useSelector(({ user }) => user);
  const isLoggeduser = user.userName ? true : false;
  return (
    <div className="HomePage">
      {loggedUserHomePag(isLoggeduser)}
    </div>
  );
}