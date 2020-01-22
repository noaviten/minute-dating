import { getUsersJsonFromServer } from './server';
import { setUsersJsonFromServer } from './server';

async function getUsers(){
    const getUsers = await getUsersJsonFromServer();
    return getUsers ? getUsers.users : [];
}

async function isUserExist(userName){
    const users = await getUsers();
    return users.some((user) => user.userName === userName);
}

export async function isUserExistAndPasswordCorrect(userName, password){
    const users = await getUsers();
    const userExist = await isUserExist(userName);
    if(userExist){
        const currentUser = users.find((user) => user.userName === userName);
        return currentUser.password === password;
    }
    return false;
}

export async function getLoggedInUserProfile(userName){
    const users = await getUsers();
    const currentUser = users.find((user) => user.userName === userName);
    return currentUser;
}

function createUser(userName, password){
    return { 
        userName, 
        password,
        name: "",
        age: "",
        gender: "",
        lookingFor: "" 
    };
}

export async function addNewuser(userName, password){
    const userExist = await isUserExist(userName);
    if(!userExist){
        const newUser = createUser(userName, password);
        const users = await getUsers();
        users.push(newUser);
        setUsersJsonFromServer({users});
        return true;
    }
    return false;
}

export async function updateUserProfile(userName, name, age, gender, lookingFor){
    const users = await getUsers();
    const currentUser = users.find((user) => user.userName === userName);
    if(currentUser){
        currentUser.name = name;
        currentUser.age = age;
        currentUser.gender = gender;
        currentUser.lookingFor = lookingFor;
        await setUsersJsonFromServer({users});
        return currentUser;
    }
    return null;
}