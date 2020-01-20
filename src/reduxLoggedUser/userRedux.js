import { createSlice } from "@reduxjs/toolkit";


const createUser = (userName, password, name="", age=0, gender="", lookingFor="") => ({
    userName,
    password,
    name,
    age,
    gender,
    lookingFor
});

const USER = createUser("", "");

const { reducer, actions } = createSlice({
  name: "user",
  initialState: USER,
  reducers: {
    saveUserProfile (_, { payload : { userName, password, name, age, gender, lookingFor }}) {
        return createUser(userName, password, name, age, gender, lookingFor);
    }
  }
});

export const userReducer = reducer;
export const userActions = actions;
