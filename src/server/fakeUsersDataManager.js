import { getFakeUsersJsonFromServer } from './server';
import { setFakeUsersJsonFromServer } from './server';
import { createFakeUsers } from './fakeUsers';

export async function getFakeUsers(){
    const getFakeUsers = await getFakeUsersJsonFromServer();
    if(getFakeUsers){
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
    return fakeUsers.slice(0,3);
}