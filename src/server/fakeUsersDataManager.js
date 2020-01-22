import { getFakeUsersJsonFromServer } from './server';
import { setFakeUsersJsonFromServer } from './server';
import { createFakeUsers } from './fakeUsers';

export async function getFakeUsers(){
    const getFakeUsers = await getFakeUsersJsonFromServer();
    if(getFakeUsers.fakeUsers){
        return getFakeUsers.fakeUsers;
    }
    else{
        const fakeUsers = createFakeUsers();
        await setFakeUsersJsonFromServer(fakeUsers);

        return fakeUsers;
    }
}

export async function recentlyJoined(){
    const fakeUsers = await getFakeUsers();
    return fakeUsers.slice(0,4);
}

export async function recommendedForYou(lookingFor){
    const fakeUsers = await getFakeUsers();
    if(lookingFor === "Female"){
        return fakeUsers.filter((fakeUser) => fakeUser.gender === "Female");
    }
    else if(lookingFor === "Male"){
        return fakeUsers.filter((fakeUser) => fakeUser.gender === "Male");
    }
    return fakeUsers;
}