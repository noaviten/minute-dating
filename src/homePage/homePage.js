import React, {useState, useEffect} from 'react';
import './homePage.css';
import { useSelector } from "react-redux";
import { ListFakeUsers } from './listFakeUsers';
import { recentlyJoined } from '../server/fakeUsersDataManager';
import { recommendedForYou } from '../server/fakeUsersDataManager';

export function HomePage() {
  const user = useSelector(({ user }) => user);

  const [UsersRecommendedForYou, setUsersRecommendedForYou] = useState([]);
  const [UsersRecentlyJoined, setUsersRecentlyJoined] = useState([]);

  useEffect(() => {
      async function filterUsers() {
        const UsersRecently = await recentlyJoined();
        const Usersrecommended = await recommendedForYou(user.lookingFor);
        setUsersRecentlyJoined(UsersRecently);
        setUsersRecommendedForYou(Usersrecommended);
      }
      filterUsers();
  }, [user.lookingFor]);

  const isLoggeduser = user.userName ? true : false;
  return (
    <div className="HomePage">
      {loggedUserHomePag(isLoggeduser, UsersRecommendedForYou, UsersRecentlyJoined)}
    </div>
  );
}


function loggedUserHomePag(isLoggeduser, UsersRecommendedForYou, UsersRecentlyJoined){
  if(isLoggeduser){
    return (
      <div className="LoggedHomePage">
        <ListFakeUsers title="Recommended for you:" users={UsersRecommendedForYou}></ListFakeUsers>
        <ListFakeUsers title="Recently joined:" users={UsersRecentlyJoined}></ListFakeUsers>
      </div>
    );
  }
  else{
    return <h2>OMG, it’s the best dating app EVER!</h2>;
  }
}