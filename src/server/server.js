import { createNewPromise } from './utils';

export async function getUsersJsonFromServer(){
    const users = window.localStorage.getItem('users');
    return createNewPromise(JSON.parse(users));
}

export async function setUsersJsonFromServer(users){
    window.localStorage.setItem('users', JSON.stringify(users));
    return createNewPromise(200);
}