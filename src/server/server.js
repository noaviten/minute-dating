import { createNewPromise } from './utils';

async function getItemJsonFromServer(key){
    const item = window.localStorage.getItem(key);
    return createNewPromise(JSON.parse(item));
}

async function setItemJsonFromServer(key, item){
    window.localStorage.setItem(key, JSON.stringify(item));
    return createNewPromise(200);
}

export async function getUsersJsonFromServer(){
    return getItemJsonFromServer('users');
}

export async function setUsersJsonFromServer(users){
    return setItemJsonFromServer('users', users);
}

export async function getFakeUsersJsonFromServer(){
    return getItemJsonFromServer('fakeUsers');
}

export async function setFakeUsersJsonFromServer(fakeUsers){
    return setItemJsonFromServer('fakeUsers', fakeUsers);
}