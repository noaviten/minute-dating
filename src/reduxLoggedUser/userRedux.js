import { createSlice } from "@reduxjs/toolkit";

const USER = {};

const createUser = (userName, password, name="", age=0, gender="", lookingFor="") => ({
    userName,
    password,
    name,
    age,
    gender,
    lookingFor
  });

const { reducer, actions } = createSlice({
  name: "user",
  initialState: USER,
  reducers: {
    addExistingUser (_, { payload : { userName, password, name, age, gender, lookingFor }}) {
        return createUser(userName, password, name, age, gender, lookingFor);
    },
    addNewUser (_, { payload : { userName, password }}) {
        return createUser(userName, password);
    },
    updateUser (user, { payload : { name, age, gender, lookingFor}}) {
        return {...user, name, age, gender, lookingFor};
    },
  }
});

export const userReducer = reducer;
export const userActions = actions;
